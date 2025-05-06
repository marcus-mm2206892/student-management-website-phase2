import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UniTrackRepo {

  // ---------------------- STUDENT ----------------------
  async getAllStudents() {
    return await prisma.student.findMany();
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

  // ---------------------- COURSE ----------------------
  async getAllCourses() {
    return await prisma.course.findMany();
  }

  async getCourseById(id) {
    return await prisma.course.findUnique({ where: { courseId: id } });
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

  // ---------------------- COMPLETED COURSE ----------------------
  async getAllCompletedCourses() {
    return await prisma.completedCourse.findMany();
  }

  async getCompletedCourseById(id) {
    return await prisma.completedCourse.findUnique({ where: { id: Number(id) } });
  }

  async createCompletedCourse(data) {
    return await prisma.completedCourse.create({ data });
  }

  async updateCompletedCourse(id, data) {
    return await prisma.completedCourse.update({ where: { id: Number(id) }, data });
  }

  async deleteCompletedCourse(id) {
    return await prisma.completedCourse.delete({ where: { id: Number(id) } });
  }

  // ---------------------- SEMESTER ENROLLMENT ----------------------
  async getAllSemesterEnrollments() {
    return await prisma.semesterEnrollment.findMany();
  }

  async getSemesterEnrollmentById(id) {
    return await prisma.semesterEnrollment.findUnique({ where: { id: Number(id) } });
  }

  async createSemesterEnrollment(data) {
    return await prisma.semesterEnrollment.create({ data });
  }

  async updateSemesterEnrollment(id, data) {
    return await prisma.semesterEnrollment.update({ where: { id: Number(id) }, data });
  }

  async deleteSemesterEnrollment(id) {
    return await prisma.semesterEnrollment.delete({ where: { id: Number(id) } });
  }

  // ---------------------- INSTRUCTOR ----------------------
  async getAllInstructors() {
    return await prisma.instructor.findMany();
  }

  async getInstructorById(id) {
    return await prisma.instructor.findUnique({ where: { instructorId: id } });
  }

  async createInstructor(data) {
    return await prisma.instructor.create({ data });
  }

  async updateInstructor(id, data) {
    return await prisma.instructor.update({ where: { instructorId: id }, data });
  }

  async deleteInstructor(id) {
    return await prisma.instructor.delete({ where: { instructorId: id } });
  }

  // ---------------------- MAJOR ----------------------
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

  // ---------------------- CLASS ----------------------
  async getAllClasses() {
    return await prisma.class.findMany();
  }

  async getClassById(id) {
    return await prisma.class.findUnique({ where: { classId: id } });
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

  // ---------------------- CLASS ENROLLMENT ----------------------
  async getAllClassEnrollments() {
    return await prisma.classEnrollment.findMany();
  }

  async getClassEnrollmentById(id) {
    return await prisma.classEnrollment.findUnique({ where: { id: Number(id) } });
  }

  async createClassEnrollment(data) {
    return await prisma.classEnrollment.create({ data });
  }

  async updateClassEnrollment(id, data) {
    return await prisma.classEnrollment.update({ where: { id: Number(id) }, data });
  }

  async deleteClassEnrollment(id) {
    return await prisma.classEnrollment.delete({ where: { id: Number(id) } });
  }

  // ---------------------- EXPERTISE ----------------------
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

  // ---------------------- SCHEDULE ----------------------
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
}

export default new UniTrackRepo();
