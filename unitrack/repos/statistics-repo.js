import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class StatisticsRepo {
  //STATISTICS
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

    // Step 1: Build a map of studentId → majorId
    const majorMap = new Map();
    for (const { studentId, majorId } of students) {
      majorMap.set(studentId, majorId);
    }

    // Step 2: Group grades by student
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

    // Step 3: Compute GPA per student and sort into major buckets
    for (const [studentId, gradesArr] of studentGrades.entries()) {
      const major = majorMap.get(studentId);
      if (major !== "CMPS" && major !== "CMPE") continue;

      const gpa = gradesArr.reduce((a, b) => a + b, 0) / gradesArr.length;
      gpaBuckets[major].push(gpa);
    }

    // Step 4: Compute average GPA per major
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
    // Step 1: fetch all completed courses with F
    const failedCourses = await prisma.completedCourse.findMany({
      where: { letterGrade: "F" },
      select: { courseId: true },
    });

    // Step 2: Count F’s per course
    const failCount = {};

    for (const { courseId } of failedCourses) {
      if (!failCount[courseId]) failCount[courseId] = 0;
      failCount[courseId]++;
    }

    // Step 3: Sort and take top 3
    const sorted = Object.entries(failCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([courseId, count]) => `${courseId} (${count})`);

    return sorted;
  }

  async getTop3InstructorsWithMostClasses() {
    // Step 1: Group teaching records by instructorId and count
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

    // Step 2: Fetch instructor info for top 3
    const result = await Promise.all(
      grouped.map(async ({ instructorId, _count }) => {
        const inst = await prisma.instructor.findUnique({
          where: { instructorId },
          include: {
            user: true, // assumes User has firstName + lastName
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
}

export default new StatisticsRepo();
