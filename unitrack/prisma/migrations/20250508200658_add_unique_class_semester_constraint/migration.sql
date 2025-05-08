-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ClassEnrollment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "classId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "gradeStatus" TEXT NOT NULL,
    "letterGrade" TEXT NOT NULL,
    "semesterEnrollmentId" INTEGER NOT NULL,
    CONSTRAINT "ClassEnrollment_semesterEnrollmentId_fkey" FOREIGN KEY ("semesterEnrollmentId") REFERENCES "SemesterEnrollment" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ClassEnrollment" ("classId", "courseId", "gradeStatus", "id", "letterGrade", "semesterEnrollmentId") SELECT "classId", "courseId", "gradeStatus", "id", "letterGrade", "semesterEnrollmentId" FROM "ClassEnrollment";
DROP TABLE "ClassEnrollment";
ALTER TABLE "new_ClassEnrollment" RENAME TO "ClassEnrollment";
CREATE UNIQUE INDEX "ClassEnrollment_classId_semesterEnrollmentId_key" ON "ClassEnrollment"("classId", "semesterEnrollmentId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
