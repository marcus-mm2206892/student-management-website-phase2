// npm i fs-extra
import fs from 'fs-extra'
import path from 'path'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const adminPath = path.join(process.cwd(), 'app/assets/data/admins.json');
const classEnrollmentsPath = path.join(process.cwd(), 'app/assets/data/class_enrollments.json');
const classesPath = path.join(process.cwd(), 'app/assets/data/classes.json');
const completedCoursesPath = path.join(process.cwd(), 'app/assets/data/completed_courses.json');
const courseCurrentClassesPath = path.join(process.cwd(), 'app/assets/data/course_current_classes.json');
const courseMajorOfferingsPath = path.join(process.cwd(), 'app/assets/data/course_major_offerings.json');
const coursesPath = path.join(process.cwd(), 'app/assets/data/courses.json');
const gradedClassesPath = path.join(process.cwd(), 'app/assets/data/graded_classes.json');
const instructorClassesPath = path.join(process.cwd(), 'app/assets/data/instructor_classes.json');
const instructorExpertisePath = path.join(process.cwd(), 'app/assets/data/instructor_expertise.json');
const instructorsPath = path.join(process.cwd(), 'app/assets/data/instructors.json');
const majorRequiredCoursesPath = path.join(process.cwd(), 'app/assets/data/major_required_courses.json');
const majorsPath = path.join(process.cwd(), 'app/assets/data/majors.json');
const prerequisitesPath = path.join(process.cwd(), 'app/assets/data/prerequisites.json');
const schedulesPath = path.join(process.cwd(), 'app/assets/data/schedules.json');
const semesterEnrollmentsPath = path.join(process.cwd(), 'app/assets/data/semester_enrollments.json');
const studentsPath = path.join(process.cwd(), 'app/assets/data/students.json');
const subjectsPath = path.join(process.cwd(), 'app/assets/data/subjects.json');
const teachingClassesPath = path.join(process.cwd(), 'app/assets/data/teaching_classes.json');
const usersPath = path.join(process.cwd(), 'app/assets/data/users.json');



async function seed() {
    console.log('Seeding Started...')
    // Read from json
    // Create records for the table using prisma
}

try {
    await seed();
    console.log('Seeding finished')
} catch (e) {
    console.log("Seeding Failed");
    process.exit(1)
    
} finally {
    await prisma.$disconnect();
}

