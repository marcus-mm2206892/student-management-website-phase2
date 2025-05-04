import fs from 'fs-extra';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const dataPaths = {
    users: 'users.json',
    admins: 'admins.json',
    majors: 'majors.json',
    instructors: 'instructors.json',
    instructorsExpertise: 'instructor_expertise.json',
    courses: 'courses.json',
    prerequisites: 'prerequisites.json',
    classes: 'classes.json',
    schedules: 'schedules.json',
    courseMajorOfferings: 'course_major_offerings.json',
    courseCurrentClasses: 'course_current_classes.json',
    students: 'students.json',
    completedCourses: 'completed_courses.json',
    semesterEnrollments: 'semester_enrollments.json',
    classEnrollments: 'class_enrollments.json',
    courseMajorOfferings: 'course_major_offerings.json',
    courseCurrentClasses: 'course_current_classes.json',
};

const dataDir = path.join(process.cwd(), 'app/assets/data');

const loadData = async (filename) => fs.readJSON(path.join(dataDir, filename));

async function seed() {
    console.log('Seeding Started...');

    // Order matters due to relations
    const users = await loadData(dataPaths.users);
    const admins = await loadData(dataPaths.admins);
    const majors = await loadData(dataPaths.majors);
    const instructors = await loadData(dataPaths.instructors);
    const instructorExpertise = await loadData(dataPaths.instructorsExpertise);
    const courses = await loadData(dataPaths.courses);
    const prerequisites = await loadData(dataPaths.prerequisites);
    const classes = await loadData(dataPaths.classes);
    const schedules = await loadData(dataPaths.schedules);
    const students = await loadData(dataPaths.students);
    const completedCourses = await loadData(dataPaths.completedCourses);
    const semesterEnrollments = await loadData(dataPaths.semesterEnrollments);
    const classEnrollments = await loadData(dataPaths.classEnrollments);
    const courseMajorOfferings = await loadData(dataPaths.courseMajorOfferings);
    const courseCurrentClasses = await loadData(dataPaths.courseCurrentClasses);

    console.log(users[0]); // or cleanedUsers[0]

    await prisma.user.createMany({ data: users });
    await prisma.admin.createMany({ data: admins });
    await prisma.major.createMany({ data: majors });
    await prisma.instructor.createMany({ data: instructors });

    for (const exp of instructorExpertise) {
    await prisma.expertise.create({ data: exp });
    }

    await prisma.course.createMany({ data: courses });

    for (const pre of prerequisites) {
    await prisma.prerequisite.create({ data: pre });
    }

    await prisma.class.createMany({ data: classes });

    for (const sched of schedules) {
    await prisma.schedule.create({ data: sched });
    }

    await prisma.student.createMany({ data: students });

    for (const cc of completedCourses) {
    await prisma.completedCourse.create({ data: cc });
    }

    for (const se of semesterEnrollments) {
    await prisma.semesterEnrollment.create({ data: se });
    }

    for (const ce of classEnrollments) {
    await prisma.classEnrollment.create({ data: ce });
    }

    for (const cmo of courseMajorOfferings) {
    await prisma.courseMajorOffering.create({ data: cmo });
    }
      
    for (const ccc of courseCurrentClasses) {
    await prisma.courseCurrentClass.create({ data: ccc });
    }

    console.log('Seeding completed successfully.');
}

try {
    await seed();
} catch (e) {
    console.error("Seeding Failed:", e);
    process.exit(1);
} finally {
    await prisma.$disconnect();
}
