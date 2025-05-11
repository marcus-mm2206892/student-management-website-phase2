-- CreateTable
CREATE TABLE "Admin" (
    "adminId" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    CONSTRAINT "Admin_email_fkey" FOREIGN KEY ("email") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "themePreference" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Student" (
    "studentId" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "majorId" TEXT NOT NULL,
    CONSTRAINT "Student_email_fkey" FOREIGN KEY ("email") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Student_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major" ("majorId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CompletedCourse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "courseId" TEXT NOT NULL,
    "letterGrade" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    CONSTRAINT "CompletedCourse_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("studentId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CompletedCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("courseId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SemesterEnrollment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "semester" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    CONSTRAINT "SemesterEnrollment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("studentId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Major" (
    "majorId" TEXT NOT NULL PRIMARY KEY,
    "majorName" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "department" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Instructor" (
    "instructorId" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    CONSTRAINT "Instructor_email_fkey" FOREIGN KEY ("email") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Expertise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "expertise" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,
    CONSTRAINT "Expertise_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor" ("instructorId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ClassEnrollment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "classId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "gradeStatus" TEXT NOT NULL,
    "letterGrade" TEXT NOT NULL,
    "semesterEnrollmentId" INTEGER NOT NULL,
    CONSTRAINT "ClassEnrollment_semesterEnrollmentId_fkey" FOREIGN KEY ("semesterEnrollmentId") REFERENCES "SemesterEnrollment" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Class" (
    "classId" TEXT NOT NULL PRIMARY KEY,
    "courseId" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "instructionalMethod" TEXT NOT NULL,
    "campus" TEXT NOT NULL,
    "enrollmentActual" INTEGER NOT NULL,
    "enrollmentMaximum" INTEGER NOT NULL,
    "classStatus" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    CONSTRAINT "Class_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("courseId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "scheduleType" TEXT NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    CONSTRAINT "Schedule_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("classId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Course" (
    "courseId" TEXT NOT NULL PRIMARY KEY,
    "courseName" TEXT NOT NULL,
    "creditHours" INTEGER NOT NULL,
    "subject" TEXT NOT NULL,
    "courseNumber" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "courseImage" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CourseCurrentClasses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "courseId" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    CONSTRAINT "CourseCurrentClasses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("courseId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CourseCurrentClasses_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("classId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CourseMajorOfferings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "courseId" TEXT NOT NULL,
    "majorId" TEXT NOT NULL,
    CONSTRAINT "CourseMajorOfferings_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("courseId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CourseMajorOfferings_majorId_fkey" FOREIGN KEY ("majorId") REFERENCES "Major" ("majorId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Prerequisite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prerequisiteId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "minGrade" TEXT NOT NULL,
    CONSTRAINT "Prerequisite_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("courseId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TeachingClasses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "classId" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,
    CONSTRAINT "TeachingClasses_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("classId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TeachingClasses_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor" ("instructorId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GradedClasses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "classId" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,
    CONSTRAINT "GradedClasses_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("classId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GradedClasses_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor" ("instructorId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Subjects" (
    "subject" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TeachingClasses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_TeachingClasses_A_fkey" FOREIGN KEY ("A") REFERENCES "Class" ("classId") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TeachingClasses_B_fkey" FOREIGN KEY ("B") REFERENCES "Instructor" ("instructorId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_GradedClasses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_GradedClasses_A_fkey" FOREIGN KEY ("A") REFERENCES "Class" ("classId") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_GradedClasses_B_fkey" FOREIGN KEY ("B") REFERENCES "Instructor" ("instructorId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CourseToMajor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CourseToMajor_A_fkey" FOREIGN KEY ("A") REFERENCES "Course" ("courseId") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CourseToMajor_B_fkey" FOREIGN KEY ("B") REFERENCES "Major" ("majorId") ON DELETE CASCADE ON UPDATE CASCADE
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
CREATE UNIQUE INDEX "_TeachingClasses_AB_unique" ON "_TeachingClasses"("A", "B");

-- CreateIndex
CREATE INDEX "_TeachingClasses_B_index" ON "_TeachingClasses"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GradedClasses_AB_unique" ON "_GradedClasses"("A", "B");

-- CreateIndex
CREATE INDEX "_GradedClasses_B_index" ON "_GradedClasses"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToMajor_AB_unique" ON "_CourseToMajor"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToMajor_B_index" ON "_CourseToMajor"("B");
