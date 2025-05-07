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
    return await prisma.user.findMany({where: {role: role}})
  }

  // Student
  async getAllStudents() {
    return await prisma.student.findMany({include: {semesterEnrollment: {include: { classes: true}}, completedCourses: true}});
  }

  async getStudentById(id) {
    return await prisma.student.findUnique({ where: { studentId: id } });
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
    return await prisma.course.findMany( {
      include: {
        CourseMajorOfferings: true,
        prerequisites: true,
        CourseCurrentClasses: true
      }
    });
  }

  async getCourseWithPrerequisites(id) {
    return await prisma.course.findUnique({
      where: { courseId: id },
      include: {
        prerequisites: true, // loads prerequisiteId and minGrade
      },
    });
  }

  async getCourseById(id) {
    return await prisma.course.findUnique({ where: { courseId: id }, include: {
      CourseMajorOfferings: true,
      prerequisites: true,
      CourseCurrentClasses: true
    } });
  }

  async getCurrentCoursesByStudentId(studentId) {
    const student = await prisma.student.findUnique({
      where: { studentId },
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
    const courseIds = student.semesterEnrollment.flatMap(enrollment =>
      enrollment.classes.map(cls => cls.courseId)
    );
  
    return courseIds;
  }

  async getPendingCourseIdsByStudentId(studentId) {
    const student = await prisma.student.findUnique({
      where: { studentId },
      include: {
        semesterEnrollment: {
          include: {
            classes: true,
          },
        },
      },
    });
  
    if (!student) return [];
  
    const studentClasses = student.semesterEnrollment.flatMap(enrollment =>
      enrollment.classes
        .map(cls => cls.classId)
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
    const courseIds = pendingClasses.map(cls => cls.courseId);
  
    return studentClasses;
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
      where: { studentId: id }, include: {classes : true, student: true},
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
      include: { teachingClasses: true, gradedClasses: true },
    });
  }

  async getInstructorById(id) {
    return await prisma.instructor.findUnique({
      where: {
        instructorId: id,
        include: { teachingClasses: true, gradedClasses: true },
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
    return await prisma.class.findMany();
  }

  async getClassById(id) {
    return await prisma.class.findUnique({ where: { classId: id }, include: {schedule: true, instructors: true} });
  }

  async createClass(data) {
    return await prisma.class.create({ data });
  }

  async updateClass(id, data) {
    return await prisma.class.update({ where: { classId: id }, data });
  }

  async deleteClass(id) {
    return await prisma.class.delete({ where: { classId: id } });
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

  async updateClassEnrollment(id, data) {
    return await prisma.classEnrollment.update({
      where: { id: Number(id) },
      data,
    });
  }

  async deleteClassEnrollment(id) {
    return await prisma.classEnrollment.delete({ where: { id: Number(id) } });
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

  async getCourseIdsByMajor(majorId) {
    const results = await prisma.courseMajorOfferings.findMany({
      where: { majorId },
      select: {
        courseId: true
      }
    })
    return results.map(r => r.courseId);
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
}

export default new UniTrackRepo();
