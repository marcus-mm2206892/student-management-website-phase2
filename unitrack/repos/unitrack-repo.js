import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UniTrackRepo {
  // Admin
  async getAllAdmins() {
    return await prisma.admin.findMany();
  }
  async getAdminById(adminId) {
    return await prisma.admin.findUnique({ where: { adminId } });
  }

  async getAdminByEmail(email) {
    return await prisma.admin.findFirst({ where: { email } });
  }

  async createAdmin(data) {
    return await prisma.admin.create({ data });
  }
  async updateAdmin(adminId, data) {
    return await prisma.admin.update({ where: { adminId }, data });
  }
  async deleteAdmin(adminId) {
    return await prisma.admin.delete({ where: { adminId } });
  }

  // User
  async getAllUsers() {
    return await prisma.user.findMany();
  }
  async getUserById(email) {
    return await prisma.user.findUnique({ where: { email } });
  }
  async createUser(data) {
    return await prisma.user.create({ data });
  }
  async updateUser(email, data) {
    return await prisma.user.update({ where: { email }, data });
  }
  async deleteUser(email) {
    return await prisma.user.delete({ where: { email } });
  }

  async getUsersByRole(role) {
    return await prisma.user.findMany({ where: { role: role } });
  }

  // Student
  async getAllStudents() {
    return await prisma.student.findMany({
      include: {
        semesterEnrollment: { include: { classes: true } },
        completedCourses: { include: { course: true } },
      },
    });
  }

  async getStudentById(id) {
    return await prisma.student.findUnique({
      where: { studentId: id },
      include: {
        semesterEnrollment: { include: { classes: true } },
        completedCourses: { include: { course: true } },
        major: { include: { CourseMajorOfferings: true } },
      },
    });
  }

  async getStudentByEmail(email) {
    return await prisma.student.findUnique({
      where: { email: email },
      include: {
        semesterEnrollment: { include: { classes: true } },
        completedCourses: { include: { course: true } },
        major: { include: { CourseMajorOfferings: true } },
      },
    });
  }

  async createStudent(data) {
    return await prisma.student.create({ data });
  }

  async updateStudent(id, data) {
    return await prisma.student.update({ where: { studentId: id }, data });
  }

  async deleteStudent(id) {
    return await prisma.student.delete({ where: { studentId: id } });
  }

  // Course
  async getAllCourses() {
    return await prisma.course.findMany({
      include: {
        CourseMajorOfferings: true,
        prerequisites: true,
        CourseCurrentClasses: true,
      },
    });
  }

  async getRecommendedCourses(studentId, majorId) {
    const completed = await prisma.completedCourse.findMany({
      where: { studentId },
      select: { courseId: true },
    });
    const completedCourseIds = completed.map((c) => c.courseId);

    const required = await prisma.courseMajorOfferings.findMany({
      where: { majorId },
      select: { courseId: true },
    });
    const requiredCourseIds = required.map((r) => r.courseId);

    const uncompletedRequiredIds = requiredCourseIds.filter(
      (id) => !completedCourseIds.includes(id)
    );

    return await prisma.course.findMany({
      where: { courseId: { in: uncompletedRequiredIds } },
      include: { CourseMajorOfferings: true },
    });
  }

  async getSupplementaryCourses(studentId) {
    const completed = await prisma.completedCourse.findMany({
      where: { studentId },
      select: { courseId: true },
    });
    const completedCourseIds = completed.map((c) => c.courseId);

    const all = await prisma.course.findMany({
      include: { CourseMajorOfferings: true },
    });

    return all.filter(
      (c) =>
        !completedCourseIds.includes(c.courseId) &&
        !c.courseId.startsWith("CMPS") &&
        !c.courseId.startsWith("CMPE")
    );
  }

  async getElectiveCourses(studentId) {
    const electiveCourseIds = [
      "CMPE471",
      "CMPE483",
      "CMPS360",
      "CMPS482",
      "CMPS497",
    ];

    const completed = await prisma.completedCourse.findMany({
      where: { studentId },
      select: { courseId: true },
    });
    const completedCourseIds = completed.map((c) => c.courseId);

    const filteredElectives = electiveCourseIds.filter(
      (id) => !completedCourseIds.includes(id)
    );

    return await prisma.course.findMany({
      where: { courseId: { in: filteredElectives } },
      include: { CourseMajorOfferings: true },
    });
  }

  async getCourseWithPrerequisites(id) {
    return await prisma.course.findUnique({
      where: { courseId: id },
      include: {
        prerequisites: true,
      },
    });
  }

  async getCourseById(id) {
    return await prisma.course.findUnique({
      where: { courseId: id },
      include: {
        CourseMajorOfferings: true,
        prerequisites: true,
        CourseCurrentClasses: true,
      },
    });
  }

  async getCurrentCoursesByStudentEmail(email) {
    const student = await prisma.student.findUnique({
      where: { email },
      include: {
        semesterEnrollment: {
          include: {
            classes: true,
          },
        },
      },
    });

    if (!student) return [];
    // Flatten and extract all courseIds from current semester classes
    const courseIds = student.semesterEnrollment.flatMap((enrollment) =>
      enrollment.classes.map((cls) => cls.courseId)
    );

    return courseIds;
  }

  async getPendingCourseIdsByStudentEmail(email) {
    const student = await prisma.student.findUnique({
      where: { email },
      include: {
        semesterEnrollment: {
          include: {
            classes: true,
          },
        },
      },
    });

    if (!student) return [];

    const studentClasses = student.semesterEnrollment.flatMap((enrollment) =>
      enrollment.classes.map((cls) => cls.classId)
    );

    const pendingClasses = await prisma.class.findMany({
      where: {
        classId: {
          in: studentClasses,
        },
        classStatus: "pending",
      },
      select: {
        courseId: true,
      },
    });

    // Extracting courseIds from the result
    const courseIds = pendingClasses.map((cls) => cls.courseId);

    return studentClasses;
  }

  async checkCourseId(courseId) {
    const course = await prisma.course.findUnique({
      where: { courseId },
    });

    if (course) return true;
    else return false;
  }

  async createCourse(data) {
    return await prisma.course.create({ data });
  }

  async updateCourse(id, data) {
    return await prisma.course.update({ where: { courseId: id }, data });
  }

  async deleteCourse(id) {
    return await prisma.course.delete({ where: { courseId: id } });
  }

  async getCourses() {
    return await prisma.course.findMany({
      include: { CourseMajorOfferings: true },
    });
  }

  // Completed Course
  async getAllCompletedCourses() {
    return await prisma.completedCourse.findMany();
  }

  async getCompletedCourseById(id) {
    return await prisma.completedCourse.findUnique({
      where: { id: Number(id) },
    });
  }

  async getCompletedCoursesByStudentEmail(email) {
    const student = await prisma.student.findUnique({
      where: { email: email },
      include: {
        completedCourses: true,
      },
    });

    if (!student) return [];

    return student.completedCourses;
  }

  async createCompletedCourse(data) {
    return await prisma.completedCourse.create({ data });
  }

  async updateCompletedCourse(id, data) {
    return await prisma.completedCourse.update({
      where: { id: Number(id) },
      data,
    });
  }

  async deleteCompletedCourse(id) {
    return await prisma.completedCourse.delete({ where: { id: Number(id) } });
  }

  // Semester Enrollment
  async getAllSemesterEnrollments() {
    return await prisma.semesterEnrollment.findMany();
  }

  async getSemesterEnrollmentByStudentId(id) {
    return await prisma.semesterEnrollment.findUnique({
      where: { studentId: id },
      include: { classes: true, student: true },
    });
  }

  async createSemesterEnrollment(data) {
    return await prisma.semesterEnrollment.create({ data });
  }

  async updateSemesterEnrollment(id, data) {
    return await prisma.semesterEnrollment.update({
      where: { studentId: id },
      data,
    });
  }

  async deleteSemesterEnrollment(id) {
    return await prisma.semesterEnrollment.delete({
      where: { id: Number(id) },
    });
  }

  // Instructor
  async getAllInstructors() {
    return await prisma.instructor.findMany({
      include: { teachingClasses: true, gradedClasses: true, user: true },
    });
  }

  // async getInstructorById(id) {
  //   return await prisma.instructor.findUnique({
  //     where: {
  //       instructorId: id,
  //       include: { teachingClasses: true, gradedClasses: true },
  //     },
  //   });
  // }

  async getInstructorById(id) {
    return await prisma.instructor.findUnique({
      where: {
        instructorId: id,
      },
      include: {
        teachingClasses: true,
        gradedClasses: true,
      },
    });
  }

  async getInstructorByEmail(email) {
    return await prisma.instructor.findUnique({
      where: { email: email },
      include: { teachingClasses: true, gradedClasses: true },
    });
  }

  async createInstructor(data) {
    return await prisma.instructor.create({ data });
  }

  async updateInstructor(id, data) {
    return await prisma.instructor.update({
      where: { instructorId: id },
      data,
    });
  }

  async updateInstructorTeachingClasses(instructorId, data) {
    await prisma.instructor.update({
      where: { instructorId: instructorId },
      data: {
        teachingClasses: {
          connect: {
            classId: data.classId,
          },
        },
      },
    });

    await prisma.teachingClasses.create({ data });
  }

  async updateInstructorGradedClasses(instructorId, data) {
    await prisma.instructor.update({
      where: { instructorId: instructorId },
      data: {
        gradedClasses: {
          connect: {
            classId: data.classId,
          },
        },
      },
    });

    await prisma.gradedClasses.create({
      data: {
        class: {
          connect: { classId: data.classId },
        },
        instructor: {
          connect: { instructorId: instructorId },
        },
      },
    });
  }

  async deleteInstructor(id) {
    return await prisma.instructor.delete({ where: { instructorId: id } });
  }

  // Major
  async getAllMajors() {
    return await prisma.major.findMany();
  }

  async getMajorById(id) {
    return await prisma.major.findUnique({ where: { majorId: id } });
  }

  async createMajor(data) {
    return await prisma.major.create({ data });
  }

  async updateMajor(id, data) {
    return await prisma.major.update({ where: { majorId: id }, data });
  }

  async deleteMajor(id) {
    return await prisma.major.delete({ where: { majorId: id } });
  }

  // Class
  async getAllClasses() {
    return await prisma.class.findMany({
      include: {
        course: {
          include: {
            prerequisites: true,
          },
        },
        instructors: true,
        schedule: true,
      },
    });
  }

  async getClassById(id) {
    return await prisma.class.findUnique({
      where: { classId: id },
      include: { schedule: true, instructors: true },
    });
  }

  async getAllAvailableClasses() {
    return await prisma.class.findMany({
      where: {
        classStatus: {
          not: "completed",
        },
      },
      include: {
        instructors: true,
        schedule: true,
        course: {
          include: {
            prerequisites: true,
          },
        },
      },
    });
  }

  async getRegisteredClassRecordsByStudentEmail(email) {
    const student = await prisma.student.findUnique({
      where: { email },
      select: { studentId: true },
    });

    if (!student) return [];

    const semesterEnrollments = await prisma.semesterEnrollment.findMany({
      where: { studentId: student.studentId },
      select: { id: true },
    });

    const semesterEnrollmentIds = semesterEnrollments.map((s) => s.id);

    const enrollments = await prisma.classEnrollment.findMany({
      where: {
        semesterEnrollmentId: {
          in: semesterEnrollmentIds,
        },
      },
    });

    const classIds = enrollments.map((e) => e.classId);

    const classes = await prisma.class.findMany({
      where: {
        classId: {
          in: classIds,
        },
      },
      select: {
        classId: true,
        courseId: true,
        classStatus: true,
      },
    });

    const classMap = new Map();
    for (const cls of classes) {
      classMap.set(cls.classId, {
        courseId: cls.courseId,
        classStatus: cls.classStatus,
      });
    }

    return enrollments
      .map((e) => {
        const match = classMap.get(e.classId);
        return match ? match : null;
      })
      .filter(Boolean);
  }

  async getClassIdsByCourse(courseId) {
    const classes = await prisma.courseCurrentClasses.findMany({
      where: { courseId },
    });
    return classes.map((c) => c.classId);
  }

  async getClassDetailsById(classId) {
    const classObj = await prisma.class.findUnique({
      where: { classId },
    });

    const scheduleObj = await prisma.schedule.findUnique({
      where: { classId },
    });

    const teachingRecords = await prisma.teachingClasses.findMany({
      where: { classId },
    });

    const instructorData = await Promise.all(
      teachingRecords.map(async (t) => {
        const inst = await prisma.instructor.findUnique({
          where: { instructorId: t.instructorId },
          include: {
            user: true,
          },
        });

        return inst && inst.user
          ? {
              id: inst.instructorId,
              name: `${inst.user.firstName} ${inst.user.lastName}`,
              department: inst.department,
              college: inst.college,
            }
          : null;
      })
    );

    return {
      courseId: classObj?.courseId ?? "Unknown",
      campus: classObj?.campus ?? "Unknown",
      crn: classObj?.classId ?? "Unknown",
      section: classObj?.section ?? "Unknown",
      startTime: scheduleObj?.startTime ?? "N/A",
      endTime: scheduleObj?.endTime ?? "N/A",
      schedule: scheduleObj?.scheduleType?.split("") ?? [],
      instructors: instructorData.filter(Boolean),
    };
  }

  async getApprovedClasses() {
    return await prisma.class.findMany({ where: { classStatus: "open" } });
  }

  async getPendingClasses() {
    return await prisma.class.findMany({ where: { classStatus: "pending" } });
  }

  async getRejectedClasses() {
    return await prisma.class.findMany({ where: { classStatus: "rejected" } });
  }

  async createClass(newClass) {
    const createdClass = await prisma.class.create({
      data: {
        classId: newClass.classId,
        courseId: newClass.courseId,
        semester: newClass.semester,
        instructionalMethod: newClass.instructionalMethod,
        campus: newClass.campus,
        enrollmentActual: newClass.enrollmentActual,
        enrollmentMaximum: newClass.enrollmentMaximum,
        classStatus: newClass.classStatus,
        schedule: {
          create: {
            scheduleType: newClass.schedule.scheduleType,
            startTime: newClass.schedule.startTime,
            endTime: newClass.schedule.endTime,
          },
        },
        section: newClass.section,
        instructors: {
          connect: newClass.instructors.map((i) => ({
            instructorId: i.instructorId,
          })),
        },
      },
    });

    await prisma.courseCurrentClasses.create({
      data: {
        courseId: newClass.courseId,
        classId: newClass.classId,
      },
    });

    const teachingClassCreates = newClass.instructors.map((instructor) =>
      prisma.teachingClasses.create({
        data: {
          classId: newClass.classId,
          instructorId: instructor.instructorId,
        },
      })
    );

    await Promise.all(teachingClassCreates);

    return createdClass;
  }

  async updateClass(id, data) {
    return await prisma.class.update({ where: { classId: id }, data });
  }

  async deleteClass(id) {
    return await prisma.class.delete({ where: { classId: id } });
  }

  async getLatestCreatedClass() {
    return await prisma.class.findFirst({
      orderBy: {
        classId: "desc",
      },
    });
  }

  async getPendingApprovalClasses() {
    return await prisma.class.findMany({
      where: {
        classStatus: "pending",
        enrollmentActual: {
          gte: 5,
        },
      },
    });
  }

  // Class Enrollment
  async getAllClassEnrollments() {
    return await prisma.classEnrollment.findMany();
  }

  async getClassEnrollmentById(id) {
    return await prisma.classEnrollment.findUnique({
      where: { id: Number(id) },
    });
  }

  async createClassEnrollment(data) {
    return await prisma.classEnrollment.create({ data });
  }

  async updateClassEnrollment(classId, semesterEnrollmentId, data) {
    return await prisma.classEnrollment.updateMany({
      where: {
        classId: classId,
        semesterEnrollmentId: semesterEnrollmentId,
      },
      data,
    });
  }

  async deleteClassEnrollment(classId, semesterEnrollmentId) {
    return await prisma.classEnrollment.deleteMany({
      where: {
        classId: classId,
        semesterEnrollmentId: semesterEnrollmentId,
      },
    });
  }

  // Expertise
  async getAllExpertise() {
    return await prisma.expertise.findMany();
  }

  async getExpertiseById(id) {
    return await prisma.expertise.findUnique({ where: { id: Number(id) } });
  }

  async createExpertise(data) {
    return await prisma.expertise.create({ data });
  }

  async updateExpertise(id, data) {
    return await prisma.expertise.update({ where: { id: Number(id) }, data });
  }

  async deleteExpertise(id) {
    return await prisma.expertise.delete({ where: { id: Number(id) } });
  }

  // Schedule
  async getAllSchedules() {
    return await prisma.schedule.findMany();
  }

  async getScheduleById(id) {
    return await prisma.schedule.findUnique({ where: { id: Number(id) } });
  }

  async createSchedule(data) {
    return await prisma.schedule.create({ data });
  }

  async updateSchedule(id, data) {
    return await prisma.schedule.update({ where: { id: Number(id) }, data });
  }

  async deleteSchedule(id) {
    return await prisma.schedule.delete({ where: { id: Number(id) } });
  }

  // CourseCurrentClasses
  async getAllCourseCurrentClasses() {
    return await prisma.courseCurrentClasses.findMany();
  }
  async getCourseCurrentClassById(id) {
    return await prisma.courseCurrentClasses.findUnique({ where: { id } });
  }
  async createCourseCurrentClass(data) {
    return await prisma.courseCurrentClasses.create({ data });
  }
  async updateCourseCurrentClass(id, data) {
    return await prisma.courseCurrentClasses.update({ where: { id }, data });
  }
  async deleteCourseCurrentClass(id) {
    return await prisma.courseCurrentClasses.delete({ where: { id } });
  }

  // CourseMajorOfferings
  async getAllCourseMajorOfferings() {
    return await prisma.courseMajorOfferings.findMany();
  }

  async getAllCourseIds() {
    const all = await prisma.courseCurrentClasses.findMany();
    const unique = [...new Set(all.map((e) => e.courseId))];
    return unique;
  }

  async getMajorCourseIdsByEmail(email) {
    const student = await prisma.student.findUnique({
      where: { email },
      include: {
        major: {
          include: {
            CourseMajorOfferings: {
              select: { courseId: true },
            },
          },
        },
      },
    });

    if (!student) {
      throw new Error(`Student with email ${email} not found`);
    }

    return student.major.CourseMajorOfferings.map(
      (offering) => offering.courseId
    );
  }

  async getCourseMajorOfferingById(id) {
    return await prisma.courseMajorOfferings.findUnique({ where: { id } });
  }
  async createCourseMajorOffering(data) {
    return await prisma.courseMajorOfferings.create({ data });
  }
  async updateCourseMajorOffering(id, data) {
    return await prisma.courseMajorOfferings.update({ where: { id }, data });
  }
  async deleteCourseMajorOffering(id) {
    return await prisma.courseMajorOfferings.delete({ where: { id } });
  }

  // Prerequisite
  async getAllPrerequisites() {
    return await prisma.prerequisite.findMany();
  }
  async getPrerequisiteById(id) {
    return await prisma.prerequisite.findUnique({ where: { id } });
  }
  async createPrerequisite(data) {
    return await prisma.prerequisite.create({ data });
  }
  async updatePrerequisite(id, data) {
    return await prisma.prerequisite.update({ where: { id }, data });
  }
  async deletePrerequisite(id) {
    return await prisma.prerequisite.delete({ where: { id } });
  }

  // Teaching Classes
  async createTeachingClass(data) {
    return await prisma.teachingClasses.create({ data });
  }

  // Graded Classes
  async createGradedClass(data) {
    return await prisma.gradedClasses.create({ data });
  }

  //Subjects

  async getAllSubjects() {
    return await prisma.subjects.findMany();
  }

  async getAllSubjectCode() {
    const codes = await prisma.subjects.findMany({
      select: {
        code: true, 
      },
    });

  return codes.map((s) => s.code); 
  }

  async getSubject(code) {
    return await prisma.subjects.findFirst({
      where: { code },
    });
  }
}

export default new UniTrackRepo();
