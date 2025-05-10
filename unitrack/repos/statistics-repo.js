import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class StatisticsRepo {
  async getTop3MostEnrolledCourses() {
    const result = await prisma.classEnrollment.groupBy({
      by: ["classId"],
      _count: {
        classId: true,
      },
      orderBy: {
        _count: {
          classId: "desc",
        },
      },
      take: 3,
    });

    const enriched = await Promise.all(
      result.map(async (item) => {
        const classObj = await prisma.class.findUnique({
          where: { classId: item.classId },
          include: { course: true },
        });

        const courseId = classObj?.course?.courseId ?? "Unknown";
        const title = classObj?.course?.title ?? "Unknown";

        return `${courseId} (${item._count.classId})`;
      })
    );

    return enriched;
  }

  async getAverageGPAByMajor() {
    const gradePoints = {
      A: 4.0,
      "B+": 3.5,
      B: 3.0,
      "C+": 2.5,
      C: 2.0,
      "D+": 1.5,
      D: 1.0,
    };

    const [grades, students] = await Promise.all([
      prisma.completedCourse.findMany({
        select: { studentId: true, letterGrade: true },
      }),
      prisma.student.findMany({
        select: { studentId: true, majorId: true },
      }),
    ]);

    const majorMap = new Map();
    for (const { studentId, majorId } of students) {
      majorMap.set(studentId, majorId);
    }

    // Group grades by student
    const gpaBuckets = {
      CMPS: [],
      CMPE: [],
    };

    const studentGrades = new Map();

    for (const { studentId, letterGrade } of grades) {
      const point = gradePoints[letterGrade] ?? 0.0;
      if (!studentGrades.has(studentId)) {
        studentGrades.set(studentId, []);
      }
      studentGrades.get(studentId).push(point);
    }

    // Compute GPA per student and sort into major buckets
    for (const [studentId, gradesArr] of studentGrades.entries()) {
      const major = majorMap.get(studentId);
      if (major !== "CMPS" && major !== "CMPE") continue;

      const gpa = gradesArr.reduce((a, b) => a + b, 0) / gradesArr.length;
      gpaBuckets[major].push(gpa);
    }

    // Compute average GPA per major
    const cmpsGPA =
      gpaBuckets.CMPS.reduce((a, b) => a + b, 0) / gpaBuckets.CMPS.length || 0;
    const cmpeGPA =
      gpaBuckets.CMPE.reduce((a, b) => a + b, 0) / gpaBuckets.CMPE.length || 0;

    return {
      CMPS: cmpsGPA.toFixed(2),
      CMPE: cmpeGPA.toFixed(2),
    };
  }

  async getTop3CoursesWithMostFails() {
    // fetch all completed courses with F
    const failedCourses = await prisma.completedCourse.findMany({
      where: { letterGrade: "F" },
      select: { courseId: true },
    });

    // Count F’s per course
    const failCount = {};

    for (const { courseId } of failedCourses) {
      if (!failCount[courseId]) failCount[courseId] = 0;
      failCount[courseId]++;
    }

    // Sort and take top 3
    const sorted = Object.entries(failCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([courseId, count]) => `${courseId} (${count})`);

    return sorted;
  }

  async getTop3InstructorsWithMostClasses() {
    // Group teaching records by instructorId and count
    const grouped = await prisma.teachingClasses.groupBy({
      by: ["instructorId"],
      _count: {
        instructorId: true,
      },
      orderBy: {
        _count: {
          instructorId: "desc",
        },
      },
      take: 3,
    });

    // Fetch instructor info for top 3
    const result = await Promise.all(
      grouped.map(async ({ instructorId, _count }) => {
        const inst = await prisma.instructor.findUnique({
          where: { instructorId },
          include: {
            user: true,
          },
        });

        const name = inst?.user
          ? `${inst.user.firstName} ${inst.user.lastName}`
          : `Instructor ${instructorId}`;

        return `${name} (${_count.instructorId} classes)`;
      })
    );

    return result;
  }

  async getSemesterCourseCountsByMajor() {
    const currentClasses = await prisma.courseCurrentClasses.findMany({
      select: { classId: true, courseId: true },
    });

    const offerings = await prisma.courseMajorOfferings.findMany({
      select: { courseId: true, majorId: true },
    });

    const courseMajorMap = {};
    for (const { courseId, majorId } of offerings) {
      if (!courseMajorMap[courseId]) {
        courseMajorMap[courseId] = [];
      }
      courseMajorMap[courseId].push(majorId);
    }

    // Count how many courses are accessible to which major(s)
    let csOnly = 0;
    let ceOnly = 0;
    let both = 0;

    for (const { courseId } of currentClasses) {
      const majors = courseMajorMap[courseId] || [];
      const hasCS = majors.includes("CMPS");
      const hasCE = majors.includes("CMPE");

      if (hasCS && hasCE) both++;
      else if (hasCS) csOnly++;
      else if (hasCE) ceOnly++;
    }

    return { csOnly, ceOnly, both };
  }

  async getTopStudentsByMajorGPA() {
    const gradePoints = {
      A: 4.0,
      "B+": 3.5,
      B: 3.0,
      "C+": 2.5,
      C: 2.0,
      "D+": 1.5,
      D: 1.0,
    };

    // Fetch all grades and student major info
    const [grades, students] = await Promise.all([
      prisma.completedCourse.findMany({
        select: { studentId: true, letterGrade: true },
      }),
      prisma.student.findMany({
        select: { studentId: true, majorId: true, email: true },
      }),
    ]);

    const studentInfo = new Map();
    for (const { studentId, majorId, email } of students) {
      studentInfo.set(studentId, { majorId, email });
    }

    const gradeMap = new Map();
    for (const { studentId, letterGrade } of grades) {
      const point = gradePoints[letterGrade] ?? 0.0;
      if (!gradeMap.has(studentId)) {
        gradeMap.set(studentId, []);
      }
      gradeMap.get(studentId).push(point);
    }

    // Compute GPA per student and group by major
    const csStudents = [];
    const ceStudents = [];

    for (const [studentId, gradeList] of gradeMap.entries()) {
      const info = studentInfo.get(studentId);
      if (!info) continue;

      const gpa = gradeList.reduce((a, b) => a + b, 0) / gradeList.length;
      const name = info.email
        .split("@")[0]
        .replace(/\./g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());

      const record = { name, gpa: gpa.toFixed(2) };

      if (info.majorId === "CMPS") csStudents.push(record);
      else if (info.majorId === "CMPE") ceStudents.push(record);
    }

    // Sort & pick top 3
    const topCS = csStudents.sort((a, b) => b.gpa - a.gpa).slice(0, 3);
    const topCE = ceStudents.sort((a, b) => b.gpa - a.gpa).slice(0, 3);

    return {
      CMPS: topCS,
      CMPE: topCE,
    };
  }

  async getStudentGenderBreakdownByMajor() {
    const students = await prisma.student.findMany({
      select: {
        majorId: true,
        user: {
          select: { gender: true },
        },
      },
    });

    let csMale = 0;
    let csFemale = 0;
    let ceMale = 0;
    let ceFemale = 0;

    for (const { majorId, user } of students) {
      const gender = user.gender?.toLowerCase();

      if (majorId === "CMPS") {
        if (gender === "male") csMale++;
        else if (gender === "female") csFemale++;
      }

      if (majorId === "CMPE") {
        if (gender === "male") ceMale++;
        else if (gender === "female") ceFemale++;
      }
    }

    return {
      csMale,
      csFemale,
      ceMale,
      ceFemale,
    };
  }

  async getTopSubjectsByInstructorCount() {
    const grouped = await prisma.expertise.groupBy({
      by: ["expertise"],
      _count: {
        instructorId: true,
      },
      orderBy: {
        _count: {
          instructorId: "desc",
        },
      },
      take: 3,
    });

    const result = grouped.map(({ expertise, _count }) => {
      return `${expertise} (${_count.instructorId} instructors)`;
    });

    return result;
  }

  async getTop3WaitlistedClasses() {
    const pendingClasses = await prisma.class.findMany({
      where: { classStatus: "pending" },
      select: {
        classId: true,
        courseId: true,
        enrollmentActual: true,
        section: true,
      },
    });

    const sorted = pendingClasses
      .sort((a, b) => b.enrollmentActual - a.enrollmentActual)
      .slice(0, 3);

    return sorted.map(
      ({ courseId, section, enrollmentActual }) =>
        `${courseId} - ${section} (${enrollmentActual} waitlisted)`
    );
  }

  async getTop3CoursesWithMostOpenSections() {
    const openClasses = await prisma.class.findMany({
      where: { classStatus: "open" },
      select: { courseId: true },
    });

    const sectionCountMap = {};
    for (const { courseId } of openClasses) {
      sectionCountMap[courseId] = (sectionCountMap[courseId] || 0) + 1;
    }

    const top3 = Object.entries(sectionCountMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([courseId, count]) => `${courseId} (${count} open sections)`);

    return top3;
  }
}

export default new StatisticsRepo();
