-- CreateTable
CREATE TABLE "GradedClasses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "classId" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,
    CONSTRAINT "GradedClasses_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("classId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GradedClasses_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor" ("instructorId") ON DELETE RESTRICT ON UPDATE CASCADE
);
