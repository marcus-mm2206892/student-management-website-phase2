-- CreateEnum
CREATE TYPE "ThemePreference" AS ENUM ('system', 'dark', 'light');

-- CreateTable
CREATE TABLE "Admin" (
    "adminId" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("adminId")
);

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "themePreference" "ThemePreference" NOT NULL,
    "profileImage" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Student" (
    "studentId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "majorId" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("studentId")
);

-- CreateTable
CREATE TABLE "CompletedCourse" (
    "id" SERIAL NOT NULL,
    "courseId" TEXT NOT NULL,
    "letterGrade" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "CompletedCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SemesterEnrollment" (
    "id" SERIAL NOT NULL,
    "semester" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "SemesterEnrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Major" (
    "majorId" TEXT NOT NULL,
    "majorName" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "department" TEXT NOT NULL,

    CONSTRAINT "Major_pkey" PRIMARY KEY ("majorId")
);

-- CreateTable
CREATE TABLE "Instructor" (
    "instructorId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "department" TEXT NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("instructorId")
);

-- CreateTable
CREATE TABLE "Expertise" (
    "id" SERIAL NOT NULL,
    "expertise" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,

    CONSTRAINT "Expertise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassEnrollment" (
    "id" SERIAL NOT NULL,
    "classId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "gradeStatus" TEXT NOT NULL,
    "letterGrade" TEXT NOT NULL,
    "semesterEnrollmentId" INTEGER NOT NULL,

    CONSTRAINT "ClassEnrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "classId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "instructionalMethod" TEXT NOT NULL,
    "campus" TEXT NOT NULL,
    "enrollmentActual" INTEGER NOT NULL,
    "enrollmentMaximum" INTEGER NOT NULL,
    "classStatus" TEXT NOT NULL,
    "section" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("classId")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "scheduleType" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "classId" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "courseId" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "creditHours" INTEGER NOT NULL,
    "subject" TEXT NOT NULL,
    "courseNumber" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "courseImage" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("courseId")
);

-- CreateTable
CREATE TABLE "CourseCurrentClasses" (
    "id" SERIAL NOT NULL,
    "courseId" TEXT NOT NULL,
    "classId" TEXT NOT NULL,

    CONSTRAINT "CourseCurrentClasses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseMajorOfferings" (
    "id" SERIAL NOT NULL,
    "courseId" TEXT NOT NULL,
    "majorId" TEXT NOT NULL,

    CONSTRAINT "CourseMajorOfferings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prerequisite" (
    "id" SERIAL NOT NULL,
    "prerequisiteId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "minGrade" TEXT NOT NULL,

    CONSTRAINT "Prerequisite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeachingClasses" (
    "id" SERIAL NOT NULL,
    "classId" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,

    CONSTRAINT "TeachingClasses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GradedClasses" (
    "id" SERIAL NOT NULL,
    "classId" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,

    CONSTRAINT "GradedClasses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subjects" (
    "subject" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Subjects_pkey" PRIMARY KEY ("subject")
);

-- CreateTable
CREATE TABLE "_TeachingClasses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_TeachingClasses_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_GradedClasses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_GradedClasses_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CourseToMajor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CourseToMajor_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_email_key" ON "Instructor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ClassEnrollment_classId_semesterEnrollmentId_key" ON "ClassEnrollment"("classId", "semesterEnrollmentId");

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_classId_key" ON "Schedule"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "Subjects_code_key" ON "Subjects"("code");

-- CreateIndex
CREATE INDEX "_TeachingClasses_B_index" ON "_TeachingClasses"("B");

-- CreateIndex
CREATE INDEX "_GradedClasses_B_index" ON "_GradedClasses"("B");

-- CreateIndex
CREATE INDEX "_CourseToMajor_B_index" ON "_CourseToMajor"("B");

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major"("majorId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedCourse" ADD CONSTRAINT "CompletedCourse_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedCourse" ADD CONSTRAINT "CompletedCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("courseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SemesterEnrollment" ADD CONSTRAINT "SemesterEnrollment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instructor" ADD CONSTRAINT "Instructor_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expertise" ADD CONSTRAINT "Expertise_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("instructorId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassEnrollment" ADD CONSTRAINT "ClassEnrollment_semesterEnrollmentId_fkey" FOREIGN KEY ("semesterEnrollmentId") REFERENCES "SemesterEnrollment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("courseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("classId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseCurrentClasses" ADD CONSTRAINT "CourseCurrentClasses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("courseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseCurrentClasses" ADD CONSTRAINT "CourseCurrentClasses_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("classId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseMajorOfferings" ADD CONSTRAINT "CourseMajorOfferings_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("courseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseMajorOfferings" ADD CONSTRAINT "CourseMajorOfferings_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major"("majorId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prerequisite" ADD CONSTRAINT "Prerequisite_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("courseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeachingClasses" ADD CONSTRAINT "TeachingClasses_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("classId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeachingClasses" ADD CONSTRAINT "TeachingClasses_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("instructorId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradedClasses" ADD CONSTRAINT "GradedClasses_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("classId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradedClasses" ADD CONSTRAINT "GradedClasses_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("instructorId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeachingClasses" ADD CONSTRAINT "_TeachingClasses_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("classId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeachingClasses" ADD CONSTRAINT "_TeachingClasses_B_fkey" FOREIGN KEY ("B") REFERENCES "Instructor"("instructorId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GradedClasses" ADD CONSTRAINT "_GradedClasses_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("classId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GradedClasses" ADD CONSTRAINT "_GradedClasses_B_fkey" FOREIGN KEY ("B") REFERENCES "Instructor"("instructorId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToMajor" ADD CONSTRAINT "_CourseToMajor_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("courseId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToMajor" ADD CONSTRAINT "_CourseToMajor_B_fkey" FOREIGN KEY ("B") REFERENCES "Major"("majorId") ON DELETE CASCADE ON UPDATE CASCADE;
