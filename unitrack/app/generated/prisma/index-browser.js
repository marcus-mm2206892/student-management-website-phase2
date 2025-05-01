
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  password: 'password',
  role: 'role',
  themePreference: 'themePreference',
  userType: 'userType',
  gender: 'gender'
};

exports.Prisma.StudentScalarFieldEnum = {
  studentId: 'studentId',
  email: 'email',
  college: 'college',
  department: 'department',
  majorIdField: 'majorIdField'
};

exports.Prisma.InstructorScalarFieldEnum = {
  instructorId: 'instructorId',
  email: 'email',
  college: 'college',
  department: 'department',
  expertise: 'expertise'
};

exports.Prisma.AdminScalarFieldEnum = {
  adminId: 'adminId',
  email: 'email'
};

exports.Prisma.MajorScalarFieldEnum = {
  majorId: 'majorId',
  majorName: 'majorName',
  college: 'college',
  department: 'department'
};

exports.Prisma.CompletedCourseScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  letterGrade: 'letterGrade',
  studentId: 'studentId'
};

exports.Prisma.SemesterEnrollmentScalarFieldEnum = {
  id: 'id',
  semester: 'semester',
  studentId: 'studentId'
};

exports.Prisma.ClassEnrollmentScalarFieldEnum = {
  id: 'id',
  classId: 'classId',
  courseId: 'courseId',
  gradeStatus: 'gradeStatus',
  letterGrade: 'letterGrade',
  semesterEnrollmentId: 'semesterEnrollmentId'
};

exports.Prisma.ClassScalarFieldEnum = {
  classId: 'classId',
  courseId: 'courseId',
  semester: 'semester',
  instructionalMethod: 'instructionalMethod',
  campus: 'campus',
  enrollmentActual: 'enrollmentActual',
  enrollmentMaximum: 'enrollmentMaximum',
  classStatus: 'classStatus'
};

exports.Prisma.ScheduleScalarFieldEnum = {
  scheduleType: 'scheduleType',
  startTime: 'startTime',
  endTime: 'endTime',
  classId: 'classId'
};

exports.Prisma.CourseScalarFieldEnum = {
  courseId: 'courseId',
  courseName: 'courseName',
  creditHours: 'creditHours',
  subject: 'subject',
  courseNumber: 'courseNumber',
  description: 'description',
  courseImage: 'courseImage'
};

exports.Prisma.PrerequisiteScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  minGrade: 'minGrade'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ThemePreference = exports.$Enums.ThemePreference = {
  system: 'system',
  dark: 'dark',
  light: 'light'
};

exports.Prisma.ModelName = {
  User: 'User',
  Student: 'Student',
  Instructor: 'Instructor',
  Admin: 'Admin',
  Major: 'Major',
  CompletedCourse: 'CompletedCourse',
  SemesterEnrollment: 'SemesterEnrollment',
  ClassEnrollment: 'ClassEnrollment',
  Class: 'Class',
  Schedule: 'Schedule',
  Course: 'Course',
  Prerequisite: 'Prerequisite'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
