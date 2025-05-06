"use server";

import unitrackRepo from "@/repos/unitrack-repo";

// Student
export async function getAllStudentsAction() {
  return await unitrackRepo.getAllStudents();
}

export async function getStudentByIdAction(id) {
  return await unitrackRepo.getStudentById(id);
}

export async function createStudentAction(data) {
  return await unitrackRepo.createStudent(data);
}

export async function updateStudentAction(id, data) {
  return await unitrackRepo.updateStudent(id, data);
}

export async function deleteStudentAction(id) {
  return await unitrackRepo.deleteStudent(id);
}

// Course
export async function getAllCoursesAction() {
  return await unitrackRepo.getAllCourses();
}

export async function getCourseWithPrerequisitesAction(id) {
  return await unitrackRepo.getCourseWithPrerequisites(id);
}

export async function getCourseByIdAction(id) {
  return await unitrackRepo.getCourseById(id);
}

export async function createCourseAction(data) {
  return await unitrackRepo.createCourse(data);
}

export async function updateCourseAction(id, data) {
  return await unitrackRepo.updateCourse(id, data);
}

export async function deleteCourseAction(id) {
  return await unitrackRepo.deleteCourse(id);
}

export async function getCoursesAction() {
  return await unitrackRepo.getCourses();
}

// Completed Course
export async function getAllCompletedCoursesAction() {
  return await unitrackRepo.getAllCompletedCourses();
}

export async function getCompletedCourseByIdAction(id) {
  return await unitrackRepo.getCompletedCourseById(id);
}

export async function getCompletedCoursesByStudentEmailAction(email) {
  return await unitrackRepo.getCompletedCoursesByStudentEmail(email);
}

export async function createCompletedCourseAction(data) {
  return await unitrackRepo.createCompletedCourse(data);
}

export async function updateCompletedCourseAction(id, data) {
  return await unitrackRepo.updateCompletedCourse(id, data);
}

export async function deleteCompletedCourseAction(id) {
  return await unitrackRepo.deleteCompletedCourse(id);
}

// Semester Enrollment
export async function getAllSemesterEnrollmentsAction() {
  return await unitrackRepo.getAllSemesterEnrollments();
}

export async function getSemesterEnrollmentByIdAction(id) {
  return await unitrackRepo.getSemesterEnrollmentById(id);
}

export async function createSemesterEnrollmentAction(data) {
  return await unitrackRepo.createSemesterEnrollment(data);
}

export async function updateSemesterEnrollmentAction(id, data) {
  return await unitrackRepo.updateSemesterEnrollment(id, data);
}

export async function deleteSemesterEnrollmentAction(id) {
  return await unitrackRepo.deleteSemesterEnrollment(id);
}

// Instructor
export async function getAllInstructorsAction() {
  return await unitrackRepo.getAllInstructors();
}

export async function getInstructorByIdAction(id) {
  return await unitrackRepo.getInstructorById(id);
}

export async function getInstructorByEmailAction(email) {
  return await unitrackRepo.getInstructorByEmail(email);
}

export async function createInstructorAction(data) {
  return await unitrackRepo.createInstructor(data);
}

export async function updateInstructorAction(id, data) {
  return await unitrackRepo.updateInstructor(id, data);
}

export async function deleteInstructorAction(id) {
  return await unitrackRepo.deleteInstructor(id);
}

// Major
export async function getAllMajorsAction() {
  return await unitrackRepo.getAllMajors();
}

export async function getMajorByIdAction(id) {
  return await unitrackRepo.getMajorById(id);
}

export async function createMajorAction(data) {
  return await unitrackRepo.createMajor(data);
}

export async function updateMajorAction(id, data) {
  return await unitrackRepo.updateMajor(id, data);
}

export async function deleteMajorAction(id) {
  return await unitrackRepo.deleteMajor(id);
}

// Class
export async function getAllClassesAction() {
  return await unitrackRepo.getAllClasses();
}

export async function getClassByIdAction(id) {
  return await unitrackRepo.getClassById(id);
}

export async function createClassAction(data) {
  return await unitrackRepo.createClass(data);
}

export async function updateClassAction(id, data) {
  return await unitrackRepo.updateClass(id, data);
}

export async function deleteClassAction(id) {
  return await unitrackRepo.deleteClass(id);
}

// Class Enrollment
export async function getAllClassEnrollmentsAction() {
  return await unitrackRepo.getAllClassEnrollments();
}

export async function getClassEnrollmentByIdAction(id) {
  return await unitrackRepo.getClassEnrollmentById(id);
}

export async function createClassEnrollmentAction(data) {
  return await unitrackRepo.createClassEnrollment(data);
}

export async function updateClassEnrollmentAction(id, data) {
  return await unitrackRepo.updateClassEnrollment(id, data);
}

export async function deleteClassEnrollmentAction(id) {
  return await unitrackRepo.deleteClassEnrollment(id);
}

// Expertise
export async function getAllExpertiseAction() {
  return await unitrackRepo.getAllExpertise();
}

export async function getExpertiseByIdAction(id) {
  return await unitrackRepo.getExpertiseById(id);
}

export async function createExpertiseAction(data) {
  return await unitrackRepo.createExpertise(data);
}

export async function updateExpertiseAction(id, data) {
  return await unitrackRepo.updateExpertise(id, data);
}

export async function deleteExpertiseAction(id) {
  return await unitrackRepo.deleteExpertise(id);
}

// Schedule
export async function getAllSchedulesAction() {
  return await unitrackRepo.getAllSchedules();
}

export async function getScheduleByIdAction(id) {
  return await unitrackRepo.getScheduleById(id);
}

export async function createScheduleAction(data) {
  return await unitrackRepo.createSchedule(data);
}

export async function updateScheduleAction(id, data) {
  return await unitrackRepo.updateSchedule(id, data);
}

export async function deleteScheduleAction(id) {
  return await unitrackRepo.deleteSchedule(id);
}

// Admin
export async function getAllAdminsAction() {
  return await unitrackRepo.getAllAdmins();
}

export async function getAdminByIdAction(adminId) {
  return await unitrackRepo.getAdminById(adminId);
}

export async function createAdminAction(data) {
  return await unitrackRepo.createAdmin(data);
}

export async function updateAdminAction(adminId, data) {
  return await unitrackRepo.updateAdmin(adminId, data);
}

export async function deleteAdminAction(adminId) {
  return await unitrackRepo.deleteAdmin(adminId);
}

// User
export async function getAllUsersAction() {
  return await unitrackRepo.getAllUsers();
}

export async function getUserByEmailAction(email) {
  return await unitrackRepo.getUserById(email);
}

export async function createUserAction(data) {
  return await unitrackRepo.createUser(data);
}

export async function updateUserAction(email, data) {
  return await unitrackRepo.updateUser(email, data);
}

export async function deleteUserAction(email) {
  return await unitrackRepo.deleteUser(email);
}

// CourseCurrentClasses
export async function getAllCourseCurrentClassesAction() {
  return await unitrackRepo.getAllCourseCurrentClasses();
}

export async function getCourseCurrentClassByIdAction(id) {
  return await unitrackRepo.getCourseCurrentClassById(id);
}

export async function createCourseCurrentClassAction(data) {
  return await unitrackRepo.createCourseCurrentClass(data);
}

export async function updateCourseCurrentClassAction(id, data) {
  return await unitrackRepo.updateCourseCurrentClass(id, data);
}

export async function deleteCourseCurrentClassAction(id) {
  return await unitrackRepo.deleteCourseCurrentClass(id);
}

// CourseMajorOfferings
export async function getAllCourseMajorOfferingsAction() {
  return await unitrackRepo.getAllCourseMajorOfferings();
}

export async function getCourseMajorOfferingByIdAction(id) {
  return await unitrackRepo.getCourseMajorOfferingById(id);
}

export async function createCourseMajorOfferingAction(data) {
  return await unitrackRepo.createCourseMajorOffering(data);
}

export async function updateCourseMajorOfferingAction(id, data) {
  return await unitrackRepo.updateCourseMajorOffering(id, data);
}

export async function deleteCourseMajorOfferingAction(id) {
  return await unitrackRepo.deleteCourseMajorOffering(id);
}

// Prerequisite
export async function getAllPrerequisitesAction() {
  return await unitrackRepo.getAllPrerequisites();
}

export async function getPrerequisiteByIdAction(id) {
  return await unitrackRepo.getPrerequisiteById(id);
}

export async function createPrerequisiteAction(data) {
  return await unitrackRepo.createPrerequisite(data);
}

export async function updatePrerequisiteAction(id, data) {
  return await unitrackRepo.updatePrerequisite(id, data);
}

export async function deletePrerequisiteAction(id) {
  return await unitrackRepo.deletePrerequisite(id);
}
