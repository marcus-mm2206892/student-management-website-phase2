"use server";

import unitrackRepo from "@/repos/unitrack-repo";
import statisticsRepo from "@/repos/statistics-repo";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

// Student
export async function getAllStudentsAction() {
  return await unitrackRepo.getAllStudents();
}

export async function getStudentByIdAction(id) {
  return await unitrackRepo.getStudentById(id);
}

export async function getStudentByEmailAction(email) {
  return await unitrackRepo.getStudentByEmail(email);
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

export async function getCourseIdsAction() {
  return await unitrackRepo.getCourseIds();
}


export async function getRecommendedCoursesAction(email) {
  const student = await unitrackRepo.getStudentByEmail(email);
  if (!student) return [];

  return await unitrackRepo.getRecommendedCourses(
    student.studentId,
    student.majorId
  );
}

export async function getSupplementaryCoursesAction(email) {
  const student = await unitrackRepo.getStudentByEmail(email);
  if (!student) return [];

  return await unitrackRepo.getSupplementaryCourses(student.studentId);
}

export async function getElectiveCoursesAction(email) {
  const student = await unitrackRepo.getStudentByEmail(email);
  if (!student) return [];

  return await unitrackRepo.getElectiveCourses(student.studentId);
}

export async function getCourseWithPrerequisitesAction(id) {
  return await unitrackRepo.getCourseWithPrerequisites(id);
}

export async function getCourseByIdAction(id) {
  return await unitrackRepo.getCourseById(id);
}

export async function getCurrentCoursesByStudentEmailAction(email) {
  return await unitrackRepo.getCurrentCoursesByStudentEmail(email);
}

export async function getPendingCourseIdsByStudentEmailAction(studentId) {
  return await unitrackRepo.getPendingCourseIdsByStudentEmail(studentId);
}

export async function createCourseAction(data) {
  return await unitrackRepo.createCourse(data);
}

export async function checkCourseIdAction(courseId) {
  return await unitrackRepo.checkCourseId(courseId);
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
  return await unitrackRepo.getSemesterEnrollmentByStudentId(id);
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

export async function updateInstructorTeachingClassesAction(
  instructorId,
  data
) {
  return await unitrackRepo.updateInstructorTeachingClasses(instructorId, data);
}

export async function updateInstructorGradedClassesAction(instructorId, data) {
  return await unitrackRepo.updateInstructorGradedClasses(instructorId, data);
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

export async function getRegisteredClassRecordsByStudentEmail(email) {
  return await unitrackRepo.getRegisteredClassRecordsByStudentEmail(email);
}

export async function getAllAvailableClasses() {
  return await unitrackRepo.getAllAvailableClasses();
}

export async function getClassIdsByCourseAction(courseId) {
  return await unitrackRepo.getClassIdsByCourse(courseId);
}

export async function getClassDetailsByIdAction(classId) {
  return await unitrackRepo.getClassDetailsById(classId);
}

export async function getApprovedClassesAction() {
  return await unitrackRepo.getApprovedClasses();
}

export async function getPendingClassesAction() {
  return await unitrackRepo.getPendingClasses();
}

export async function getRejectedClassesAction() {
  return await unitrackRepo.getRejectedClasses();
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

export async function getLatestCreatedClassAction() {
  return await unitrackRepo.getLatestCreatedClass();
}

//Pending Approval Classes

export async function getPendingApprovalClassesAction() {
  return await unitrackRepo.getPendingApprovalClasses();
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

export async function updateClassEnrollmentAction(
  classId,
  semesterEnrollmentId,
  data
) {
  return await unitrackRepo.updateClassEnrollment(
    classId,
    semesterEnrollmentId,
    data
  );
}

export async function deleteClassEnrollmentAction(
  classId,
  semesterEnrollmentId
) {
  const deleted = await unitrackRepo.deleteClassEnrollment(
    classId,
    semesterEnrollmentId
  );
  return deleted;
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

export async function getUsersByRoleAction(role) {
  return await unitrackRepo.getUsersByRole(role);
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

export async function getAllCourseIdsAction() {
  return await unitrackRepo.getAllCourseIds();
}

export async function getMajorCourseIdsByEmailAction(email) {
  return await unitrackRepo.getMajorCourseIdsByEmail(email);
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

// Teaching Class
export async function createTeachingClassesActions(data) {
  return await unitrackRepo.createTeachingClasses(data);
}

//Subjects

export async function getAllSubjectCodeAction() {
  return await unitrackRepo.getAllSubjectCode();
}

// STATISTICS

export async function getTop3MostEnrolledCoursesAction() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/statistics/top-3-enrolled`
  );
  return res.json();
}

export async function getAverageGPAByMajorAction() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/statistics/average-gpa-by-major`
  );
  return res.json();
}

export async function getTop3CoursesWithMostAsAction() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/statistics/top-3-most-As`
  );
  return res.json();
}

export async function getTop3CoursesWithMostFailsAction() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/statistics/top-3-most-fails`
  );
  return res.json();
}

export async function getSemesterCourseCountsByMajorAction() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/statistics/current-sem-offerings`
  );
  return res.json();
}

// STATISTICS
export async function getTop3InstructorsWithMostClassesAction() {
  return await statisticsRepo.getTop3InstructorsWithMostClasses();
}

export async function getTopStudentsByMajorGPAAction() {
  return await statisticsRepo.getTopStudentsByMajorGPA();
}

export async function getStudentGenderBreakdownByMajorAction() {
  return await statisticsRepo.getStudentGenderBreakdownByMajor();
}

export async function getTopSubjectsByInstructorCountAction() {
  return await statisticsRepo.getTopSubjectsByInstructorCount();
}

export async function getTop3WaitlistedClassesAction() {
  return await statisticsRepo.getTop3WaitlistedClasses();
}

export async function getTop3CoursesWithMostOpenSectionsAction() {
  return await statisticsRepo.getTop3CoursesWithMostOpenSections();
}
