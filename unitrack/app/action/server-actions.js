'use server'

import unitrackRepo from "@/repos/unitrack-repo"

// ---------------------- STUDENT ----------------------
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
  
  // ---------------------- COURSE ----------------------
  export async function getAllCoursesAction() {
    return await unitrackRepo.getAllCourses();
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
  
  // ---------------------- COMPLETED COURSE ----------------------
  export async function getAllCompletedCoursesAction() {
    return await unitrackRepo.getAllCompletedCourses();
  }
  
  export async function getCompletedCourseByIdAction(id) {
    return await unitrackRepo.getCompletedCourseById(id);
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
  
  // ---------------------- SEMESTER ENROLLMENT ----------------------
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
  
  // ---------------------- INSTRUCTOR ----------------------
  export async function getAllInstructorsAction() {
    return await unitrackRepo.getAllInstructors();
  }
  
  export async function getInstructorByIdAction(id) {
    return await unitrackRepo.getInstructorById(id);
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
  
  // ---------------------- MAJOR ----------------------
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
  
  // ---------------------- CLASS ----------------------
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
  
  // ---------------------- CLASS ENROLLMENT ----------------------
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
  
  // ---------------------- EXPERTISE ----------------------
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
  
  // ---------------------- SCHEDULE ----------------------
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