
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Instructor
 * 
 */
export type Instructor = $Result.DefaultSelection<Prisma.$InstructorPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Major
 * 
 */
export type Major = $Result.DefaultSelection<Prisma.$MajorPayload>
/**
 * Model CompletedCourse
 * 
 */
export type CompletedCourse = $Result.DefaultSelection<Prisma.$CompletedCoursePayload>
/**
 * Model SemesterEnrollment
 * 
 */
export type SemesterEnrollment = $Result.DefaultSelection<Prisma.$SemesterEnrollmentPayload>
/**
 * Model ClassEnrollment
 * 
 */
export type ClassEnrollment = $Result.DefaultSelection<Prisma.$ClassEnrollmentPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Prerequisite
 * 
 */
export type Prerequisite = $Result.DefaultSelection<Prisma.$PrerequisitePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ThemePreference: {
  system: 'system',
  dark: 'dark',
  light: 'light'
};

export type ThemePreference = (typeof ThemePreference)[keyof typeof ThemePreference]

}

export type ThemePreference = $Enums.ThemePreference

export const ThemePreference: typeof $Enums.ThemePreference

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructor`: Exposes CRUD operations for the **Instructor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructors
    * const instructors = await prisma.instructor.findMany()
    * ```
    */
  get instructor(): Prisma.InstructorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.major`: Exposes CRUD operations for the **Major** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Majors
    * const majors = await prisma.major.findMany()
    * ```
    */
  get major(): Prisma.MajorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completedCourse`: Exposes CRUD operations for the **CompletedCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedCourses
    * const completedCourses = await prisma.completedCourse.findMany()
    * ```
    */
  get completedCourse(): Prisma.CompletedCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.semesterEnrollment`: Exposes CRUD operations for the **SemesterEnrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SemesterEnrollments
    * const semesterEnrollments = await prisma.semesterEnrollment.findMany()
    * ```
    */
  get semesterEnrollment(): Prisma.SemesterEnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classEnrollment`: Exposes CRUD operations for the **ClassEnrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassEnrollments
    * const classEnrollments = await prisma.classEnrollment.findMany()
    * ```
    */
  get classEnrollment(): Prisma.ClassEnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prerequisite`: Exposes CRUD operations for the **Prerequisite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prerequisites
    * const prerequisites = await prisma.prerequisite.findMany()
    * ```
    */
  get prerequisite(): Prisma.PrerequisiteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "student" | "instructor" | "admin" | "major" | "completedCourse" | "semesterEnrollment" | "classEnrollment" | "class" | "schedule" | "course" | "prerequisite"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Instructor: {
        payload: Prisma.$InstructorPayload<ExtArgs>
        fields: Prisma.InstructorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findFirst: {
            args: Prisma.InstructorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findMany: {
            args: Prisma.InstructorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          create: {
            args: Prisma.InstructorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          createMany: {
            args: Prisma.InstructorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          delete: {
            args: Prisma.InstructorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          update: {
            args: Prisma.InstructorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          deleteMany: {
            args: Prisma.InstructorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          upsert: {
            args: Prisma.InstructorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          aggregate: {
            args: Prisma.InstructorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructor>
          }
          groupBy: {
            args: Prisma.InstructorGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Major: {
        payload: Prisma.$MajorPayload<ExtArgs>
        fields: Prisma.MajorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MajorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MajorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          findFirst: {
            args: Prisma.MajorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MajorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          findMany: {
            args: Prisma.MajorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          create: {
            args: Prisma.MajorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          createMany: {
            args: Prisma.MajorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MajorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          delete: {
            args: Prisma.MajorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          update: {
            args: Prisma.MajorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          deleteMany: {
            args: Prisma.MajorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MajorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MajorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          upsert: {
            args: Prisma.MajorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          aggregate: {
            args: Prisma.MajorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMajor>
          }
          groupBy: {
            args: Prisma.MajorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MajorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MajorCountArgs<ExtArgs>
            result: $Utils.Optional<MajorCountAggregateOutputType> | number
          }
        }
      }
      CompletedCourse: {
        payload: Prisma.$CompletedCoursePayload<ExtArgs>
        fields: Prisma.CompletedCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          findFirst: {
            args: Prisma.CompletedCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          findMany: {
            args: Prisma.CompletedCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          create: {
            args: Prisma.CompletedCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          createMany: {
            args: Prisma.CompletedCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletedCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          delete: {
            args: Prisma.CompletedCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          update: {
            args: Prisma.CompletedCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          deleteMany: {
            args: Prisma.CompletedCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompletedCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          upsert: {
            args: Prisma.CompletedCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          aggregate: {
            args: Prisma.CompletedCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedCourse>
          }
          groupBy: {
            args: Prisma.CompletedCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedCourseCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedCourseCountAggregateOutputType> | number
          }
        }
      }
      SemesterEnrollment: {
        payload: Prisma.$SemesterEnrollmentPayload<ExtArgs>
        fields: Prisma.SemesterEnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SemesterEnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterEnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SemesterEnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterEnrollmentPayload>
          }
          findFirst: {
            args: Prisma.SemesterEnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterEnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SemesterEnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterEnrollmentPayload>
          }
          findMany: {
            args: Prisma.SemesterEnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterEnrollmentPayload>[]
          }
          create: {
            args: Prisma.SemesterEnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterEnrollmentPayload>
          }
          createMany: {
            args: Prisma.SemesterEnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SemesterEnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterEnrollmentPayload>[]
          }
          delete: {
            args: Prisma.SemesterEnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterEnrollmentPayload>
          }
          update: {
            args: Prisma.SemesterEnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterEnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.SemesterEnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SemesterEnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SemesterEnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterEnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.SemesterEnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterEnrollmentPayload>
          }
          aggregate: {
            args: Prisma.SemesterEnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSemesterEnrollment>
          }
          groupBy: {
            args: Prisma.SemesterEnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SemesterEnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SemesterEnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<SemesterEnrollmentCountAggregateOutputType> | number
          }
        }
      }
      ClassEnrollment: {
        payload: Prisma.$ClassEnrollmentPayload<ExtArgs>
        fields: Prisma.ClassEnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassEnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassEnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassEnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassEnrollmentPayload>
          }
          findFirst: {
            args: Prisma.ClassEnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassEnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassEnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassEnrollmentPayload>
          }
          findMany: {
            args: Prisma.ClassEnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassEnrollmentPayload>[]
          }
          create: {
            args: Prisma.ClassEnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassEnrollmentPayload>
          }
          createMany: {
            args: Prisma.ClassEnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassEnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassEnrollmentPayload>[]
          }
          delete: {
            args: Prisma.ClassEnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassEnrollmentPayload>
          }
          update: {
            args: Prisma.ClassEnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassEnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.ClassEnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassEnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassEnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassEnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.ClassEnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassEnrollmentPayload>
          }
          aggregate: {
            args: Prisma.ClassEnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassEnrollment>
          }
          groupBy: {
            args: Prisma.ClassEnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassEnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassEnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<ClassEnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Prerequisite: {
        payload: Prisma.$PrerequisitePayload<ExtArgs>
        fields: Prisma.PrerequisiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrerequisiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrerequisiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          findFirst: {
            args: Prisma.PrerequisiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrerequisiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          findMany: {
            args: Prisma.PrerequisiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>[]
          }
          create: {
            args: Prisma.PrerequisiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          createMany: {
            args: Prisma.PrerequisiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrerequisiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>[]
          }
          delete: {
            args: Prisma.PrerequisiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          update: {
            args: Prisma.PrerequisiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          deleteMany: {
            args: Prisma.PrerequisiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrerequisiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrerequisiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>[]
          }
          upsert: {
            args: Prisma.PrerequisiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrerequisitePayload>
          }
          aggregate: {
            args: Prisma.PrerequisiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrerequisite>
          }
          groupBy: {
            args: Prisma.PrerequisiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrerequisiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrerequisiteCountArgs<ExtArgs>
            result: $Utils.Optional<PrerequisiteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    student?: StudentOmit
    instructor?: InstructorOmit
    admin?: AdminOmit
    major?: MajorOmit
    completedCourse?: CompletedCourseOmit
    semesterEnrollment?: SemesterEnrollmentOmit
    classEnrollment?: ClassEnrollmentOmit
    class?: ClassOmit
    schedule?: ScheduleOmit
    course?: CourseOmit
    prerequisite?: PrerequisiteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    completedCourses: number
    semesterEnrollment: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedCourses?: boolean | StudentCountOutputTypeCountCompletedCoursesArgs
    semesterEnrollment?: boolean | StudentCountOutputTypeCountSemesterEnrollmentArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountCompletedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedCourseWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSemesterEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SemesterEnrollmentWhereInput
  }


  /**
   * Count Type InstructorCountOutputType
   */

  export type InstructorCountOutputType = {
    teachingClasses: number
    gradedClasses: number
  }

  export type InstructorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachingClasses?: boolean | InstructorCountOutputTypeCountTeachingClassesArgs
    gradedClasses?: boolean | InstructorCountOutputTypeCountGradedClassesArgs
  }

  // Custom InputTypes
  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorCountOutputType
     */
    select?: InstructorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeCountTeachingClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeCountGradedClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Count Type MajorCountOutputType
   */

  export type MajorCountOutputType = {
    requiredCourses: number
    students: number
  }

  export type MajorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requiredCourses?: boolean | MajorCountOutputTypeCountRequiredCoursesArgs
    students?: boolean | MajorCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCountOutputType
     */
    select?: MajorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeCountRequiredCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type SemesterEnrollmentCountOutputType
   */

  export type SemesterEnrollmentCountOutputType = {
    classes: number
  }

  export type SemesterEnrollmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | SemesterEnrollmentCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * SemesterEnrollmentCountOutputType without action
   */
  export type SemesterEnrollmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterEnrollmentCountOutputType
     */
    select?: SemesterEnrollmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SemesterEnrollmentCountOutputType without action
   */
  export type SemesterEnrollmentCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassEnrollmentWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    instructors: number
    gradedByInstructors: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructors?: boolean | ClassCountOutputTypeCountInstructorsArgs
    gradedByInstructors?: boolean | ClassCountOutputTypeCountGradedByInstructorsArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountInstructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountGradedByInstructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    prerequisites: number
    majorsOffered: number
    currentClasses: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prerequisites?: boolean | CourseCountOutputTypeCountPrerequisitesArgs
    majorsOffered?: boolean | CourseCountOutputTypeCountMajorsOfferedArgs
    currentClasses?: boolean | CourseCountOutputTypeCountCurrentClassesArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountPrerequisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrerequisiteWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountMajorsOfferedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCurrentClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    email: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    role: string | null
    themePreference: $Enums.ThemePreference | null
    userType: string | null
    gender: string | null
  }

  export type UserMaxAggregateOutputType = {
    email: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    role: string | null
    themePreference: $Enums.ThemePreference | null
    userType: string | null
    gender: string | null
  }

  export type UserCountAggregateOutputType = {
    email: number
    firstName: number
    lastName: number
    password: number
    role: number
    themePreference: number
    userType: number
    gender: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    role?: true
    themePreference?: true
    userType?: true
    gender?: true
  }

  export type UserMaxAggregateInputType = {
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    role?: true
    themePreference?: true
    userType?: true
    gender?: true
  }

  export type UserCountAggregateInputType = {
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    role?: true
    themePreference?: true
    userType?: true
    gender?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    email: string
    firstName: string
    lastName: string
    password: string
    role: string
    themePreference: $Enums.ThemePreference
    userType: string
    gender: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    role?: boolean
    themePreference?: boolean
    userType?: boolean
    gender?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    role?: boolean
    themePreference?: boolean
    userType?: boolean
    gender?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    role?: boolean
    themePreference?: boolean
    userType?: boolean
    gender?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    role?: boolean
    themePreference?: boolean
    userType?: boolean
    gender?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "firstName" | "lastName" | "password" | "role" | "themePreference" | "userType" | "gender", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email: string
      firstName: string
      lastName: string
      password: string
      role: string
      themePreference: $Enums.ThemePreference
      userType: string
      gender: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const userWithEmailOnly = await prisma.user.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `email`
     * const userWithEmailOnly = await prisma.user.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `email`
     * const userWithEmailOnly = await prisma.user.updateManyAndReturn({
     *   select: { email: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly themePreference: FieldRef<"User", 'ThemePreference'>
    readonly userType: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    studentId: string | null
    email: string | null
    college: string | null
    department: string | null
    majorIdField: string | null
  }

  export type StudentMaxAggregateOutputType = {
    studentId: string | null
    email: string | null
    college: string | null
    department: string | null
    majorIdField: string | null
  }

  export type StudentCountAggregateOutputType = {
    studentId: number
    email: number
    college: number
    department: number
    majorIdField: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    studentId?: true
    email?: true
    college?: true
    department?: true
    majorIdField?: true
  }

  export type StudentMaxAggregateInputType = {
    studentId?: true
    email?: true
    college?: true
    department?: true
    majorIdField?: true
  }

  export type StudentCountAggregateInputType = {
    studentId?: true
    email?: true
    college?: true
    department?: true
    majorIdField?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    studentId: string
    email: string
    college: string
    department: string
    majorIdField: string | null
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    email?: boolean
    college?: boolean
    department?: boolean
    majorIdField?: boolean
    completedCourses?: boolean | Student$completedCoursesArgs<ExtArgs>
    semesterEnrollment?: boolean | Student$semesterEnrollmentArgs<ExtArgs>
    majorId?: boolean | Student$majorIdArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    email?: boolean
    college?: boolean
    department?: boolean
    majorIdField?: boolean
    majorId?: boolean | Student$majorIdArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    email?: boolean
    college?: boolean
    department?: boolean
    majorIdField?: boolean
    majorId?: boolean | Student$majorIdArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    studentId?: boolean
    email?: boolean
    college?: boolean
    department?: boolean
    majorIdField?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"studentId" | "email" | "college" | "department" | "majorIdField", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedCourses?: boolean | Student$completedCoursesArgs<ExtArgs>
    semesterEnrollment?: boolean | Student$semesterEnrollmentArgs<ExtArgs>
    majorId?: boolean | Student$majorIdArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    majorId?: boolean | Student$majorIdArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    majorId?: boolean | Student$majorIdArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      completedCourses: Prisma.$CompletedCoursePayload<ExtArgs>[]
      semesterEnrollment: Prisma.$SemesterEnrollmentPayload<ExtArgs>[]
      majorId: Prisma.$MajorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      studentId: string
      email: string
      college: string
      department: string
      majorIdField: string | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `studentId`
     * const studentWithStudentIdOnly = await prisma.student.findMany({ select: { studentId: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `studentId`
     * const studentWithStudentIdOnly = await prisma.student.createManyAndReturn({
     *   select: { studentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `studentId`
     * const studentWithStudentIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { studentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    completedCourses<T extends Student$completedCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Student$completedCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    semesterEnrollment<T extends Student$semesterEnrollmentArgs<ExtArgs> = {}>(args?: Subset<T, Student$semesterEnrollmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterEnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    majorId<T extends Student$majorIdArgs<ExtArgs> = {}>(args?: Subset<T, Student$majorIdArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly studentId: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly college: FieldRef<"Student", 'String'>
    readonly department: FieldRef<"Student", 'String'>
    readonly majorIdField: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.completedCourses
   */
  export type Student$completedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    where?: CompletedCourseWhereInput
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    cursor?: CompletedCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * Student.semesterEnrollment
   */
  export type Student$semesterEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterEnrollment
     */
    select?: SemesterEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SemesterEnrollment
     */
    omit?: SemesterEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterEnrollmentInclude<ExtArgs> | null
    where?: SemesterEnrollmentWhereInput
    orderBy?: SemesterEnrollmentOrderByWithRelationInput | SemesterEnrollmentOrderByWithRelationInput[]
    cursor?: SemesterEnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SemesterEnrollmentScalarFieldEnum | SemesterEnrollmentScalarFieldEnum[]
  }

  /**
   * Student.majorId
   */
  export type Student$majorIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    where?: MajorWhereInput
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Instructor
   */

  export type AggregateInstructor = {
    _count: InstructorCountAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  export type InstructorMinAggregateOutputType = {
    instructorId: string | null
    email: string | null
    college: string | null
    department: string | null
    expertise: string | null
  }

  export type InstructorMaxAggregateOutputType = {
    instructorId: string | null
    email: string | null
    college: string | null
    department: string | null
    expertise: string | null
  }

  export type InstructorCountAggregateOutputType = {
    instructorId: number
    email: number
    college: number
    department: number
    expertise: number
    _all: number
  }


  export type InstructorMinAggregateInputType = {
    instructorId?: true
    email?: true
    college?: true
    department?: true
    expertise?: true
  }

  export type InstructorMaxAggregateInputType = {
    instructorId?: true
    email?: true
    college?: true
    department?: true
    expertise?: true
  }

  export type InstructorCountAggregateInputType = {
    instructorId?: true
    email?: true
    college?: true
    department?: true
    expertise?: true
    _all?: true
  }

  export type InstructorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructor to aggregate.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instructors
    **/
    _count?: true | InstructorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorMaxAggregateInputType
  }

  export type GetInstructorAggregateType<T extends InstructorAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructor[P]>
      : GetScalarType<T[P], AggregateInstructor[P]>
  }




  export type InstructorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorWhereInput
    orderBy?: InstructorOrderByWithAggregationInput | InstructorOrderByWithAggregationInput[]
    by: InstructorScalarFieldEnum[] | InstructorScalarFieldEnum
    having?: InstructorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorCountAggregateInputType | true
    _min?: InstructorMinAggregateInputType
    _max?: InstructorMaxAggregateInputType
  }

  export type InstructorGroupByOutputType = {
    instructorId: string
    email: string
    college: string
    department: string
    expertise: string
    _count: InstructorCountAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  type GetInstructorGroupByPayload<T extends InstructorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorGroupByOutputType[P]>
        }
      >
    >


  export type InstructorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    instructorId?: boolean
    email?: boolean
    college?: boolean
    department?: boolean
    expertise?: boolean
    teachingClasses?: boolean | Instructor$teachingClassesArgs<ExtArgs>
    gradedClasses?: boolean | Instructor$gradedClassesArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    instructorId?: boolean
    email?: boolean
    college?: boolean
    department?: boolean
    expertise?: boolean
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    instructorId?: boolean
    email?: boolean
    college?: boolean
    department?: boolean
    expertise?: boolean
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectScalar = {
    instructorId?: boolean
    email?: boolean
    college?: boolean
    department?: boolean
    expertise?: boolean
  }

  export type InstructorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"instructorId" | "email" | "college" | "department" | "expertise", ExtArgs["result"]["instructor"]>
  export type InstructorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachingClasses?: boolean | Instructor$teachingClassesArgs<ExtArgs>
    gradedClasses?: boolean | Instructor$gradedClassesArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstructorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstructorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstructorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instructor"
    objects: {
      teachingClasses: Prisma.$ClassPayload<ExtArgs>[]
      gradedClasses: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      instructorId: string
      email: string
      college: string
      department: string
      expertise: string
    }, ExtArgs["result"]["instructor"]>
    composites: {}
  }

  type InstructorGetPayload<S extends boolean | null | undefined | InstructorDefaultArgs> = $Result.GetResult<Prisma.$InstructorPayload, S>

  type InstructorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorCountAggregateInputType | true
    }

  export interface InstructorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instructor'], meta: { name: 'Instructor' } }
    /**
     * Find zero or one Instructor that matches the filter.
     * @param {InstructorFindUniqueArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructorFindUniqueArgs>(args: SelectSubset<T, InstructorFindUniqueArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instructor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructorFindUniqueOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructorFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructorFindFirstArgs>(args?: SelectSubset<T, InstructorFindFirstArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructorFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructorFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructors
     * const instructors = await prisma.instructor.findMany()
     * 
     * // Get first 10 Instructors
     * const instructors = await prisma.instructor.findMany({ take: 10 })
     * 
     * // Only select the `instructorId`
     * const instructorWithInstructorIdOnly = await prisma.instructor.findMany({ select: { instructorId: true } })
     * 
     */
    findMany<T extends InstructorFindManyArgs>(args?: SelectSubset<T, InstructorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instructor.
     * @param {InstructorCreateArgs} args - Arguments to create a Instructor.
     * @example
     * // Create one Instructor
     * const Instructor = await prisma.instructor.create({
     *   data: {
     *     // ... data to create a Instructor
     *   }
     * })
     * 
     */
    create<T extends InstructorCreateArgs>(args: SelectSubset<T, InstructorCreateArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instructors.
     * @param {InstructorCreateManyArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructor = await prisma.instructor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructorCreateManyArgs>(args?: SelectSubset<T, InstructorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instructors and returns the data saved in the database.
     * @param {InstructorCreateManyAndReturnArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructor = await prisma.instructor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instructors and only return the `instructorId`
     * const instructorWithInstructorIdOnly = await prisma.instructor.createManyAndReturn({
     *   select: { instructorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructorCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instructor.
     * @param {InstructorDeleteArgs} args - Arguments to delete one Instructor.
     * @example
     * // Delete one Instructor
     * const Instructor = await prisma.instructor.delete({
     *   where: {
     *     // ... filter to delete one Instructor
     *   }
     * })
     * 
     */
    delete<T extends InstructorDeleteArgs>(args: SelectSubset<T, InstructorDeleteArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instructor.
     * @param {InstructorUpdateArgs} args - Arguments to update one Instructor.
     * @example
     * // Update one Instructor
     * const instructor = await prisma.instructor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructorUpdateArgs>(args: SelectSubset<T, InstructorUpdateArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instructors.
     * @param {InstructorDeleteManyArgs} args - Arguments to filter Instructors to delete.
     * @example
     * // Delete a few Instructors
     * const { count } = await prisma.instructor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructorDeleteManyArgs>(args?: SelectSubset<T, InstructorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructorUpdateManyArgs>(args: SelectSubset<T, InstructorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors and returns the data updated in the database.
     * @param {InstructorUpdateManyAndReturnArgs} args - Arguments to update many Instructors.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instructors and only return the `instructorId`
     * const instructorWithInstructorIdOnly = await prisma.instructor.updateManyAndReturn({
     *   select: { instructorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstructorUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instructor.
     * @param {InstructorUpsertArgs} args - Arguments to update or create a Instructor.
     * @example
     * // Update or create a Instructor
     * const instructor = await prisma.instructor.upsert({
     *   create: {
     *     // ... data to create a Instructor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instructor we want to update
     *   }
     * })
     */
    upsert<T extends InstructorUpsertArgs>(args: SelectSubset<T, InstructorUpsertArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorCountArgs} args - Arguments to filter Instructors to count.
     * @example
     * // Count the number of Instructors
     * const count = await prisma.instructor.count({
     *   where: {
     *     // ... the filter for the Instructors we want to count
     *   }
     * })
    **/
    count<T extends InstructorCountArgs>(
      args?: Subset<T, InstructorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstructorAggregateArgs>(args: Subset<T, InstructorAggregateArgs>): Prisma.PrismaPromise<GetInstructorAggregateType<T>>

    /**
     * Group by Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstructorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorGroupByArgs['orderBy'] }
        : { orderBy?: InstructorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstructorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instructor model
   */
  readonly fields: InstructorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instructor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teachingClasses<T extends Instructor$teachingClassesArgs<ExtArgs> = {}>(args?: Subset<T, Instructor$teachingClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gradedClasses<T extends Instructor$gradedClassesArgs<ExtArgs> = {}>(args?: Subset<T, Instructor$gradedClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instructor model
   */
  interface InstructorFieldRefs {
    readonly instructorId: FieldRef<"Instructor", 'String'>
    readonly email: FieldRef<"Instructor", 'String'>
    readonly college: FieldRef<"Instructor", 'String'>
    readonly department: FieldRef<"Instructor", 'String'>
    readonly expertise: FieldRef<"Instructor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instructor findUnique
   */
  export type InstructorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor findUniqueOrThrow
   */
  export type InstructorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor findFirst
   */
  export type InstructorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor findFirstOrThrow
   */
  export type InstructorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor findMany
   */
  export type InstructorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructors to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor create
   */
  export type InstructorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to create a Instructor.
     */
    data: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
  }

  /**
   * Instructor createMany
   */
  export type InstructorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
  }

  /**
   * Instructor createManyAndReturn
   */
  export type InstructorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
  }

  /**
   * Instructor update
   */
  export type InstructorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to update a Instructor.
     */
    data: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
    /**
     * Choose, which Instructor to update.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor updateMany
   */
  export type InstructorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to update.
     */
    limit?: number
  }

  /**
   * Instructor updateManyAndReturn
   */
  export type InstructorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to update.
     */
    limit?: number
  }

  /**
   * Instructor upsert
   */
  export type InstructorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The filter to search for the Instructor to update in case it exists.
     */
    where: InstructorWhereUniqueInput
    /**
     * In case the Instructor found by the `where` argument doesn't exist, create a new Instructor with this data.
     */
    create: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
    /**
     * In case the Instructor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
  }

  /**
   * Instructor delete
   */
  export type InstructorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter which Instructor to delete.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor deleteMany
   */
  export type InstructorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructors to delete
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to delete.
     */
    limit?: number
  }

  /**
   * Instructor.teachingClasses
   */
  export type Instructor$teachingClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Instructor.gradedClasses
   */
  export type Instructor$gradedClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Instructor without action
   */
  export type InstructorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    adminId: string | null
    email: string | null
  }

  export type AdminMaxAggregateOutputType = {
    adminId: string | null
    email: string | null
  }

  export type AdminCountAggregateOutputType = {
    adminId: number
    email: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    adminId?: true
    email?: true
  }

  export type AdminMaxAggregateInputType = {
    adminId?: true
    email?: true
  }

  export type AdminCountAggregateInputType = {
    adminId?: true
    email?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    adminId: string
    email: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adminId?: boolean
    email?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adminId?: boolean
    email?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adminId?: boolean
    email?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    adminId?: boolean
    email?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"adminId" | "email", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      adminId: string
      email: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `adminId`
     * const adminWithAdminIdOnly = await prisma.admin.findMany({ select: { adminId: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `adminId`
     * const adminWithAdminIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { adminId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `adminId`
     * const adminWithAdminIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { adminId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly adminId: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Major
   */

  export type AggregateMajor = {
    _count: MajorCountAggregateOutputType | null
    _min: MajorMinAggregateOutputType | null
    _max: MajorMaxAggregateOutputType | null
  }

  export type MajorMinAggregateOutputType = {
    majorId: string | null
    majorName: string | null
    college: string | null
    department: string | null
  }

  export type MajorMaxAggregateOutputType = {
    majorId: string | null
    majorName: string | null
    college: string | null
    department: string | null
  }

  export type MajorCountAggregateOutputType = {
    majorId: number
    majorName: number
    college: number
    department: number
    _all: number
  }


  export type MajorMinAggregateInputType = {
    majorId?: true
    majorName?: true
    college?: true
    department?: true
  }

  export type MajorMaxAggregateInputType = {
    majorId?: true
    majorName?: true
    college?: true
    department?: true
  }

  export type MajorCountAggregateInputType = {
    majorId?: true
    majorName?: true
    college?: true
    department?: true
    _all?: true
  }

  export type MajorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Major to aggregate.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Majors
    **/
    _count?: true | MajorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MajorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MajorMaxAggregateInputType
  }

  export type GetMajorAggregateType<T extends MajorAggregateArgs> = {
        [P in keyof T & keyof AggregateMajor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMajor[P]>
      : GetScalarType<T[P], AggregateMajor[P]>
  }




  export type MajorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorWhereInput
    orderBy?: MajorOrderByWithAggregationInput | MajorOrderByWithAggregationInput[]
    by: MajorScalarFieldEnum[] | MajorScalarFieldEnum
    having?: MajorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MajorCountAggregateInputType | true
    _min?: MajorMinAggregateInputType
    _max?: MajorMaxAggregateInputType
  }

  export type MajorGroupByOutputType = {
    majorId: string
    majorName: string
    college: string
    department: string
    _count: MajorCountAggregateOutputType | null
    _min: MajorMinAggregateOutputType | null
    _max: MajorMaxAggregateOutputType | null
  }

  type GetMajorGroupByPayload<T extends MajorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MajorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MajorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MajorGroupByOutputType[P]>
            : GetScalarType<T[P], MajorGroupByOutputType[P]>
        }
      >
    >


  export type MajorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    majorId?: boolean
    majorName?: boolean
    college?: boolean
    department?: boolean
    requiredCourses?: boolean | Major$requiredCoursesArgs<ExtArgs>
    students?: boolean | Major$studentsArgs<ExtArgs>
    _count?: boolean | MajorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["major"]>

  export type MajorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    majorId?: boolean
    majorName?: boolean
    college?: boolean
    department?: boolean
  }, ExtArgs["result"]["major"]>

  export type MajorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    majorId?: boolean
    majorName?: boolean
    college?: boolean
    department?: boolean
  }, ExtArgs["result"]["major"]>

  export type MajorSelectScalar = {
    majorId?: boolean
    majorName?: boolean
    college?: boolean
    department?: boolean
  }

  export type MajorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"majorId" | "majorName" | "college" | "department", ExtArgs["result"]["major"]>
  export type MajorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requiredCourses?: boolean | Major$requiredCoursesArgs<ExtArgs>
    students?: boolean | Major$studentsArgs<ExtArgs>
    _count?: boolean | MajorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MajorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MajorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MajorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Major"
    objects: {
      requiredCourses: Prisma.$CoursePayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      majorId: string
      majorName: string
      college: string
      department: string
    }, ExtArgs["result"]["major"]>
    composites: {}
  }

  type MajorGetPayload<S extends boolean | null | undefined | MajorDefaultArgs> = $Result.GetResult<Prisma.$MajorPayload, S>

  type MajorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MajorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MajorCountAggregateInputType | true
    }

  export interface MajorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Major'], meta: { name: 'Major' } }
    /**
     * Find zero or one Major that matches the filter.
     * @param {MajorFindUniqueArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MajorFindUniqueArgs>(args: SelectSubset<T, MajorFindUniqueArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Major that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MajorFindUniqueOrThrowArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MajorFindUniqueOrThrowArgs>(args: SelectSubset<T, MajorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Major that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindFirstArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MajorFindFirstArgs>(args?: SelectSubset<T, MajorFindFirstArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Major that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindFirstOrThrowArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MajorFindFirstOrThrowArgs>(args?: SelectSubset<T, MajorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Majors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Majors
     * const majors = await prisma.major.findMany()
     * 
     * // Get first 10 Majors
     * const majors = await prisma.major.findMany({ take: 10 })
     * 
     * // Only select the `majorId`
     * const majorWithMajorIdOnly = await prisma.major.findMany({ select: { majorId: true } })
     * 
     */
    findMany<T extends MajorFindManyArgs>(args?: SelectSubset<T, MajorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Major.
     * @param {MajorCreateArgs} args - Arguments to create a Major.
     * @example
     * // Create one Major
     * const Major = await prisma.major.create({
     *   data: {
     *     // ... data to create a Major
     *   }
     * })
     * 
     */
    create<T extends MajorCreateArgs>(args: SelectSubset<T, MajorCreateArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Majors.
     * @param {MajorCreateManyArgs} args - Arguments to create many Majors.
     * @example
     * // Create many Majors
     * const major = await prisma.major.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MajorCreateManyArgs>(args?: SelectSubset<T, MajorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Majors and returns the data saved in the database.
     * @param {MajorCreateManyAndReturnArgs} args - Arguments to create many Majors.
     * @example
     * // Create many Majors
     * const major = await prisma.major.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Majors and only return the `majorId`
     * const majorWithMajorIdOnly = await prisma.major.createManyAndReturn({
     *   select: { majorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MajorCreateManyAndReturnArgs>(args?: SelectSubset<T, MajorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Major.
     * @param {MajorDeleteArgs} args - Arguments to delete one Major.
     * @example
     * // Delete one Major
     * const Major = await prisma.major.delete({
     *   where: {
     *     // ... filter to delete one Major
     *   }
     * })
     * 
     */
    delete<T extends MajorDeleteArgs>(args: SelectSubset<T, MajorDeleteArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Major.
     * @param {MajorUpdateArgs} args - Arguments to update one Major.
     * @example
     * // Update one Major
     * const major = await prisma.major.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MajorUpdateArgs>(args: SelectSubset<T, MajorUpdateArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Majors.
     * @param {MajorDeleteManyArgs} args - Arguments to filter Majors to delete.
     * @example
     * // Delete a few Majors
     * const { count } = await prisma.major.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MajorDeleteManyArgs>(args?: SelectSubset<T, MajorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Majors
     * const major = await prisma.major.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MajorUpdateManyArgs>(args: SelectSubset<T, MajorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Majors and returns the data updated in the database.
     * @param {MajorUpdateManyAndReturnArgs} args - Arguments to update many Majors.
     * @example
     * // Update many Majors
     * const major = await prisma.major.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Majors and only return the `majorId`
     * const majorWithMajorIdOnly = await prisma.major.updateManyAndReturn({
     *   select: { majorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MajorUpdateManyAndReturnArgs>(args: SelectSubset<T, MajorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Major.
     * @param {MajorUpsertArgs} args - Arguments to update or create a Major.
     * @example
     * // Update or create a Major
     * const major = await prisma.major.upsert({
     *   create: {
     *     // ... data to create a Major
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Major we want to update
     *   }
     * })
     */
    upsert<T extends MajorUpsertArgs>(args: SelectSubset<T, MajorUpsertArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCountArgs} args - Arguments to filter Majors to count.
     * @example
     * // Count the number of Majors
     * const count = await prisma.major.count({
     *   where: {
     *     // ... the filter for the Majors we want to count
     *   }
     * })
    **/
    count<T extends MajorCountArgs>(
      args?: Subset<T, MajorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MajorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Major.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MajorAggregateArgs>(args: Subset<T, MajorAggregateArgs>): Prisma.PrismaPromise<GetMajorAggregateType<T>>

    /**
     * Group by Major.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MajorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MajorGroupByArgs['orderBy'] }
        : { orderBy?: MajorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MajorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMajorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Major model
   */
  readonly fields: MajorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Major.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MajorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requiredCourses<T extends Major$requiredCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Major$requiredCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Major$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Major$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Major model
   */
  interface MajorFieldRefs {
    readonly majorId: FieldRef<"Major", 'String'>
    readonly majorName: FieldRef<"Major", 'String'>
    readonly college: FieldRef<"Major", 'String'>
    readonly department: FieldRef<"Major", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Major findUnique
   */
  export type MajorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major findUniqueOrThrow
   */
  export type MajorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major findFirst
   */
  export type MajorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Majors.
     */
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major findFirstOrThrow
   */
  export type MajorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Majors.
     */
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major findMany
   */
  export type MajorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Majors to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major create
   */
  export type MajorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The data needed to create a Major.
     */
    data: XOR<MajorCreateInput, MajorUncheckedCreateInput>
  }

  /**
   * Major createMany
   */
  export type MajorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Majors.
     */
    data: MajorCreateManyInput | MajorCreateManyInput[]
  }

  /**
   * Major createManyAndReturn
   */
  export type MajorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * The data used to create many Majors.
     */
    data: MajorCreateManyInput | MajorCreateManyInput[]
  }

  /**
   * Major update
   */
  export type MajorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The data needed to update a Major.
     */
    data: XOR<MajorUpdateInput, MajorUncheckedUpdateInput>
    /**
     * Choose, which Major to update.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major updateMany
   */
  export type MajorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Majors.
     */
    data: XOR<MajorUpdateManyMutationInput, MajorUncheckedUpdateManyInput>
    /**
     * Filter which Majors to update
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to update.
     */
    limit?: number
  }

  /**
   * Major updateManyAndReturn
   */
  export type MajorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * The data used to update Majors.
     */
    data: XOR<MajorUpdateManyMutationInput, MajorUncheckedUpdateManyInput>
    /**
     * Filter which Majors to update
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to update.
     */
    limit?: number
  }

  /**
   * Major upsert
   */
  export type MajorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The filter to search for the Major to update in case it exists.
     */
    where: MajorWhereUniqueInput
    /**
     * In case the Major found by the `where` argument doesn't exist, create a new Major with this data.
     */
    create: XOR<MajorCreateInput, MajorUncheckedCreateInput>
    /**
     * In case the Major was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MajorUpdateInput, MajorUncheckedUpdateInput>
  }

  /**
   * Major delete
   */
  export type MajorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter which Major to delete.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major deleteMany
   */
  export type MajorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Majors to delete
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to delete.
     */
    limit?: number
  }

  /**
   * Major.requiredCourses
   */
  export type Major$requiredCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Major.students
   */
  export type Major$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Major without action
   */
  export type MajorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
  }


  /**
   * Model CompletedCourse
   */

  export type AggregateCompletedCourse = {
    _count: CompletedCourseCountAggregateOutputType | null
    _avg: CompletedCourseAvgAggregateOutputType | null
    _sum: CompletedCourseSumAggregateOutputType | null
    _min: CompletedCourseMinAggregateOutputType | null
    _max: CompletedCourseMaxAggregateOutputType | null
  }

  export type CompletedCourseAvgAggregateOutputType = {
    id: number | null
  }

  export type CompletedCourseSumAggregateOutputType = {
    id: number | null
  }

  export type CompletedCourseMinAggregateOutputType = {
    id: number | null
    courseId: string | null
    letterGrade: string | null
    studentId: string | null
  }

  export type CompletedCourseMaxAggregateOutputType = {
    id: number | null
    courseId: string | null
    letterGrade: string | null
    studentId: string | null
  }

  export type CompletedCourseCountAggregateOutputType = {
    id: number
    courseId: number
    letterGrade: number
    studentId: number
    _all: number
  }


  export type CompletedCourseAvgAggregateInputType = {
    id?: true
  }

  export type CompletedCourseSumAggregateInputType = {
    id?: true
  }

  export type CompletedCourseMinAggregateInputType = {
    id?: true
    courseId?: true
    letterGrade?: true
    studentId?: true
  }

  export type CompletedCourseMaxAggregateInputType = {
    id?: true
    courseId?: true
    letterGrade?: true
    studentId?: true
  }

  export type CompletedCourseCountAggregateInputType = {
    id?: true
    courseId?: true
    letterGrade?: true
    studentId?: true
    _all?: true
  }

  export type CompletedCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedCourse to aggregate.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedCourses
    **/
    _count?: true | CompletedCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompletedCourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompletedCourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedCourseMaxAggregateInputType
  }

  export type GetCompletedCourseAggregateType<T extends CompletedCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedCourse[P]>
      : GetScalarType<T[P], AggregateCompletedCourse[P]>
  }




  export type CompletedCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedCourseWhereInput
    orderBy?: CompletedCourseOrderByWithAggregationInput | CompletedCourseOrderByWithAggregationInput[]
    by: CompletedCourseScalarFieldEnum[] | CompletedCourseScalarFieldEnum
    having?: CompletedCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedCourseCountAggregateInputType | true
    _avg?: CompletedCourseAvgAggregateInputType
    _sum?: CompletedCourseSumAggregateInputType
    _min?: CompletedCourseMinAggregateInputType
    _max?: CompletedCourseMaxAggregateInputType
  }

  export type CompletedCourseGroupByOutputType = {
    id: number
    courseId: string
    letterGrade: string
    studentId: string
    _count: CompletedCourseCountAggregateOutputType | null
    _avg: CompletedCourseAvgAggregateOutputType | null
    _sum: CompletedCourseSumAggregateOutputType | null
    _min: CompletedCourseMinAggregateOutputType | null
    _max: CompletedCourseMaxAggregateOutputType | null
  }

  type GetCompletedCourseGroupByPayload<T extends CompletedCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedCourseGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedCourseGroupByOutputType[P]>
        }
      >
    >


  export type CompletedCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    letterGrade?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    letterGrade?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    letterGrade?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectScalar = {
    id?: boolean
    courseId?: boolean
    letterGrade?: boolean
    studentId?: boolean
  }

  export type CompletedCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "letterGrade" | "studentId", ExtArgs["result"]["completedCourse"]>
  export type CompletedCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type CompletedCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type CompletedCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $CompletedCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedCourse"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: string
      letterGrade: string
      studentId: string
    }, ExtArgs["result"]["completedCourse"]>
    composites: {}
  }

  type CompletedCourseGetPayload<S extends boolean | null | undefined | CompletedCourseDefaultArgs> = $Result.GetResult<Prisma.$CompletedCoursePayload, S>

  type CompletedCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletedCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletedCourseCountAggregateInputType | true
    }

  export interface CompletedCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedCourse'], meta: { name: 'CompletedCourse' } }
    /**
     * Find zero or one CompletedCourse that matches the filter.
     * @param {CompletedCourseFindUniqueArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedCourseFindUniqueArgs>(args: SelectSubset<T, CompletedCourseFindUniqueArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompletedCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletedCourseFindUniqueOrThrowArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindFirstArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedCourseFindFirstArgs>(args?: SelectSubset<T, CompletedCourseFindFirstArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindFirstOrThrowArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompletedCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedCourses
     * const completedCourses = await prisma.completedCourse.findMany()
     * 
     * // Get first 10 CompletedCourses
     * const completedCourses = await prisma.completedCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletedCourseFindManyArgs>(args?: SelectSubset<T, CompletedCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompletedCourse.
     * @param {CompletedCourseCreateArgs} args - Arguments to create a CompletedCourse.
     * @example
     * // Create one CompletedCourse
     * const CompletedCourse = await prisma.completedCourse.create({
     *   data: {
     *     // ... data to create a CompletedCourse
     *   }
     * })
     * 
     */
    create<T extends CompletedCourseCreateArgs>(args: SelectSubset<T, CompletedCourseCreateArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompletedCourses.
     * @param {CompletedCourseCreateManyArgs} args - Arguments to create many CompletedCourses.
     * @example
     * // Create many CompletedCourses
     * const completedCourse = await prisma.completedCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedCourseCreateManyArgs>(args?: SelectSubset<T, CompletedCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompletedCourses and returns the data saved in the database.
     * @param {CompletedCourseCreateManyAndReturnArgs} args - Arguments to create many CompletedCourses.
     * @example
     * // Create many CompletedCourses
     * const completedCourse = await prisma.completedCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompletedCourses and only return the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletedCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletedCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompletedCourse.
     * @param {CompletedCourseDeleteArgs} args - Arguments to delete one CompletedCourse.
     * @example
     * // Delete one CompletedCourse
     * const CompletedCourse = await prisma.completedCourse.delete({
     *   where: {
     *     // ... filter to delete one CompletedCourse
     *   }
     * })
     * 
     */
    delete<T extends CompletedCourseDeleteArgs>(args: SelectSubset<T, CompletedCourseDeleteArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompletedCourse.
     * @param {CompletedCourseUpdateArgs} args - Arguments to update one CompletedCourse.
     * @example
     * // Update one CompletedCourse
     * const completedCourse = await prisma.completedCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedCourseUpdateArgs>(args: SelectSubset<T, CompletedCourseUpdateArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompletedCourses.
     * @param {CompletedCourseDeleteManyArgs} args - Arguments to filter CompletedCourses to delete.
     * @example
     * // Delete a few CompletedCourses
     * const { count } = await prisma.completedCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedCourseDeleteManyArgs>(args?: SelectSubset<T, CompletedCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedCourses
     * const completedCourse = await prisma.completedCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedCourseUpdateManyArgs>(args: SelectSubset<T, CompletedCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedCourses and returns the data updated in the database.
     * @param {CompletedCourseUpdateManyAndReturnArgs} args - Arguments to update many CompletedCourses.
     * @example
     * // Update many CompletedCourses
     * const completedCourse = await prisma.completedCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompletedCourses and only return the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompletedCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CompletedCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompletedCourse.
     * @param {CompletedCourseUpsertArgs} args - Arguments to update or create a CompletedCourse.
     * @example
     * // Update or create a CompletedCourse
     * const completedCourse = await prisma.completedCourse.upsert({
     *   create: {
     *     // ... data to create a CompletedCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedCourse we want to update
     *   }
     * })
     */
    upsert<T extends CompletedCourseUpsertArgs>(args: SelectSubset<T, CompletedCourseUpsertArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompletedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseCountArgs} args - Arguments to filter CompletedCourses to count.
     * @example
     * // Count the number of CompletedCourses
     * const count = await prisma.completedCourse.count({
     *   where: {
     *     // ... the filter for the CompletedCourses we want to count
     *   }
     * })
    **/
    count<T extends CompletedCourseCountArgs>(
      args?: Subset<T, CompletedCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompletedCourseAggregateArgs>(args: Subset<T, CompletedCourseAggregateArgs>): Prisma.PrismaPromise<GetCompletedCourseAggregateType<T>>

    /**
     * Group by CompletedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompletedCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedCourseGroupByArgs['orderBy'] }
        : { orderBy?: CompletedCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompletedCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedCourse model
   */
  readonly fields: CompletedCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompletedCourse model
   */
  interface CompletedCourseFieldRefs {
    readonly id: FieldRef<"CompletedCourse", 'Int'>
    readonly courseId: FieldRef<"CompletedCourse", 'String'>
    readonly letterGrade: FieldRef<"CompletedCourse", 'String'>
    readonly studentId: FieldRef<"CompletedCourse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompletedCourse findUnique
   */
  export type CompletedCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse findUniqueOrThrow
   */
  export type CompletedCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse findFirst
   */
  export type CompletedCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedCourses.
     */
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse findFirstOrThrow
   */
  export type CompletedCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedCourses.
     */
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse findMany
   */
  export type CompletedCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourses to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse create
   */
  export type CompletedCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a CompletedCourse.
     */
    data: XOR<CompletedCourseCreateInput, CompletedCourseUncheckedCreateInput>
  }

  /**
   * CompletedCourse createMany
   */
  export type CompletedCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedCourses.
     */
    data: CompletedCourseCreateManyInput | CompletedCourseCreateManyInput[]
  }

  /**
   * CompletedCourse createManyAndReturn
   */
  export type CompletedCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * The data used to create many CompletedCourses.
     */
    data: CompletedCourseCreateManyInput | CompletedCourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedCourse update
   */
  export type CompletedCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a CompletedCourse.
     */
    data: XOR<CompletedCourseUpdateInput, CompletedCourseUncheckedUpdateInput>
    /**
     * Choose, which CompletedCourse to update.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse updateMany
   */
  export type CompletedCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedCourses.
     */
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyInput>
    /**
     * Filter which CompletedCourses to update
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to update.
     */
    limit?: number
  }

  /**
   * CompletedCourse updateManyAndReturn
   */
  export type CompletedCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * The data used to update CompletedCourses.
     */
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyInput>
    /**
     * Filter which CompletedCourses to update
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedCourse upsert
   */
  export type CompletedCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the CompletedCourse to update in case it exists.
     */
    where: CompletedCourseWhereUniqueInput
    /**
     * In case the CompletedCourse found by the `where` argument doesn't exist, create a new CompletedCourse with this data.
     */
    create: XOR<CompletedCourseCreateInput, CompletedCourseUncheckedCreateInput>
    /**
     * In case the CompletedCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedCourseUpdateInput, CompletedCourseUncheckedUpdateInput>
  }

  /**
   * CompletedCourse delete
   */
  export type CompletedCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter which CompletedCourse to delete.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse deleteMany
   */
  export type CompletedCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedCourses to delete
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to delete.
     */
    limit?: number
  }

  /**
   * CompletedCourse without action
   */
  export type CompletedCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
  }


  /**
   * Model SemesterEnrollment
   */

  export type AggregateSemesterEnrollment = {
    _count: SemesterEnrollmentCountAggregateOutputType | null
    _avg: SemesterEnrollmentAvgAggregateOutputType | null
    _sum: SemesterEnrollmentSumAggregateOutputType | null
    _min: SemesterEnrollmentMinAggregateOutputType | null
    _max: SemesterEnrollmentMaxAggregateOutputType | null
  }

  export type SemesterEnrollmentAvgAggregateOutputType = {
    id: number | null
  }

  export type SemesterEnrollmentSumAggregateOutputType = {
    id: number | null
  }

  export type SemesterEnrollmentMinAggregateOutputType = {
    id: number | null
    semester: string | null
    studentId: string | null
  }

  export type SemesterEnrollmentMaxAggregateOutputType = {
    id: number | null
    semester: string | null
    studentId: string | null
  }

  export type SemesterEnrollmentCountAggregateOutputType = {
    id: number
    semester: number
    studentId: number
    _all: number
  }


  export type SemesterEnrollmentAvgAggregateInputType = {
    id?: true
  }

  export type SemesterEnrollmentSumAggregateInputType = {
    id?: true
  }

  export type SemesterEnrollmentMinAggregateInputType = {
    id?: true
    semester?: true
    studentId?: true
  }

  export type SemesterEnrollmentMaxAggregateInputType = {
    id?: true
    semester?: true
    studentId?: true
  }

  export type SemesterEnrollmentCountAggregateInputType = {
    id?: true
    semester?: true
    studentId?: true
    _all?: true
  }

  export type SemesterEnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SemesterEnrollment to aggregate.
     */
    where?: SemesterEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SemesterEnrollments to fetch.
     */
    orderBy?: SemesterEnrollmentOrderByWithRelationInput | SemesterEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SemesterEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SemesterEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SemesterEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SemesterEnrollments
    **/
    _count?: true | SemesterEnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SemesterEnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SemesterEnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SemesterEnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SemesterEnrollmentMaxAggregateInputType
  }

  export type GetSemesterEnrollmentAggregateType<T extends SemesterEnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateSemesterEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSemesterEnrollment[P]>
      : GetScalarType<T[P], AggregateSemesterEnrollment[P]>
  }




  export type SemesterEnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SemesterEnrollmentWhereInput
    orderBy?: SemesterEnrollmentOrderByWithAggregationInput | SemesterEnrollmentOrderByWithAggregationInput[]
    by: SemesterEnrollmentScalarFieldEnum[] | SemesterEnrollmentScalarFieldEnum
    having?: SemesterEnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SemesterEnrollmentCountAggregateInputType | true
    _avg?: SemesterEnrollmentAvgAggregateInputType
    _sum?: SemesterEnrollmentSumAggregateInputType
    _min?: SemesterEnrollmentMinAggregateInputType
    _max?: SemesterEnrollmentMaxAggregateInputType
  }

  export type SemesterEnrollmentGroupByOutputType = {
    id: number
    semester: string
    studentId: string
    _count: SemesterEnrollmentCountAggregateOutputType | null
    _avg: SemesterEnrollmentAvgAggregateOutputType | null
    _sum: SemesterEnrollmentSumAggregateOutputType | null
    _min: SemesterEnrollmentMinAggregateOutputType | null
    _max: SemesterEnrollmentMaxAggregateOutputType | null
  }

  type GetSemesterEnrollmentGroupByPayload<T extends SemesterEnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SemesterEnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SemesterEnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SemesterEnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], SemesterEnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type SemesterEnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    semester?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    classes?: boolean | SemesterEnrollment$classesArgs<ExtArgs>
    _count?: boolean | SemesterEnrollmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semesterEnrollment"]>

  export type SemesterEnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    semester?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semesterEnrollment"]>

  export type SemesterEnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    semester?: boolean
    studentId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semesterEnrollment"]>

  export type SemesterEnrollmentSelectScalar = {
    id?: boolean
    semester?: boolean
    studentId?: boolean
  }

  export type SemesterEnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "semester" | "studentId", ExtArgs["result"]["semesterEnrollment"]>
  export type SemesterEnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    classes?: boolean | SemesterEnrollment$classesArgs<ExtArgs>
    _count?: boolean | SemesterEnrollmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SemesterEnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type SemesterEnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $SemesterEnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SemesterEnrollment"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      classes: Prisma.$ClassEnrollmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      semester: string
      studentId: string
    }, ExtArgs["result"]["semesterEnrollment"]>
    composites: {}
  }

  type SemesterEnrollmentGetPayload<S extends boolean | null | undefined | SemesterEnrollmentDefaultArgs> = $Result.GetResult<Prisma.$SemesterEnrollmentPayload, S>

  type SemesterEnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SemesterEnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SemesterEnrollmentCountAggregateInputType | true
    }

  export interface SemesterEnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SemesterEnrollment'], meta: { name: 'SemesterEnrollment' } }
    /**
     * Find zero or one SemesterEnrollment that matches the filter.
     * @param {SemesterEnrollmentFindUniqueArgs} args - Arguments to find a SemesterEnrollment
     * @example
     * // Get one SemesterEnrollment
     * const semesterEnrollment = await prisma.semesterEnrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SemesterEnrollmentFindUniqueArgs>(args: SelectSubset<T, SemesterEnrollmentFindUniqueArgs<ExtArgs>>): Prisma__SemesterEnrollmentClient<$Result.GetResult<Prisma.$SemesterEnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SemesterEnrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SemesterEnrollmentFindUniqueOrThrowArgs} args - Arguments to find a SemesterEnrollment
     * @example
     * // Get one SemesterEnrollment
     * const semesterEnrollment = await prisma.semesterEnrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SemesterEnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, SemesterEnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SemesterEnrollmentClient<$Result.GetResult<Prisma.$SemesterEnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SemesterEnrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterEnrollmentFindFirstArgs} args - Arguments to find a SemesterEnrollment
     * @example
     * // Get one SemesterEnrollment
     * const semesterEnrollment = await prisma.semesterEnrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SemesterEnrollmentFindFirstArgs>(args?: SelectSubset<T, SemesterEnrollmentFindFirstArgs<ExtArgs>>): Prisma__SemesterEnrollmentClient<$Result.GetResult<Prisma.$SemesterEnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SemesterEnrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterEnrollmentFindFirstOrThrowArgs} args - Arguments to find a SemesterEnrollment
     * @example
     * // Get one SemesterEnrollment
     * const semesterEnrollment = await prisma.semesterEnrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SemesterEnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, SemesterEnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SemesterEnrollmentClient<$Result.GetResult<Prisma.$SemesterEnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SemesterEnrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterEnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SemesterEnrollments
     * const semesterEnrollments = await prisma.semesterEnrollment.findMany()
     * 
     * // Get first 10 SemesterEnrollments
     * const semesterEnrollments = await prisma.semesterEnrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const semesterEnrollmentWithIdOnly = await prisma.semesterEnrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SemesterEnrollmentFindManyArgs>(args?: SelectSubset<T, SemesterEnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterEnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SemesterEnrollment.
     * @param {SemesterEnrollmentCreateArgs} args - Arguments to create a SemesterEnrollment.
     * @example
     * // Create one SemesterEnrollment
     * const SemesterEnrollment = await prisma.semesterEnrollment.create({
     *   data: {
     *     // ... data to create a SemesterEnrollment
     *   }
     * })
     * 
     */
    create<T extends SemesterEnrollmentCreateArgs>(args: SelectSubset<T, SemesterEnrollmentCreateArgs<ExtArgs>>): Prisma__SemesterEnrollmentClient<$Result.GetResult<Prisma.$SemesterEnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SemesterEnrollments.
     * @param {SemesterEnrollmentCreateManyArgs} args - Arguments to create many SemesterEnrollments.
     * @example
     * // Create many SemesterEnrollments
     * const semesterEnrollment = await prisma.semesterEnrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SemesterEnrollmentCreateManyArgs>(args?: SelectSubset<T, SemesterEnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SemesterEnrollments and returns the data saved in the database.
     * @param {SemesterEnrollmentCreateManyAndReturnArgs} args - Arguments to create many SemesterEnrollments.
     * @example
     * // Create many SemesterEnrollments
     * const semesterEnrollment = await prisma.semesterEnrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SemesterEnrollments and only return the `id`
     * const semesterEnrollmentWithIdOnly = await prisma.semesterEnrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SemesterEnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, SemesterEnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterEnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SemesterEnrollment.
     * @param {SemesterEnrollmentDeleteArgs} args - Arguments to delete one SemesterEnrollment.
     * @example
     * // Delete one SemesterEnrollment
     * const SemesterEnrollment = await prisma.semesterEnrollment.delete({
     *   where: {
     *     // ... filter to delete one SemesterEnrollment
     *   }
     * })
     * 
     */
    delete<T extends SemesterEnrollmentDeleteArgs>(args: SelectSubset<T, SemesterEnrollmentDeleteArgs<ExtArgs>>): Prisma__SemesterEnrollmentClient<$Result.GetResult<Prisma.$SemesterEnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SemesterEnrollment.
     * @param {SemesterEnrollmentUpdateArgs} args - Arguments to update one SemesterEnrollment.
     * @example
     * // Update one SemesterEnrollment
     * const semesterEnrollment = await prisma.semesterEnrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SemesterEnrollmentUpdateArgs>(args: SelectSubset<T, SemesterEnrollmentUpdateArgs<ExtArgs>>): Prisma__SemesterEnrollmentClient<$Result.GetResult<Prisma.$SemesterEnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SemesterEnrollments.
     * @param {SemesterEnrollmentDeleteManyArgs} args - Arguments to filter SemesterEnrollments to delete.
     * @example
     * // Delete a few SemesterEnrollments
     * const { count } = await prisma.semesterEnrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SemesterEnrollmentDeleteManyArgs>(args?: SelectSubset<T, SemesterEnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SemesterEnrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterEnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SemesterEnrollments
     * const semesterEnrollment = await prisma.semesterEnrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SemesterEnrollmentUpdateManyArgs>(args: SelectSubset<T, SemesterEnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SemesterEnrollments and returns the data updated in the database.
     * @param {SemesterEnrollmentUpdateManyAndReturnArgs} args - Arguments to update many SemesterEnrollments.
     * @example
     * // Update many SemesterEnrollments
     * const semesterEnrollment = await prisma.semesterEnrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SemesterEnrollments and only return the `id`
     * const semesterEnrollmentWithIdOnly = await prisma.semesterEnrollment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SemesterEnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, SemesterEnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterEnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SemesterEnrollment.
     * @param {SemesterEnrollmentUpsertArgs} args - Arguments to update or create a SemesterEnrollment.
     * @example
     * // Update or create a SemesterEnrollment
     * const semesterEnrollment = await prisma.semesterEnrollment.upsert({
     *   create: {
     *     // ... data to create a SemesterEnrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SemesterEnrollment we want to update
     *   }
     * })
     */
    upsert<T extends SemesterEnrollmentUpsertArgs>(args: SelectSubset<T, SemesterEnrollmentUpsertArgs<ExtArgs>>): Prisma__SemesterEnrollmentClient<$Result.GetResult<Prisma.$SemesterEnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SemesterEnrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterEnrollmentCountArgs} args - Arguments to filter SemesterEnrollments to count.
     * @example
     * // Count the number of SemesterEnrollments
     * const count = await prisma.semesterEnrollment.count({
     *   where: {
     *     // ... the filter for the SemesterEnrollments we want to count
     *   }
     * })
    **/
    count<T extends SemesterEnrollmentCountArgs>(
      args?: Subset<T, SemesterEnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SemesterEnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SemesterEnrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterEnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SemesterEnrollmentAggregateArgs>(args: Subset<T, SemesterEnrollmentAggregateArgs>): Prisma.PrismaPromise<GetSemesterEnrollmentAggregateType<T>>

    /**
     * Group by SemesterEnrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterEnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SemesterEnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SemesterEnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: SemesterEnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SemesterEnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSemesterEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SemesterEnrollment model
   */
  readonly fields: SemesterEnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SemesterEnrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SemesterEnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classes<T extends SemesterEnrollment$classesArgs<ExtArgs> = {}>(args?: Subset<T, SemesterEnrollment$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassEnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SemesterEnrollment model
   */
  interface SemesterEnrollmentFieldRefs {
    readonly id: FieldRef<"SemesterEnrollment", 'Int'>
    readonly semester: FieldRef<"SemesterEnrollment", 'String'>
    readonly studentId: FieldRef<"SemesterEnrollment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SemesterEnrollment findUnique
   */
  export type SemesterEnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterEnrollment
     */
    select?: SemesterEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SemesterEnrollment
     */
    omit?: SemesterEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which SemesterEnrollment to fetch.
     */
    where: SemesterEnrollmentWhereUniqueInput
  }

  /**
   * SemesterEnrollment findUniqueOrThrow
   */
  export type SemesterEnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterEnrollment
     */
    select?: SemesterEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SemesterEnrollment
     */
    omit?: SemesterEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which SemesterEnrollment to fetch.
     */
    where: SemesterEnrollmentWhereUniqueInput
  }

  /**
   * SemesterEnrollment findFirst
   */
  export type SemesterEnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterEnrollment
     */
    select?: SemesterEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SemesterEnrollment
     */
    omit?: SemesterEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which SemesterEnrollment to fetch.
     */
    where?: SemesterEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SemesterEnrollments to fetch.
     */
    orderBy?: SemesterEnrollmentOrderByWithRelationInput | SemesterEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SemesterEnrollments.
     */
    cursor?: SemesterEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SemesterEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SemesterEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SemesterEnrollments.
     */
    distinct?: SemesterEnrollmentScalarFieldEnum | SemesterEnrollmentScalarFieldEnum[]
  }

  /**
   * SemesterEnrollment findFirstOrThrow
   */
  export type SemesterEnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterEnrollment
     */
    select?: SemesterEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SemesterEnrollment
     */
    omit?: SemesterEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which SemesterEnrollment to fetch.
     */
    where?: SemesterEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SemesterEnrollments to fetch.
     */
    orderBy?: SemesterEnrollmentOrderByWithRelationInput | SemesterEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SemesterEnrollments.
     */
    cursor?: SemesterEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SemesterEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SemesterEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SemesterEnrollments.
     */
    distinct?: SemesterEnrollmentScalarFieldEnum | SemesterEnrollmentScalarFieldEnum[]
  }

  /**
   * SemesterEnrollment findMany
   */
  export type SemesterEnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterEnrollment
     */
    select?: SemesterEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SemesterEnrollment
     */
    omit?: SemesterEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which SemesterEnrollments to fetch.
     */
    where?: SemesterEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SemesterEnrollments to fetch.
     */
    orderBy?: SemesterEnrollmentOrderByWithRelationInput | SemesterEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SemesterEnrollments.
     */
    cursor?: SemesterEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SemesterEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SemesterEnrollments.
     */
    skip?: number
    distinct?: SemesterEnrollmentScalarFieldEnum | SemesterEnrollmentScalarFieldEnum[]
  }

  /**
   * SemesterEnrollment create
   */
  export type SemesterEnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterEnrollment
     */
    select?: SemesterEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SemesterEnrollment
     */
    omit?: SemesterEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterEnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a SemesterEnrollment.
     */
    data: XOR<SemesterEnrollmentCreateInput, SemesterEnrollmentUncheckedCreateInput>
  }

  /**
   * SemesterEnrollment createMany
   */
  export type SemesterEnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SemesterEnrollments.
     */
    data: SemesterEnrollmentCreateManyInput | SemesterEnrollmentCreateManyInput[]
  }

  /**
   * SemesterEnrollment createManyAndReturn
   */
  export type SemesterEnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterEnrollment
     */
    select?: SemesterEnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SemesterEnrollment
     */
    omit?: SemesterEnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many SemesterEnrollments.
     */
    data: SemesterEnrollmentCreateManyInput | SemesterEnrollmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterEnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SemesterEnrollment update
   */
  export type SemesterEnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterEnrollment
     */
    select?: SemesterEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SemesterEnrollment
     */
    omit?: SemesterEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterEnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a SemesterEnrollment.
     */
    data: XOR<SemesterEnrollmentUpdateInput, SemesterEnrollmentUncheckedUpdateInput>
    /**
     * Choose, which SemesterEnrollment to update.
     */
    where: SemesterEnrollmentWhereUniqueInput
  }

  /**
   * SemesterEnrollment updateMany
   */
  export type SemesterEnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SemesterEnrollments.
     */
    data: XOR<SemesterEnrollmentUpdateManyMutationInput, SemesterEnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which SemesterEnrollments to update
     */
    where?: SemesterEnrollmentWhereInput
    /**
     * Limit how many SemesterEnrollments to update.
     */
    limit?: number
  }

  /**
   * SemesterEnrollment updateManyAndReturn
   */
  export type SemesterEnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterEnrollment
     */
    select?: SemesterEnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SemesterEnrollment
     */
    omit?: SemesterEnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update SemesterEnrollments.
     */
    data: XOR<SemesterEnrollmentUpdateManyMutationInput, SemesterEnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which SemesterEnrollments to update
     */
    where?: SemesterEnrollmentWhereInput
    /**
     * Limit how many SemesterEnrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterEnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SemesterEnrollment upsert
   */
  export type SemesterEnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterEnrollment
     */
    select?: SemesterEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SemesterEnrollment
     */
    omit?: SemesterEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterEnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the SemesterEnrollment to update in case it exists.
     */
    where: SemesterEnrollmentWhereUniqueInput
    /**
     * In case the SemesterEnrollment found by the `where` argument doesn't exist, create a new SemesterEnrollment with this data.
     */
    create: XOR<SemesterEnrollmentCreateInput, SemesterEnrollmentUncheckedCreateInput>
    /**
     * In case the SemesterEnrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SemesterEnrollmentUpdateInput, SemesterEnrollmentUncheckedUpdateInput>
  }

  /**
   * SemesterEnrollment delete
   */
  export type SemesterEnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterEnrollment
     */
    select?: SemesterEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SemesterEnrollment
     */
    omit?: SemesterEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterEnrollmentInclude<ExtArgs> | null
    /**
     * Filter which SemesterEnrollment to delete.
     */
    where: SemesterEnrollmentWhereUniqueInput
  }

  /**
   * SemesterEnrollment deleteMany
   */
  export type SemesterEnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SemesterEnrollments to delete
     */
    where?: SemesterEnrollmentWhereInput
    /**
     * Limit how many SemesterEnrollments to delete.
     */
    limit?: number
  }

  /**
   * SemesterEnrollment.classes
   */
  export type SemesterEnrollment$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassEnrollment
     */
    select?: ClassEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassEnrollment
     */
    omit?: ClassEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassEnrollmentInclude<ExtArgs> | null
    where?: ClassEnrollmentWhereInput
    orderBy?: ClassEnrollmentOrderByWithRelationInput | ClassEnrollmentOrderByWithRelationInput[]
    cursor?: ClassEnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassEnrollmentScalarFieldEnum | ClassEnrollmentScalarFieldEnum[]
  }

  /**
   * SemesterEnrollment without action
   */
  export type SemesterEnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterEnrollment
     */
    select?: SemesterEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SemesterEnrollment
     */
    omit?: SemesterEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterEnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model ClassEnrollment
   */

  export type AggregateClassEnrollment = {
    _count: ClassEnrollmentCountAggregateOutputType | null
    _avg: ClassEnrollmentAvgAggregateOutputType | null
    _sum: ClassEnrollmentSumAggregateOutputType | null
    _min: ClassEnrollmentMinAggregateOutputType | null
    _max: ClassEnrollmentMaxAggregateOutputType | null
  }

  export type ClassEnrollmentAvgAggregateOutputType = {
    id: number | null
    semesterEnrollmentId: number | null
  }

  export type ClassEnrollmentSumAggregateOutputType = {
    id: number | null
    semesterEnrollmentId: number | null
  }

  export type ClassEnrollmentMinAggregateOutputType = {
    id: number | null
    classId: string | null
    courseId: string | null
    gradeStatus: string | null
    letterGrade: string | null
    semesterEnrollmentId: number | null
  }

  export type ClassEnrollmentMaxAggregateOutputType = {
    id: number | null
    classId: string | null
    courseId: string | null
    gradeStatus: string | null
    letterGrade: string | null
    semesterEnrollmentId: number | null
  }

  export type ClassEnrollmentCountAggregateOutputType = {
    id: number
    classId: number
    courseId: number
    gradeStatus: number
    letterGrade: number
    semesterEnrollmentId: number
    _all: number
  }


  export type ClassEnrollmentAvgAggregateInputType = {
    id?: true
    semesterEnrollmentId?: true
  }

  export type ClassEnrollmentSumAggregateInputType = {
    id?: true
    semesterEnrollmentId?: true
  }

  export type ClassEnrollmentMinAggregateInputType = {
    id?: true
    classId?: true
    courseId?: true
    gradeStatus?: true
    letterGrade?: true
    semesterEnrollmentId?: true
  }

  export type ClassEnrollmentMaxAggregateInputType = {
    id?: true
    classId?: true
    courseId?: true
    gradeStatus?: true
    letterGrade?: true
    semesterEnrollmentId?: true
  }

  export type ClassEnrollmentCountAggregateInputType = {
    id?: true
    classId?: true
    courseId?: true
    gradeStatus?: true
    letterGrade?: true
    semesterEnrollmentId?: true
    _all?: true
  }

  export type ClassEnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassEnrollment to aggregate.
     */
    where?: ClassEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassEnrollments to fetch.
     */
    orderBy?: ClassEnrollmentOrderByWithRelationInput | ClassEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassEnrollments
    **/
    _count?: true | ClassEnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassEnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassEnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassEnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassEnrollmentMaxAggregateInputType
  }

  export type GetClassEnrollmentAggregateType<T extends ClassEnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateClassEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassEnrollment[P]>
      : GetScalarType<T[P], AggregateClassEnrollment[P]>
  }




  export type ClassEnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassEnrollmentWhereInput
    orderBy?: ClassEnrollmentOrderByWithAggregationInput | ClassEnrollmentOrderByWithAggregationInput[]
    by: ClassEnrollmentScalarFieldEnum[] | ClassEnrollmentScalarFieldEnum
    having?: ClassEnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassEnrollmentCountAggregateInputType | true
    _avg?: ClassEnrollmentAvgAggregateInputType
    _sum?: ClassEnrollmentSumAggregateInputType
    _min?: ClassEnrollmentMinAggregateInputType
    _max?: ClassEnrollmentMaxAggregateInputType
  }

  export type ClassEnrollmentGroupByOutputType = {
    id: number
    classId: string
    courseId: string
    gradeStatus: string
    letterGrade: string
    semesterEnrollmentId: number
    _count: ClassEnrollmentCountAggregateOutputType | null
    _avg: ClassEnrollmentAvgAggregateOutputType | null
    _sum: ClassEnrollmentSumAggregateOutputType | null
    _min: ClassEnrollmentMinAggregateOutputType | null
    _max: ClassEnrollmentMaxAggregateOutputType | null
  }

  type GetClassEnrollmentGroupByPayload<T extends ClassEnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassEnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassEnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassEnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], ClassEnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type ClassEnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    courseId?: boolean
    gradeStatus?: boolean
    letterGrade?: boolean
    semesterEnrollmentId?: boolean
    semesterEnrollment?: boolean | SemesterEnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classEnrollment"]>

  export type ClassEnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    courseId?: boolean
    gradeStatus?: boolean
    letterGrade?: boolean
    semesterEnrollmentId?: boolean
    semesterEnrollment?: boolean | SemesterEnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classEnrollment"]>

  export type ClassEnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    courseId?: boolean
    gradeStatus?: boolean
    letterGrade?: boolean
    semesterEnrollmentId?: boolean
    semesterEnrollment?: boolean | SemesterEnrollmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classEnrollment"]>

  export type ClassEnrollmentSelectScalar = {
    id?: boolean
    classId?: boolean
    courseId?: boolean
    gradeStatus?: boolean
    letterGrade?: boolean
    semesterEnrollmentId?: boolean
  }

  export type ClassEnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "courseId" | "gradeStatus" | "letterGrade" | "semesterEnrollmentId", ExtArgs["result"]["classEnrollment"]>
  export type ClassEnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    semesterEnrollment?: boolean | SemesterEnrollmentDefaultArgs<ExtArgs>
  }
  export type ClassEnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    semesterEnrollment?: boolean | SemesterEnrollmentDefaultArgs<ExtArgs>
  }
  export type ClassEnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    semesterEnrollment?: boolean | SemesterEnrollmentDefaultArgs<ExtArgs>
  }

  export type $ClassEnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassEnrollment"
    objects: {
      semesterEnrollment: Prisma.$SemesterEnrollmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classId: string
      courseId: string
      gradeStatus: string
      letterGrade: string
      semesterEnrollmentId: number
    }, ExtArgs["result"]["classEnrollment"]>
    composites: {}
  }

  type ClassEnrollmentGetPayload<S extends boolean | null | undefined | ClassEnrollmentDefaultArgs> = $Result.GetResult<Prisma.$ClassEnrollmentPayload, S>

  type ClassEnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassEnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassEnrollmentCountAggregateInputType | true
    }

  export interface ClassEnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassEnrollment'], meta: { name: 'ClassEnrollment' } }
    /**
     * Find zero or one ClassEnrollment that matches the filter.
     * @param {ClassEnrollmentFindUniqueArgs} args - Arguments to find a ClassEnrollment
     * @example
     * // Get one ClassEnrollment
     * const classEnrollment = await prisma.classEnrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassEnrollmentFindUniqueArgs>(args: SelectSubset<T, ClassEnrollmentFindUniqueArgs<ExtArgs>>): Prisma__ClassEnrollmentClient<$Result.GetResult<Prisma.$ClassEnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassEnrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassEnrollmentFindUniqueOrThrowArgs} args - Arguments to find a ClassEnrollment
     * @example
     * // Get one ClassEnrollment
     * const classEnrollment = await prisma.classEnrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassEnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassEnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassEnrollmentClient<$Result.GetResult<Prisma.$ClassEnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassEnrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassEnrollmentFindFirstArgs} args - Arguments to find a ClassEnrollment
     * @example
     * // Get one ClassEnrollment
     * const classEnrollment = await prisma.classEnrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassEnrollmentFindFirstArgs>(args?: SelectSubset<T, ClassEnrollmentFindFirstArgs<ExtArgs>>): Prisma__ClassEnrollmentClient<$Result.GetResult<Prisma.$ClassEnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassEnrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassEnrollmentFindFirstOrThrowArgs} args - Arguments to find a ClassEnrollment
     * @example
     * // Get one ClassEnrollment
     * const classEnrollment = await prisma.classEnrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassEnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassEnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassEnrollmentClient<$Result.GetResult<Prisma.$ClassEnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassEnrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassEnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassEnrollments
     * const classEnrollments = await prisma.classEnrollment.findMany()
     * 
     * // Get first 10 ClassEnrollments
     * const classEnrollments = await prisma.classEnrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classEnrollmentWithIdOnly = await prisma.classEnrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassEnrollmentFindManyArgs>(args?: SelectSubset<T, ClassEnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassEnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassEnrollment.
     * @param {ClassEnrollmentCreateArgs} args - Arguments to create a ClassEnrollment.
     * @example
     * // Create one ClassEnrollment
     * const ClassEnrollment = await prisma.classEnrollment.create({
     *   data: {
     *     // ... data to create a ClassEnrollment
     *   }
     * })
     * 
     */
    create<T extends ClassEnrollmentCreateArgs>(args: SelectSubset<T, ClassEnrollmentCreateArgs<ExtArgs>>): Prisma__ClassEnrollmentClient<$Result.GetResult<Prisma.$ClassEnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassEnrollments.
     * @param {ClassEnrollmentCreateManyArgs} args - Arguments to create many ClassEnrollments.
     * @example
     * // Create many ClassEnrollments
     * const classEnrollment = await prisma.classEnrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassEnrollmentCreateManyArgs>(args?: SelectSubset<T, ClassEnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassEnrollments and returns the data saved in the database.
     * @param {ClassEnrollmentCreateManyAndReturnArgs} args - Arguments to create many ClassEnrollments.
     * @example
     * // Create many ClassEnrollments
     * const classEnrollment = await prisma.classEnrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassEnrollments and only return the `id`
     * const classEnrollmentWithIdOnly = await prisma.classEnrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassEnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassEnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassEnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassEnrollment.
     * @param {ClassEnrollmentDeleteArgs} args - Arguments to delete one ClassEnrollment.
     * @example
     * // Delete one ClassEnrollment
     * const ClassEnrollment = await prisma.classEnrollment.delete({
     *   where: {
     *     // ... filter to delete one ClassEnrollment
     *   }
     * })
     * 
     */
    delete<T extends ClassEnrollmentDeleteArgs>(args: SelectSubset<T, ClassEnrollmentDeleteArgs<ExtArgs>>): Prisma__ClassEnrollmentClient<$Result.GetResult<Prisma.$ClassEnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassEnrollment.
     * @param {ClassEnrollmentUpdateArgs} args - Arguments to update one ClassEnrollment.
     * @example
     * // Update one ClassEnrollment
     * const classEnrollment = await prisma.classEnrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassEnrollmentUpdateArgs>(args: SelectSubset<T, ClassEnrollmentUpdateArgs<ExtArgs>>): Prisma__ClassEnrollmentClient<$Result.GetResult<Prisma.$ClassEnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassEnrollments.
     * @param {ClassEnrollmentDeleteManyArgs} args - Arguments to filter ClassEnrollments to delete.
     * @example
     * // Delete a few ClassEnrollments
     * const { count } = await prisma.classEnrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassEnrollmentDeleteManyArgs>(args?: SelectSubset<T, ClassEnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassEnrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassEnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassEnrollments
     * const classEnrollment = await prisma.classEnrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassEnrollmentUpdateManyArgs>(args: SelectSubset<T, ClassEnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassEnrollments and returns the data updated in the database.
     * @param {ClassEnrollmentUpdateManyAndReturnArgs} args - Arguments to update many ClassEnrollments.
     * @example
     * // Update many ClassEnrollments
     * const classEnrollment = await prisma.classEnrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassEnrollments and only return the `id`
     * const classEnrollmentWithIdOnly = await prisma.classEnrollment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassEnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassEnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassEnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassEnrollment.
     * @param {ClassEnrollmentUpsertArgs} args - Arguments to update or create a ClassEnrollment.
     * @example
     * // Update or create a ClassEnrollment
     * const classEnrollment = await prisma.classEnrollment.upsert({
     *   create: {
     *     // ... data to create a ClassEnrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassEnrollment we want to update
     *   }
     * })
     */
    upsert<T extends ClassEnrollmentUpsertArgs>(args: SelectSubset<T, ClassEnrollmentUpsertArgs<ExtArgs>>): Prisma__ClassEnrollmentClient<$Result.GetResult<Prisma.$ClassEnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassEnrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassEnrollmentCountArgs} args - Arguments to filter ClassEnrollments to count.
     * @example
     * // Count the number of ClassEnrollments
     * const count = await prisma.classEnrollment.count({
     *   where: {
     *     // ... the filter for the ClassEnrollments we want to count
     *   }
     * })
    **/
    count<T extends ClassEnrollmentCountArgs>(
      args?: Subset<T, ClassEnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassEnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassEnrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassEnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassEnrollmentAggregateArgs>(args: Subset<T, ClassEnrollmentAggregateArgs>): Prisma.PrismaPromise<GetClassEnrollmentAggregateType<T>>

    /**
     * Group by ClassEnrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassEnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassEnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassEnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: ClassEnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassEnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassEnrollment model
   */
  readonly fields: ClassEnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassEnrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassEnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    semesterEnrollment<T extends SemesterEnrollmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SemesterEnrollmentDefaultArgs<ExtArgs>>): Prisma__SemesterEnrollmentClient<$Result.GetResult<Prisma.$SemesterEnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassEnrollment model
   */
  interface ClassEnrollmentFieldRefs {
    readonly id: FieldRef<"ClassEnrollment", 'Int'>
    readonly classId: FieldRef<"ClassEnrollment", 'String'>
    readonly courseId: FieldRef<"ClassEnrollment", 'String'>
    readonly gradeStatus: FieldRef<"ClassEnrollment", 'String'>
    readonly letterGrade: FieldRef<"ClassEnrollment", 'String'>
    readonly semesterEnrollmentId: FieldRef<"ClassEnrollment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClassEnrollment findUnique
   */
  export type ClassEnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassEnrollment
     */
    select?: ClassEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassEnrollment
     */
    omit?: ClassEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which ClassEnrollment to fetch.
     */
    where: ClassEnrollmentWhereUniqueInput
  }

  /**
   * ClassEnrollment findUniqueOrThrow
   */
  export type ClassEnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassEnrollment
     */
    select?: ClassEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassEnrollment
     */
    omit?: ClassEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which ClassEnrollment to fetch.
     */
    where: ClassEnrollmentWhereUniqueInput
  }

  /**
   * ClassEnrollment findFirst
   */
  export type ClassEnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassEnrollment
     */
    select?: ClassEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassEnrollment
     */
    omit?: ClassEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which ClassEnrollment to fetch.
     */
    where?: ClassEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassEnrollments to fetch.
     */
    orderBy?: ClassEnrollmentOrderByWithRelationInput | ClassEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassEnrollments.
     */
    cursor?: ClassEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassEnrollments.
     */
    distinct?: ClassEnrollmentScalarFieldEnum | ClassEnrollmentScalarFieldEnum[]
  }

  /**
   * ClassEnrollment findFirstOrThrow
   */
  export type ClassEnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassEnrollment
     */
    select?: ClassEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassEnrollment
     */
    omit?: ClassEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which ClassEnrollment to fetch.
     */
    where?: ClassEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassEnrollments to fetch.
     */
    orderBy?: ClassEnrollmentOrderByWithRelationInput | ClassEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassEnrollments.
     */
    cursor?: ClassEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassEnrollments.
     */
    distinct?: ClassEnrollmentScalarFieldEnum | ClassEnrollmentScalarFieldEnum[]
  }

  /**
   * ClassEnrollment findMany
   */
  export type ClassEnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassEnrollment
     */
    select?: ClassEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassEnrollment
     */
    omit?: ClassEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassEnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which ClassEnrollments to fetch.
     */
    where?: ClassEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassEnrollments to fetch.
     */
    orderBy?: ClassEnrollmentOrderByWithRelationInput | ClassEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassEnrollments.
     */
    cursor?: ClassEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassEnrollments.
     */
    skip?: number
    distinct?: ClassEnrollmentScalarFieldEnum | ClassEnrollmentScalarFieldEnum[]
  }

  /**
   * ClassEnrollment create
   */
  export type ClassEnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassEnrollment
     */
    select?: ClassEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassEnrollment
     */
    omit?: ClassEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassEnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassEnrollment.
     */
    data: XOR<ClassEnrollmentCreateInput, ClassEnrollmentUncheckedCreateInput>
  }

  /**
   * ClassEnrollment createMany
   */
  export type ClassEnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassEnrollments.
     */
    data: ClassEnrollmentCreateManyInput | ClassEnrollmentCreateManyInput[]
  }

  /**
   * ClassEnrollment createManyAndReturn
   */
  export type ClassEnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassEnrollment
     */
    select?: ClassEnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassEnrollment
     */
    omit?: ClassEnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many ClassEnrollments.
     */
    data: ClassEnrollmentCreateManyInput | ClassEnrollmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassEnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassEnrollment update
   */
  export type ClassEnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassEnrollment
     */
    select?: ClassEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassEnrollment
     */
    omit?: ClassEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassEnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassEnrollment.
     */
    data: XOR<ClassEnrollmentUpdateInput, ClassEnrollmentUncheckedUpdateInput>
    /**
     * Choose, which ClassEnrollment to update.
     */
    where: ClassEnrollmentWhereUniqueInput
  }

  /**
   * ClassEnrollment updateMany
   */
  export type ClassEnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassEnrollments.
     */
    data: XOR<ClassEnrollmentUpdateManyMutationInput, ClassEnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which ClassEnrollments to update
     */
    where?: ClassEnrollmentWhereInput
    /**
     * Limit how many ClassEnrollments to update.
     */
    limit?: number
  }

  /**
   * ClassEnrollment updateManyAndReturn
   */
  export type ClassEnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassEnrollment
     */
    select?: ClassEnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassEnrollment
     */
    omit?: ClassEnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update ClassEnrollments.
     */
    data: XOR<ClassEnrollmentUpdateManyMutationInput, ClassEnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which ClassEnrollments to update
     */
    where?: ClassEnrollmentWhereInput
    /**
     * Limit how many ClassEnrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassEnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassEnrollment upsert
   */
  export type ClassEnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassEnrollment
     */
    select?: ClassEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassEnrollment
     */
    omit?: ClassEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassEnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassEnrollment to update in case it exists.
     */
    where: ClassEnrollmentWhereUniqueInput
    /**
     * In case the ClassEnrollment found by the `where` argument doesn't exist, create a new ClassEnrollment with this data.
     */
    create: XOR<ClassEnrollmentCreateInput, ClassEnrollmentUncheckedCreateInput>
    /**
     * In case the ClassEnrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassEnrollmentUpdateInput, ClassEnrollmentUncheckedUpdateInput>
  }

  /**
   * ClassEnrollment delete
   */
  export type ClassEnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassEnrollment
     */
    select?: ClassEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassEnrollment
     */
    omit?: ClassEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassEnrollmentInclude<ExtArgs> | null
    /**
     * Filter which ClassEnrollment to delete.
     */
    where: ClassEnrollmentWhereUniqueInput
  }

  /**
   * ClassEnrollment deleteMany
   */
  export type ClassEnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassEnrollments to delete
     */
    where?: ClassEnrollmentWhereInput
    /**
     * Limit how many ClassEnrollments to delete.
     */
    limit?: number
  }

  /**
   * ClassEnrollment without action
   */
  export type ClassEnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassEnrollment
     */
    select?: ClassEnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassEnrollment
     */
    omit?: ClassEnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassEnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassAvgAggregateOutputType = {
    enrollmentActual: number | null
    enrollmentMaximum: number | null
  }

  export type ClassSumAggregateOutputType = {
    enrollmentActual: number | null
    enrollmentMaximum: number | null
  }

  export type ClassMinAggregateOutputType = {
    classId: string | null
    courseId: string | null
    semester: string | null
    instructionalMethod: string | null
    campus: string | null
    enrollmentActual: number | null
    enrollmentMaximum: number | null
    classStatus: string | null
  }

  export type ClassMaxAggregateOutputType = {
    classId: string | null
    courseId: string | null
    semester: string | null
    instructionalMethod: string | null
    campus: string | null
    enrollmentActual: number | null
    enrollmentMaximum: number | null
    classStatus: string | null
  }

  export type ClassCountAggregateOutputType = {
    classId: number
    courseId: number
    semester: number
    instructionalMethod: number
    campus: number
    enrollmentActual: number
    enrollmentMaximum: number
    classStatus: number
    _all: number
  }


  export type ClassAvgAggregateInputType = {
    enrollmentActual?: true
    enrollmentMaximum?: true
  }

  export type ClassSumAggregateInputType = {
    enrollmentActual?: true
    enrollmentMaximum?: true
  }

  export type ClassMinAggregateInputType = {
    classId?: true
    courseId?: true
    semester?: true
    instructionalMethod?: true
    campus?: true
    enrollmentActual?: true
    enrollmentMaximum?: true
    classStatus?: true
  }

  export type ClassMaxAggregateInputType = {
    classId?: true
    courseId?: true
    semester?: true
    instructionalMethod?: true
    campus?: true
    enrollmentActual?: true
    enrollmentMaximum?: true
    classStatus?: true
  }

  export type ClassCountAggregateInputType = {
    classId?: true
    courseId?: true
    semester?: true
    instructionalMethod?: true
    campus?: true
    enrollmentActual?: true
    enrollmentMaximum?: true
    classStatus?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _avg?: ClassAvgAggregateInputType
    _sum?: ClassSumAggregateInputType
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    classId: string
    courseId: string
    semester: string
    instructionalMethod: string
    campus: string
    enrollmentActual: number
    enrollmentMaximum: number
    classStatus: string
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    classId?: boolean
    courseId?: boolean
    semester?: boolean
    instructionalMethod?: boolean
    campus?: boolean
    enrollmentActual?: boolean
    enrollmentMaximum?: boolean
    classStatus?: boolean
    instructors?: boolean | Class$instructorsArgs<ExtArgs>
    gradedByInstructors?: boolean | Class$gradedByInstructorsArgs<ExtArgs>
    schedule?: boolean | Class$scheduleArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    classId?: boolean
    courseId?: boolean
    semester?: boolean
    instructionalMethod?: boolean
    campus?: boolean
    enrollmentActual?: boolean
    enrollmentMaximum?: boolean
    classStatus?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    classId?: boolean
    courseId?: boolean
    semester?: boolean
    instructionalMethod?: boolean
    campus?: boolean
    enrollmentActual?: boolean
    enrollmentMaximum?: boolean
    classStatus?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    classId?: boolean
    courseId?: boolean
    semester?: boolean
    instructionalMethod?: boolean
    campus?: boolean
    enrollmentActual?: boolean
    enrollmentMaximum?: boolean
    classStatus?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"classId" | "courseId" | "semester" | "instructionalMethod" | "campus" | "enrollmentActual" | "enrollmentMaximum" | "classStatus", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructors?: boolean | Class$instructorsArgs<ExtArgs>
    gradedByInstructors?: boolean | Class$gradedByInstructorsArgs<ExtArgs>
    schedule?: boolean | Class$scheduleArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      instructors: Prisma.$InstructorPayload<ExtArgs>[]
      gradedByInstructors: Prisma.$InstructorPayload<ExtArgs>[]
      schedule: Prisma.$SchedulePayload<ExtArgs> | null
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      classId: string
      courseId: string
      semester: string
      instructionalMethod: string
      campus: string
      enrollmentActual: number
      enrollmentMaximum: number
      classStatus: string
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `classId`
     * const classWithClassIdOnly = await prisma.class.findMany({ select: { classId: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `classId`
     * const classWithClassIdOnly = await prisma.class.createManyAndReturn({
     *   select: { classId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `classId`
     * const classWithClassIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { classId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructors<T extends Class$instructorsArgs<ExtArgs> = {}>(args?: Subset<T, Class$instructorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gradedByInstructors<T extends Class$gradedByInstructorsArgs<ExtArgs> = {}>(args?: Subset<T, Class$gradedByInstructorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedule<T extends Class$scheduleArgs<ExtArgs> = {}>(args?: Subset<T, Class$scheduleArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly classId: FieldRef<"Class", 'String'>
    readonly courseId: FieldRef<"Class", 'String'>
    readonly semester: FieldRef<"Class", 'String'>
    readonly instructionalMethod: FieldRef<"Class", 'String'>
    readonly campus: FieldRef<"Class", 'String'>
    readonly enrollmentActual: FieldRef<"Class", 'Int'>
    readonly enrollmentMaximum: FieldRef<"Class", 'Int'>
    readonly classStatus: FieldRef<"Class", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.instructors
   */
  export type Class$instructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    where?: InstructorWhereInput
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    cursor?: InstructorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Class.gradedByInstructors
   */
  export type Class$gradedByInstructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    where?: InstructorWhereInput
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    cursor?: InstructorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Class.schedule
   */
  export type Class$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    scheduleType: string | null
    startTime: string | null
    endTime: string | null
    classId: string | null
  }

  export type ScheduleMaxAggregateOutputType = {
    scheduleType: string | null
    startTime: string | null
    endTime: string | null
    classId: string | null
  }

  export type ScheduleCountAggregateOutputType = {
    scheduleType: number
    startTime: number
    endTime: number
    classId: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    scheduleType?: true
    startTime?: true
    endTime?: true
    classId?: true
  }

  export type ScheduleMaxAggregateInputType = {
    scheduleType?: true
    startTime?: true
    endTime?: true
    classId?: true
  }

  export type ScheduleCountAggregateInputType = {
    scheduleType?: true
    startTime?: true
    endTime?: true
    classId?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    scheduleType: string
    startTime: string
    endTime: string
    classId: string
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleType?: boolean
    startTime?: boolean
    endTime?: boolean
    classId?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleType?: boolean
    startTime?: boolean
    endTime?: boolean
    classId?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scheduleType?: boolean
    startTime?: boolean
    endTime?: boolean
    classId?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    scheduleType?: boolean
    startTime?: boolean
    endTime?: boolean
    classId?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scheduleType" | "startTime" | "endTime" | "classId", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      scheduleType: string
      startTime: string
      endTime: string
      classId: string
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `scheduleType`
     * const scheduleWithScheduleTypeOnly = await prisma.schedule.findMany({ select: { scheduleType: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `scheduleType`
     * const scheduleWithScheduleTypeOnly = await prisma.schedule.createManyAndReturn({
     *   select: { scheduleType: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `scheduleType`
     * const scheduleWithScheduleTypeOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { scheduleType: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly scheduleType: FieldRef<"Schedule", 'String'>
    readonly startTime: FieldRef<"Schedule", 'String'>
    readonly endTime: FieldRef<"Schedule", 'String'>
    readonly classId: FieldRef<"Schedule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    creditHours: number | null
  }

  export type CourseSumAggregateOutputType = {
    creditHours: number | null
  }

  export type CourseMinAggregateOutputType = {
    courseId: string | null
    courseName: string | null
    creditHours: number | null
    subject: string | null
    courseNumber: string | null
    description: string | null
    courseImage: string | null
  }

  export type CourseMaxAggregateOutputType = {
    courseId: string | null
    courseName: string | null
    creditHours: number | null
    subject: string | null
    courseNumber: string | null
    description: string | null
    courseImage: string | null
  }

  export type CourseCountAggregateOutputType = {
    courseId: number
    courseName: number
    creditHours: number
    subject: number
    courseNumber: number
    description: number
    courseImage: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    creditHours?: true
  }

  export type CourseSumAggregateInputType = {
    creditHours?: true
  }

  export type CourseMinAggregateInputType = {
    courseId?: true
    courseName?: true
    creditHours?: true
    subject?: true
    courseNumber?: true
    description?: true
    courseImage?: true
  }

  export type CourseMaxAggregateInputType = {
    courseId?: true
    courseName?: true
    creditHours?: true
    subject?: true
    courseNumber?: true
    description?: true
    courseImage?: true
  }

  export type CourseCountAggregateInputType = {
    courseId?: true
    courseName?: true
    creditHours?: true
    subject?: true
    courseNumber?: true
    description?: true
    courseImage?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    courseId: string
    courseName: string
    creditHours: number
    subject: string
    courseNumber: string
    description: string
    courseImage: string
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    courseName?: boolean
    creditHours?: boolean
    subject?: boolean
    courseNumber?: boolean
    description?: boolean
    courseImage?: boolean
    prerequisites?: boolean | Course$prerequisitesArgs<ExtArgs>
    majorsOffered?: boolean | Course$majorsOfferedArgs<ExtArgs>
    currentClasses?: boolean | Course$currentClassesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    courseName?: boolean
    creditHours?: boolean
    subject?: boolean
    courseNumber?: boolean
    description?: boolean
    courseImage?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    courseName?: boolean
    creditHours?: boolean
    subject?: boolean
    courseNumber?: boolean
    description?: boolean
    courseImage?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    courseId?: boolean
    courseName?: boolean
    creditHours?: boolean
    subject?: boolean
    courseNumber?: boolean
    description?: boolean
    courseImage?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"courseId" | "courseName" | "creditHours" | "subject" | "courseNumber" | "description" | "courseImage", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prerequisites?: boolean | Course$prerequisitesArgs<ExtArgs>
    majorsOffered?: boolean | Course$majorsOfferedArgs<ExtArgs>
    currentClasses?: boolean | Course$currentClassesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      prerequisites: Prisma.$PrerequisitePayload<ExtArgs>[]
      majorsOffered: Prisma.$MajorPayload<ExtArgs>[]
      currentClasses: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      courseId: string
      courseName: string
      creditHours: number
      subject: string
      courseNumber: string
      description: string
      courseImage: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `courseId`
     * const courseWithCourseIdOnly = await prisma.course.findMany({ select: { courseId: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `courseId`
     * const courseWithCourseIdOnly = await prisma.course.createManyAndReturn({
     *   select: { courseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `courseId`
     * const courseWithCourseIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { courseId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prerequisites<T extends Course$prerequisitesArgs<ExtArgs> = {}>(args?: Subset<T, Course$prerequisitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    majorsOffered<T extends Course$majorsOfferedArgs<ExtArgs> = {}>(args?: Subset<T, Course$majorsOfferedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    currentClasses<T extends Course$currentClassesArgs<ExtArgs> = {}>(args?: Subset<T, Course$currentClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly courseId: FieldRef<"Course", 'String'>
    readonly courseName: FieldRef<"Course", 'String'>
    readonly creditHours: FieldRef<"Course", 'Int'>
    readonly subject: FieldRef<"Course", 'String'>
    readonly courseNumber: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly courseImage: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.prerequisites
   */
  export type Course$prerequisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    where?: PrerequisiteWhereInput
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    cursor?: PrerequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Course.majorsOffered
   */
  export type Course$majorsOfferedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    where?: MajorWhereInput
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    cursor?: MajorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Course.currentClasses
   */
  export type Course$currentClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Prerequisite
   */

  export type AggregatePrerequisite = {
    _count: PrerequisiteCountAggregateOutputType | null
    _avg: PrerequisiteAvgAggregateOutputType | null
    _sum: PrerequisiteSumAggregateOutputType | null
    _min: PrerequisiteMinAggregateOutputType | null
    _max: PrerequisiteMaxAggregateOutputType | null
  }

  export type PrerequisiteAvgAggregateOutputType = {
    id: number | null
  }

  export type PrerequisiteSumAggregateOutputType = {
    id: number | null
  }

  export type PrerequisiteMinAggregateOutputType = {
    id: number | null
    courseId: string | null
    minGrade: string | null
  }

  export type PrerequisiteMaxAggregateOutputType = {
    id: number | null
    courseId: string | null
    minGrade: string | null
  }

  export type PrerequisiteCountAggregateOutputType = {
    id: number
    courseId: number
    minGrade: number
    _all: number
  }


  export type PrerequisiteAvgAggregateInputType = {
    id?: true
  }

  export type PrerequisiteSumAggregateInputType = {
    id?: true
  }

  export type PrerequisiteMinAggregateInputType = {
    id?: true
    courseId?: true
    minGrade?: true
  }

  export type PrerequisiteMaxAggregateInputType = {
    id?: true
    courseId?: true
    minGrade?: true
  }

  export type PrerequisiteCountAggregateInputType = {
    id?: true
    courseId?: true
    minGrade?: true
    _all?: true
  }

  export type PrerequisiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prerequisite to aggregate.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prerequisites
    **/
    _count?: true | PrerequisiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrerequisiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrerequisiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrerequisiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrerequisiteMaxAggregateInputType
  }

  export type GetPrerequisiteAggregateType<T extends PrerequisiteAggregateArgs> = {
        [P in keyof T & keyof AggregatePrerequisite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrerequisite[P]>
      : GetScalarType<T[P], AggregatePrerequisite[P]>
  }




  export type PrerequisiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrerequisiteWhereInput
    orderBy?: PrerequisiteOrderByWithAggregationInput | PrerequisiteOrderByWithAggregationInput[]
    by: PrerequisiteScalarFieldEnum[] | PrerequisiteScalarFieldEnum
    having?: PrerequisiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrerequisiteCountAggregateInputType | true
    _avg?: PrerequisiteAvgAggregateInputType
    _sum?: PrerequisiteSumAggregateInputType
    _min?: PrerequisiteMinAggregateInputType
    _max?: PrerequisiteMaxAggregateInputType
  }

  export type PrerequisiteGroupByOutputType = {
    id: number
    courseId: string
    minGrade: string
    _count: PrerequisiteCountAggregateOutputType | null
    _avg: PrerequisiteAvgAggregateOutputType | null
    _sum: PrerequisiteSumAggregateOutputType | null
    _min: PrerequisiteMinAggregateOutputType | null
    _max: PrerequisiteMaxAggregateOutputType | null
  }

  type GetPrerequisiteGroupByPayload<T extends PrerequisiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrerequisiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrerequisiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrerequisiteGroupByOutputType[P]>
            : GetScalarType<T[P], PrerequisiteGroupByOutputType[P]>
        }
      >
    >


  export type PrerequisiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    minGrade?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prerequisite"]>

  export type PrerequisiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    minGrade?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prerequisite"]>

  export type PrerequisiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    minGrade?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prerequisite"]>

  export type PrerequisiteSelectScalar = {
    id?: boolean
    courseId?: boolean
    minGrade?: boolean
  }

  export type PrerequisiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "minGrade", ExtArgs["result"]["prerequisite"]>
  export type PrerequisiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type PrerequisiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type PrerequisiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $PrerequisitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prerequisite"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: string
      minGrade: string
    }, ExtArgs["result"]["prerequisite"]>
    composites: {}
  }

  type PrerequisiteGetPayload<S extends boolean | null | undefined | PrerequisiteDefaultArgs> = $Result.GetResult<Prisma.$PrerequisitePayload, S>

  type PrerequisiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrerequisiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrerequisiteCountAggregateInputType | true
    }

  export interface PrerequisiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prerequisite'], meta: { name: 'Prerequisite' } }
    /**
     * Find zero or one Prerequisite that matches the filter.
     * @param {PrerequisiteFindUniqueArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrerequisiteFindUniqueArgs>(args: SelectSubset<T, PrerequisiteFindUniqueArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prerequisite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrerequisiteFindUniqueOrThrowArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrerequisiteFindUniqueOrThrowArgs>(args: SelectSubset<T, PrerequisiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prerequisite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindFirstArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrerequisiteFindFirstArgs>(args?: SelectSubset<T, PrerequisiteFindFirstArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prerequisite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindFirstOrThrowArgs} args - Arguments to find a Prerequisite
     * @example
     * // Get one Prerequisite
     * const prerequisite = await prisma.prerequisite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrerequisiteFindFirstOrThrowArgs>(args?: SelectSubset<T, PrerequisiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prerequisites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prerequisites
     * const prerequisites = await prisma.prerequisite.findMany()
     * 
     * // Get first 10 Prerequisites
     * const prerequisites = await prisma.prerequisite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prerequisiteWithIdOnly = await prisma.prerequisite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrerequisiteFindManyArgs>(args?: SelectSubset<T, PrerequisiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prerequisite.
     * @param {PrerequisiteCreateArgs} args - Arguments to create a Prerequisite.
     * @example
     * // Create one Prerequisite
     * const Prerequisite = await prisma.prerequisite.create({
     *   data: {
     *     // ... data to create a Prerequisite
     *   }
     * })
     * 
     */
    create<T extends PrerequisiteCreateArgs>(args: SelectSubset<T, PrerequisiteCreateArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prerequisites.
     * @param {PrerequisiteCreateManyArgs} args - Arguments to create many Prerequisites.
     * @example
     * // Create many Prerequisites
     * const prerequisite = await prisma.prerequisite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrerequisiteCreateManyArgs>(args?: SelectSubset<T, PrerequisiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prerequisites and returns the data saved in the database.
     * @param {PrerequisiteCreateManyAndReturnArgs} args - Arguments to create many Prerequisites.
     * @example
     * // Create many Prerequisites
     * const prerequisite = await prisma.prerequisite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prerequisites and only return the `id`
     * const prerequisiteWithIdOnly = await prisma.prerequisite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrerequisiteCreateManyAndReturnArgs>(args?: SelectSubset<T, PrerequisiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prerequisite.
     * @param {PrerequisiteDeleteArgs} args - Arguments to delete one Prerequisite.
     * @example
     * // Delete one Prerequisite
     * const Prerequisite = await prisma.prerequisite.delete({
     *   where: {
     *     // ... filter to delete one Prerequisite
     *   }
     * })
     * 
     */
    delete<T extends PrerequisiteDeleteArgs>(args: SelectSubset<T, PrerequisiteDeleteArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prerequisite.
     * @param {PrerequisiteUpdateArgs} args - Arguments to update one Prerequisite.
     * @example
     * // Update one Prerequisite
     * const prerequisite = await prisma.prerequisite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrerequisiteUpdateArgs>(args: SelectSubset<T, PrerequisiteUpdateArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prerequisites.
     * @param {PrerequisiteDeleteManyArgs} args - Arguments to filter Prerequisites to delete.
     * @example
     * // Delete a few Prerequisites
     * const { count } = await prisma.prerequisite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrerequisiteDeleteManyArgs>(args?: SelectSubset<T, PrerequisiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prerequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prerequisites
     * const prerequisite = await prisma.prerequisite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrerequisiteUpdateManyArgs>(args: SelectSubset<T, PrerequisiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prerequisites and returns the data updated in the database.
     * @param {PrerequisiteUpdateManyAndReturnArgs} args - Arguments to update many Prerequisites.
     * @example
     * // Update many Prerequisites
     * const prerequisite = await prisma.prerequisite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prerequisites and only return the `id`
     * const prerequisiteWithIdOnly = await prisma.prerequisite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrerequisiteUpdateManyAndReturnArgs>(args: SelectSubset<T, PrerequisiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prerequisite.
     * @param {PrerequisiteUpsertArgs} args - Arguments to update or create a Prerequisite.
     * @example
     * // Update or create a Prerequisite
     * const prerequisite = await prisma.prerequisite.upsert({
     *   create: {
     *     // ... data to create a Prerequisite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prerequisite we want to update
     *   }
     * })
     */
    upsert<T extends PrerequisiteUpsertArgs>(args: SelectSubset<T, PrerequisiteUpsertArgs<ExtArgs>>): Prisma__PrerequisiteClient<$Result.GetResult<Prisma.$PrerequisitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prerequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteCountArgs} args - Arguments to filter Prerequisites to count.
     * @example
     * // Count the number of Prerequisites
     * const count = await prisma.prerequisite.count({
     *   where: {
     *     // ... the filter for the Prerequisites we want to count
     *   }
     * })
    **/
    count<T extends PrerequisiteCountArgs>(
      args?: Subset<T, PrerequisiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrerequisiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prerequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrerequisiteAggregateArgs>(args: Subset<T, PrerequisiteAggregateArgs>): Prisma.PrismaPromise<GetPrerequisiteAggregateType<T>>

    /**
     * Group by Prerequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrerequisiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrerequisiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrerequisiteGroupByArgs['orderBy'] }
        : { orderBy?: PrerequisiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrerequisiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrerequisiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prerequisite model
   */
  readonly fields: PrerequisiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prerequisite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrerequisiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prerequisite model
   */
  interface PrerequisiteFieldRefs {
    readonly id: FieldRef<"Prerequisite", 'Int'>
    readonly courseId: FieldRef<"Prerequisite", 'String'>
    readonly minGrade: FieldRef<"Prerequisite", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prerequisite findUnique
   */
  export type PrerequisiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite findUniqueOrThrow
   */
  export type PrerequisiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite findFirst
   */
  export type PrerequisiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prerequisites.
     */
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite findFirstOrThrow
   */
  export type PrerequisiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisite to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prerequisites.
     */
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite findMany
   */
  export type PrerequisiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter, which Prerequisites to fetch.
     */
    where?: PrerequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prerequisites to fetch.
     */
    orderBy?: PrerequisiteOrderByWithRelationInput | PrerequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prerequisites.
     */
    cursor?: PrerequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prerequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prerequisites.
     */
    skip?: number
    distinct?: PrerequisiteScalarFieldEnum | PrerequisiteScalarFieldEnum[]
  }

  /**
   * Prerequisite create
   */
  export type PrerequisiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Prerequisite.
     */
    data: XOR<PrerequisiteCreateInput, PrerequisiteUncheckedCreateInput>
  }

  /**
   * Prerequisite createMany
   */
  export type PrerequisiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prerequisites.
     */
    data: PrerequisiteCreateManyInput | PrerequisiteCreateManyInput[]
  }

  /**
   * Prerequisite createManyAndReturn
   */
  export type PrerequisiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * The data used to create many Prerequisites.
     */
    data: PrerequisiteCreateManyInput | PrerequisiteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prerequisite update
   */
  export type PrerequisiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Prerequisite.
     */
    data: XOR<PrerequisiteUpdateInput, PrerequisiteUncheckedUpdateInput>
    /**
     * Choose, which Prerequisite to update.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite updateMany
   */
  export type PrerequisiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prerequisites.
     */
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyInput>
    /**
     * Filter which Prerequisites to update
     */
    where?: PrerequisiteWhereInput
    /**
     * Limit how many Prerequisites to update.
     */
    limit?: number
  }

  /**
   * Prerequisite updateManyAndReturn
   */
  export type PrerequisiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * The data used to update Prerequisites.
     */
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyInput>
    /**
     * Filter which Prerequisites to update
     */
    where?: PrerequisiteWhereInput
    /**
     * Limit how many Prerequisites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prerequisite upsert
   */
  export type PrerequisiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Prerequisite to update in case it exists.
     */
    where: PrerequisiteWhereUniqueInput
    /**
     * In case the Prerequisite found by the `where` argument doesn't exist, create a new Prerequisite with this data.
     */
    create: XOR<PrerequisiteCreateInput, PrerequisiteUncheckedCreateInput>
    /**
     * In case the Prerequisite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrerequisiteUpdateInput, PrerequisiteUncheckedUpdateInput>
  }

  /**
   * Prerequisite delete
   */
  export type PrerequisiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
    /**
     * Filter which Prerequisite to delete.
     */
    where: PrerequisiteWhereUniqueInput
  }

  /**
   * Prerequisite deleteMany
   */
  export type PrerequisiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prerequisites to delete
     */
    where?: PrerequisiteWhereInput
    /**
     * Limit how many Prerequisites to delete.
     */
    limit?: number
  }

  /**
   * Prerequisite without action
   */
  export type PrerequisiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prerequisite
     */
    select?: PrerequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prerequisite
     */
    omit?: PrerequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrerequisiteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    password: 'password',
    role: 'role',
    themePreference: 'themePreference',
    userType: 'userType',
    gender: 'gender'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    studentId: 'studentId',
    email: 'email',
    college: 'college',
    department: 'department',
    majorIdField: 'majorIdField'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const InstructorScalarFieldEnum: {
    instructorId: 'instructorId',
    email: 'email',
    college: 'college',
    department: 'department',
    expertise: 'expertise'
  };

  export type InstructorScalarFieldEnum = (typeof InstructorScalarFieldEnum)[keyof typeof InstructorScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    adminId: 'adminId',
    email: 'email'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const MajorScalarFieldEnum: {
    majorId: 'majorId',
    majorName: 'majorName',
    college: 'college',
    department: 'department'
  };

  export type MajorScalarFieldEnum = (typeof MajorScalarFieldEnum)[keyof typeof MajorScalarFieldEnum]


  export const CompletedCourseScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    letterGrade: 'letterGrade',
    studentId: 'studentId'
  };

  export type CompletedCourseScalarFieldEnum = (typeof CompletedCourseScalarFieldEnum)[keyof typeof CompletedCourseScalarFieldEnum]


  export const SemesterEnrollmentScalarFieldEnum: {
    id: 'id',
    semester: 'semester',
    studentId: 'studentId'
  };

  export type SemesterEnrollmentScalarFieldEnum = (typeof SemesterEnrollmentScalarFieldEnum)[keyof typeof SemesterEnrollmentScalarFieldEnum]


  export const ClassEnrollmentScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    courseId: 'courseId',
    gradeStatus: 'gradeStatus',
    letterGrade: 'letterGrade',
    semesterEnrollmentId: 'semesterEnrollmentId'
  };

  export type ClassEnrollmentScalarFieldEnum = (typeof ClassEnrollmentScalarFieldEnum)[keyof typeof ClassEnrollmentScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    classId: 'classId',
    courseId: 'courseId',
    semester: 'semester',
    instructionalMethod: 'instructionalMethod',
    campus: 'campus',
    enrollmentActual: 'enrollmentActual',
    enrollmentMaximum: 'enrollmentMaximum',
    classStatus: 'classStatus'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    scheduleType: 'scheduleType',
    startTime: 'startTime',
    endTime: 'endTime',
    classId: 'classId'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    courseId: 'courseId',
    courseName: 'courseName',
    creditHours: 'creditHours',
    subject: 'subject',
    courseNumber: 'courseNumber',
    description: 'description',
    courseImage: 'courseImage'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const PrerequisiteScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    minGrade: 'minGrade'
  };

  export type PrerequisiteScalarFieldEnum = (typeof PrerequisiteScalarFieldEnum)[keyof typeof PrerequisiteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'ThemePreference'
   */
  export type EnumThemePreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ThemePreference'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    themePreference?: EnumThemePreferenceFilter<"User"> | $Enums.ThemePreference
    userType?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    themePreference?: SortOrder
    userType?: SortOrder
    gender?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    themePreference?: EnumThemePreferenceFilter<"User"> | $Enums.ThemePreference
    userType?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
  }, "email">

  export type UserOrderByWithAggregationInput = {
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    themePreference?: SortOrder
    userType?: SortOrder
    gender?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    themePreference?: EnumThemePreferenceWithAggregatesFilter<"User"> | $Enums.ThemePreference
    userType?: StringWithAggregatesFilter<"User"> | string
    gender?: StringWithAggregatesFilter<"User"> | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    studentId?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    college?: StringFilter<"Student"> | string
    department?: StringFilter<"Student"> | string
    majorIdField?: StringNullableFilter<"Student"> | string | null
    completedCourses?: CompletedCourseListRelationFilter
    semesterEnrollment?: SemesterEnrollmentListRelationFilter
    majorId?: XOR<MajorNullableScalarRelationFilter, MajorWhereInput> | null
  }

  export type StudentOrderByWithRelationInput = {
    studentId?: SortOrder
    email?: SortOrder
    college?: SortOrder
    department?: SortOrder
    majorIdField?: SortOrderInput | SortOrder
    completedCourses?: CompletedCourseOrderByRelationAggregateInput
    semesterEnrollment?: SemesterEnrollmentOrderByRelationAggregateInput
    majorId?: MajorOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    studentId?: string
    email?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    college?: StringFilter<"Student"> | string
    department?: StringFilter<"Student"> | string
    majorIdField?: StringNullableFilter<"Student"> | string | null
    completedCourses?: CompletedCourseListRelationFilter
    semesterEnrollment?: SemesterEnrollmentListRelationFilter
    majorId?: XOR<MajorNullableScalarRelationFilter, MajorWhereInput> | null
  }, "studentId" | "email">

  export type StudentOrderByWithAggregationInput = {
    studentId?: SortOrder
    email?: SortOrder
    college?: SortOrder
    department?: SortOrder
    majorIdField?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    studentId?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    college?: StringWithAggregatesFilter<"Student"> | string
    department?: StringWithAggregatesFilter<"Student"> | string
    majorIdField?: StringNullableWithAggregatesFilter<"Student"> | string | null
  }

  export type InstructorWhereInput = {
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    instructorId?: StringFilter<"Instructor"> | string
    email?: StringFilter<"Instructor"> | string
    college?: StringFilter<"Instructor"> | string
    department?: StringFilter<"Instructor"> | string
    expertise?: StringFilter<"Instructor"> | string
    teachingClasses?: ClassListRelationFilter
    gradedClasses?: ClassListRelationFilter
  }

  export type InstructorOrderByWithRelationInput = {
    instructorId?: SortOrder
    email?: SortOrder
    college?: SortOrder
    department?: SortOrder
    expertise?: SortOrder
    teachingClasses?: ClassOrderByRelationAggregateInput
    gradedClasses?: ClassOrderByRelationAggregateInput
  }

  export type InstructorWhereUniqueInput = Prisma.AtLeast<{
    instructorId?: string
    email?: string
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    college?: StringFilter<"Instructor"> | string
    department?: StringFilter<"Instructor"> | string
    expertise?: StringFilter<"Instructor"> | string
    teachingClasses?: ClassListRelationFilter
    gradedClasses?: ClassListRelationFilter
  }, "instructorId" | "email">

  export type InstructorOrderByWithAggregationInput = {
    instructorId?: SortOrder
    email?: SortOrder
    college?: SortOrder
    department?: SortOrder
    expertise?: SortOrder
    _count?: InstructorCountOrderByAggregateInput
    _max?: InstructorMaxOrderByAggregateInput
    _min?: InstructorMinOrderByAggregateInput
  }

  export type InstructorScalarWhereWithAggregatesInput = {
    AND?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    OR?: InstructorScalarWhereWithAggregatesInput[]
    NOT?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    instructorId?: StringWithAggregatesFilter<"Instructor"> | string
    email?: StringWithAggregatesFilter<"Instructor"> | string
    college?: StringWithAggregatesFilter<"Instructor"> | string
    department?: StringWithAggregatesFilter<"Instructor"> | string
    expertise?: StringWithAggregatesFilter<"Instructor"> | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    adminId?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    adminId?: SortOrder
    email?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    adminId?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
  }, "adminId" | "email">

  export type AdminOrderByWithAggregationInput = {
    adminId?: SortOrder
    email?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    adminId?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type MajorWhereInput = {
    AND?: MajorWhereInput | MajorWhereInput[]
    OR?: MajorWhereInput[]
    NOT?: MajorWhereInput | MajorWhereInput[]
    majorId?: StringFilter<"Major"> | string
    majorName?: StringFilter<"Major"> | string
    college?: StringFilter<"Major"> | string
    department?: StringFilter<"Major"> | string
    requiredCourses?: CourseListRelationFilter
    students?: StudentListRelationFilter
  }

  export type MajorOrderByWithRelationInput = {
    majorId?: SortOrder
    majorName?: SortOrder
    college?: SortOrder
    department?: SortOrder
    requiredCourses?: CourseOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type MajorWhereUniqueInput = Prisma.AtLeast<{
    majorId?: string
    AND?: MajorWhereInput | MajorWhereInput[]
    OR?: MajorWhereInput[]
    NOT?: MajorWhereInput | MajorWhereInput[]
    majorName?: StringFilter<"Major"> | string
    college?: StringFilter<"Major"> | string
    department?: StringFilter<"Major"> | string
    requiredCourses?: CourseListRelationFilter
    students?: StudentListRelationFilter
  }, "majorId">

  export type MajorOrderByWithAggregationInput = {
    majorId?: SortOrder
    majorName?: SortOrder
    college?: SortOrder
    department?: SortOrder
    _count?: MajorCountOrderByAggregateInput
    _max?: MajorMaxOrderByAggregateInput
    _min?: MajorMinOrderByAggregateInput
  }

  export type MajorScalarWhereWithAggregatesInput = {
    AND?: MajorScalarWhereWithAggregatesInput | MajorScalarWhereWithAggregatesInput[]
    OR?: MajorScalarWhereWithAggregatesInput[]
    NOT?: MajorScalarWhereWithAggregatesInput | MajorScalarWhereWithAggregatesInput[]
    majorId?: StringWithAggregatesFilter<"Major"> | string
    majorName?: StringWithAggregatesFilter<"Major"> | string
    college?: StringWithAggregatesFilter<"Major"> | string
    department?: StringWithAggregatesFilter<"Major"> | string
  }

  export type CompletedCourseWhereInput = {
    AND?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    OR?: CompletedCourseWhereInput[]
    NOT?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    id?: IntFilter<"CompletedCourse"> | number
    courseId?: StringFilter<"CompletedCourse"> | string
    letterGrade?: StringFilter<"CompletedCourse"> | string
    studentId?: StringFilter<"CompletedCourse"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type CompletedCourseOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    letterGrade?: SortOrder
    studentId?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type CompletedCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    OR?: CompletedCourseWhereInput[]
    NOT?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    courseId?: StringFilter<"CompletedCourse"> | string
    letterGrade?: StringFilter<"CompletedCourse"> | string
    studentId?: StringFilter<"CompletedCourse"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type CompletedCourseOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    letterGrade?: SortOrder
    studentId?: SortOrder
    _count?: CompletedCourseCountOrderByAggregateInput
    _avg?: CompletedCourseAvgOrderByAggregateInput
    _max?: CompletedCourseMaxOrderByAggregateInput
    _min?: CompletedCourseMinOrderByAggregateInput
    _sum?: CompletedCourseSumOrderByAggregateInput
  }

  export type CompletedCourseScalarWhereWithAggregatesInput = {
    AND?: CompletedCourseScalarWhereWithAggregatesInput | CompletedCourseScalarWhereWithAggregatesInput[]
    OR?: CompletedCourseScalarWhereWithAggregatesInput[]
    NOT?: CompletedCourseScalarWhereWithAggregatesInput | CompletedCourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompletedCourse"> | number
    courseId?: StringWithAggregatesFilter<"CompletedCourse"> | string
    letterGrade?: StringWithAggregatesFilter<"CompletedCourse"> | string
    studentId?: StringWithAggregatesFilter<"CompletedCourse"> | string
  }

  export type SemesterEnrollmentWhereInput = {
    AND?: SemesterEnrollmentWhereInput | SemesterEnrollmentWhereInput[]
    OR?: SemesterEnrollmentWhereInput[]
    NOT?: SemesterEnrollmentWhereInput | SemesterEnrollmentWhereInput[]
    id?: IntFilter<"SemesterEnrollment"> | number
    semester?: StringFilter<"SemesterEnrollment"> | string
    studentId?: StringFilter<"SemesterEnrollment"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    classes?: ClassEnrollmentListRelationFilter
  }

  export type SemesterEnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    semester?: SortOrder
    studentId?: SortOrder
    student?: StudentOrderByWithRelationInput
    classes?: ClassEnrollmentOrderByRelationAggregateInput
  }

  export type SemesterEnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SemesterEnrollmentWhereInput | SemesterEnrollmentWhereInput[]
    OR?: SemesterEnrollmentWhereInput[]
    NOT?: SemesterEnrollmentWhereInput | SemesterEnrollmentWhereInput[]
    semester?: StringFilter<"SemesterEnrollment"> | string
    studentId?: StringFilter<"SemesterEnrollment"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    classes?: ClassEnrollmentListRelationFilter
  }, "id">

  export type SemesterEnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    semester?: SortOrder
    studentId?: SortOrder
    _count?: SemesterEnrollmentCountOrderByAggregateInput
    _avg?: SemesterEnrollmentAvgOrderByAggregateInput
    _max?: SemesterEnrollmentMaxOrderByAggregateInput
    _min?: SemesterEnrollmentMinOrderByAggregateInput
    _sum?: SemesterEnrollmentSumOrderByAggregateInput
  }

  export type SemesterEnrollmentScalarWhereWithAggregatesInput = {
    AND?: SemesterEnrollmentScalarWhereWithAggregatesInput | SemesterEnrollmentScalarWhereWithAggregatesInput[]
    OR?: SemesterEnrollmentScalarWhereWithAggregatesInput[]
    NOT?: SemesterEnrollmentScalarWhereWithAggregatesInput | SemesterEnrollmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SemesterEnrollment"> | number
    semester?: StringWithAggregatesFilter<"SemesterEnrollment"> | string
    studentId?: StringWithAggregatesFilter<"SemesterEnrollment"> | string
  }

  export type ClassEnrollmentWhereInput = {
    AND?: ClassEnrollmentWhereInput | ClassEnrollmentWhereInput[]
    OR?: ClassEnrollmentWhereInput[]
    NOT?: ClassEnrollmentWhereInput | ClassEnrollmentWhereInput[]
    id?: IntFilter<"ClassEnrollment"> | number
    classId?: StringFilter<"ClassEnrollment"> | string
    courseId?: StringFilter<"ClassEnrollment"> | string
    gradeStatus?: StringFilter<"ClassEnrollment"> | string
    letterGrade?: StringFilter<"ClassEnrollment"> | string
    semesterEnrollmentId?: IntFilter<"ClassEnrollment"> | number
    semesterEnrollment?: XOR<SemesterEnrollmentScalarRelationFilter, SemesterEnrollmentWhereInput>
  }

  export type ClassEnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    courseId?: SortOrder
    gradeStatus?: SortOrder
    letterGrade?: SortOrder
    semesterEnrollmentId?: SortOrder
    semesterEnrollment?: SemesterEnrollmentOrderByWithRelationInput
  }

  export type ClassEnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassEnrollmentWhereInput | ClassEnrollmentWhereInput[]
    OR?: ClassEnrollmentWhereInput[]
    NOT?: ClassEnrollmentWhereInput | ClassEnrollmentWhereInput[]
    classId?: StringFilter<"ClassEnrollment"> | string
    courseId?: StringFilter<"ClassEnrollment"> | string
    gradeStatus?: StringFilter<"ClassEnrollment"> | string
    letterGrade?: StringFilter<"ClassEnrollment"> | string
    semesterEnrollmentId?: IntFilter<"ClassEnrollment"> | number
    semesterEnrollment?: XOR<SemesterEnrollmentScalarRelationFilter, SemesterEnrollmentWhereInput>
  }, "id">

  export type ClassEnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    courseId?: SortOrder
    gradeStatus?: SortOrder
    letterGrade?: SortOrder
    semesterEnrollmentId?: SortOrder
    _count?: ClassEnrollmentCountOrderByAggregateInput
    _avg?: ClassEnrollmentAvgOrderByAggregateInput
    _max?: ClassEnrollmentMaxOrderByAggregateInput
    _min?: ClassEnrollmentMinOrderByAggregateInput
    _sum?: ClassEnrollmentSumOrderByAggregateInput
  }

  export type ClassEnrollmentScalarWhereWithAggregatesInput = {
    AND?: ClassEnrollmentScalarWhereWithAggregatesInput | ClassEnrollmentScalarWhereWithAggregatesInput[]
    OR?: ClassEnrollmentScalarWhereWithAggregatesInput[]
    NOT?: ClassEnrollmentScalarWhereWithAggregatesInput | ClassEnrollmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClassEnrollment"> | number
    classId?: StringWithAggregatesFilter<"ClassEnrollment"> | string
    courseId?: StringWithAggregatesFilter<"ClassEnrollment"> | string
    gradeStatus?: StringWithAggregatesFilter<"ClassEnrollment"> | string
    letterGrade?: StringWithAggregatesFilter<"ClassEnrollment"> | string
    semesterEnrollmentId?: IntWithAggregatesFilter<"ClassEnrollment"> | number
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    classId?: StringFilter<"Class"> | string
    courseId?: StringFilter<"Class"> | string
    semester?: StringFilter<"Class"> | string
    instructionalMethod?: StringFilter<"Class"> | string
    campus?: StringFilter<"Class"> | string
    enrollmentActual?: IntFilter<"Class"> | number
    enrollmentMaximum?: IntFilter<"Class"> | number
    classStatus?: StringFilter<"Class"> | string
    instructors?: InstructorListRelationFilter
    gradedByInstructors?: InstructorListRelationFilter
    schedule?: XOR<ScheduleNullableScalarRelationFilter, ScheduleWhereInput> | null
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type ClassOrderByWithRelationInput = {
    classId?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    instructionalMethod?: SortOrder
    campus?: SortOrder
    enrollmentActual?: SortOrder
    enrollmentMaximum?: SortOrder
    classStatus?: SortOrder
    instructors?: InstructorOrderByRelationAggregateInput
    gradedByInstructors?: InstructorOrderByRelationAggregateInput
    schedule?: ScheduleOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    classId?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    courseId?: StringFilter<"Class"> | string
    semester?: StringFilter<"Class"> | string
    instructionalMethod?: StringFilter<"Class"> | string
    campus?: StringFilter<"Class"> | string
    enrollmentActual?: IntFilter<"Class"> | number
    enrollmentMaximum?: IntFilter<"Class"> | number
    classStatus?: StringFilter<"Class"> | string
    instructors?: InstructorListRelationFilter
    gradedByInstructors?: InstructorListRelationFilter
    schedule?: XOR<ScheduleNullableScalarRelationFilter, ScheduleWhereInput> | null
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "classId">

  export type ClassOrderByWithAggregationInput = {
    classId?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    instructionalMethod?: SortOrder
    campus?: SortOrder
    enrollmentActual?: SortOrder
    enrollmentMaximum?: SortOrder
    classStatus?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _avg?: ClassAvgOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
    _sum?: ClassSumOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    classId?: StringWithAggregatesFilter<"Class"> | string
    courseId?: StringWithAggregatesFilter<"Class"> | string
    semester?: StringWithAggregatesFilter<"Class"> | string
    instructionalMethod?: StringWithAggregatesFilter<"Class"> | string
    campus?: StringWithAggregatesFilter<"Class"> | string
    enrollmentActual?: IntWithAggregatesFilter<"Class"> | number
    enrollmentMaximum?: IntWithAggregatesFilter<"Class"> | number
    classStatus?: StringWithAggregatesFilter<"Class"> | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    scheduleType?: StringFilter<"Schedule"> | string
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    classId?: StringFilter<"Schedule"> | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }

  export type ScheduleOrderByWithRelationInput = {
    scheduleType?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    classId?: SortOrder
    class?: ClassOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    scheduleType?: string
    classId?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }, "scheduleType" | "classId">

  export type ScheduleOrderByWithAggregationInput = {
    scheduleType?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    classId?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    scheduleType?: StringWithAggregatesFilter<"Schedule"> | string
    startTime?: StringWithAggregatesFilter<"Schedule"> | string
    endTime?: StringWithAggregatesFilter<"Schedule"> | string
    classId?: StringWithAggregatesFilter<"Schedule"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    courseId?: StringFilter<"Course"> | string
    courseName?: StringFilter<"Course"> | string
    creditHours?: IntFilter<"Course"> | number
    subject?: StringFilter<"Course"> | string
    courseNumber?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    courseImage?: StringFilter<"Course"> | string
    prerequisites?: PrerequisiteListRelationFilter
    majorsOffered?: MajorListRelationFilter
    currentClasses?: ClassListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    courseId?: SortOrder
    courseName?: SortOrder
    creditHours?: SortOrder
    subject?: SortOrder
    courseNumber?: SortOrder
    description?: SortOrder
    courseImage?: SortOrder
    prerequisites?: PrerequisiteOrderByRelationAggregateInput
    majorsOffered?: MajorOrderByRelationAggregateInput
    currentClasses?: ClassOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    courseId?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    courseName?: StringFilter<"Course"> | string
    creditHours?: IntFilter<"Course"> | number
    subject?: StringFilter<"Course"> | string
    courseNumber?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    courseImage?: StringFilter<"Course"> | string
    prerequisites?: PrerequisiteListRelationFilter
    majorsOffered?: MajorListRelationFilter
    currentClasses?: ClassListRelationFilter
  }, "courseId">

  export type CourseOrderByWithAggregationInput = {
    courseId?: SortOrder
    courseName?: SortOrder
    creditHours?: SortOrder
    subject?: SortOrder
    courseNumber?: SortOrder
    description?: SortOrder
    courseImage?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    courseId?: StringWithAggregatesFilter<"Course"> | string
    courseName?: StringWithAggregatesFilter<"Course"> | string
    creditHours?: IntWithAggregatesFilter<"Course"> | number
    subject?: StringWithAggregatesFilter<"Course"> | string
    courseNumber?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    courseImage?: StringWithAggregatesFilter<"Course"> | string
  }

  export type PrerequisiteWhereInput = {
    AND?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    OR?: PrerequisiteWhereInput[]
    NOT?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    id?: IntFilter<"Prerequisite"> | number
    courseId?: StringFilter<"Prerequisite"> | string
    minGrade?: StringFilter<"Prerequisite"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type PrerequisiteOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    minGrade?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type PrerequisiteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    OR?: PrerequisiteWhereInput[]
    NOT?: PrerequisiteWhereInput | PrerequisiteWhereInput[]
    courseId?: StringFilter<"Prerequisite"> | string
    minGrade?: StringFilter<"Prerequisite"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type PrerequisiteOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    minGrade?: SortOrder
    _count?: PrerequisiteCountOrderByAggregateInput
    _avg?: PrerequisiteAvgOrderByAggregateInput
    _max?: PrerequisiteMaxOrderByAggregateInput
    _min?: PrerequisiteMinOrderByAggregateInput
    _sum?: PrerequisiteSumOrderByAggregateInput
  }

  export type PrerequisiteScalarWhereWithAggregatesInput = {
    AND?: PrerequisiteScalarWhereWithAggregatesInput | PrerequisiteScalarWhereWithAggregatesInput[]
    OR?: PrerequisiteScalarWhereWithAggregatesInput[]
    NOT?: PrerequisiteScalarWhereWithAggregatesInput | PrerequisiteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prerequisite"> | number
    courseId?: StringWithAggregatesFilter<"Prerequisite"> | string
    minGrade?: StringWithAggregatesFilter<"Prerequisite"> | string
  }

  export type UserCreateInput = {
    email: string
    firstName: string
    lastName: string
    password: string
    role: string
    themePreference: $Enums.ThemePreference
    userType: string
    gender: string
  }

  export type UserUncheckedCreateInput = {
    email: string
    firstName: string
    lastName: string
    password: string
    role: string
    themePreference: $Enums.ThemePreference
    userType: string
    gender: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    themePreference?: EnumThemePreferenceFieldUpdateOperationsInput | $Enums.ThemePreference
    userType?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    themePreference?: EnumThemePreferenceFieldUpdateOperationsInput | $Enums.ThemePreference
    userType?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    email: string
    firstName: string
    lastName: string
    password: string
    role: string
    themePreference: $Enums.ThemePreference
    userType: string
    gender: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    themePreference?: EnumThemePreferenceFieldUpdateOperationsInput | $Enums.ThemePreference
    userType?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    themePreference?: EnumThemePreferenceFieldUpdateOperationsInput | $Enums.ThemePreference
    userType?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateInput = {
    studentId: string
    email: string
    college: string
    department: string
    completedCourses?: CompletedCourseCreateNestedManyWithoutStudentInput
    semesterEnrollment?: SemesterEnrollmentCreateNestedManyWithoutStudentInput
    majorId?: MajorCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    studentId: string
    email: string
    college: string
    department: string
    majorIdField?: string | null
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutStudentInput
    semesterEnrollment?: SemesterEnrollmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    completedCourses?: CompletedCourseUpdateManyWithoutStudentNestedInput
    semesterEnrollment?: SemesterEnrollmentUpdateManyWithoutStudentNestedInput
    majorId?: MajorUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    majorIdField?: NullableStringFieldUpdateOperationsInput | string | null
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutStudentNestedInput
    semesterEnrollment?: SemesterEnrollmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    studentId: string
    email: string
    college: string
    department: string
    majorIdField?: string | null
  }

  export type StudentUpdateManyMutationInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    majorIdField?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstructorCreateInput = {
    instructorId: string
    email: string
    college: string
    department: string
    expertise: string
    teachingClasses?: ClassCreateNestedManyWithoutInstructorsInput
    gradedClasses?: ClassCreateNestedManyWithoutGradedByInstructorsInput
  }

  export type InstructorUncheckedCreateInput = {
    instructorId: string
    email: string
    college: string
    department: string
    expertise: string
    teachingClasses?: ClassUncheckedCreateNestedManyWithoutInstructorsInput
    gradedClasses?: ClassUncheckedCreateNestedManyWithoutGradedByInstructorsInput
  }

  export type InstructorUpdateInput = {
    instructorId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    teachingClasses?: ClassUpdateManyWithoutInstructorsNestedInput
    gradedClasses?: ClassUpdateManyWithoutGradedByInstructorsNestedInput
  }

  export type InstructorUncheckedUpdateInput = {
    instructorId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    teachingClasses?: ClassUncheckedUpdateManyWithoutInstructorsNestedInput
    gradedClasses?: ClassUncheckedUpdateManyWithoutGradedByInstructorsNestedInput
  }

  export type InstructorCreateManyInput = {
    instructorId: string
    email: string
    college: string
    department: string
    expertise: string
  }

  export type InstructorUpdateManyMutationInput = {
    instructorId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorUncheckedUpdateManyInput = {
    instructorId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    adminId: string
    email: string
  }

  export type AdminUncheckedCreateInput = {
    adminId: string
    email: string
  }

  export type AdminUpdateInput = {
    adminId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    adminId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    adminId: string
    email: string
  }

  export type AdminUpdateManyMutationInput = {
    adminId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    adminId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type MajorCreateInput = {
    majorId: string
    majorName: string
    college: string
    department: string
    requiredCourses?: CourseCreateNestedManyWithoutMajorsOfferedInput
    students?: StudentCreateNestedManyWithoutMajorIdInput
  }

  export type MajorUncheckedCreateInput = {
    majorId: string
    majorName: string
    college: string
    department: string
    requiredCourses?: CourseUncheckedCreateNestedManyWithoutMajorsOfferedInput
    students?: StudentUncheckedCreateNestedManyWithoutMajorIdInput
  }

  export type MajorUpdateInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    requiredCourses?: CourseUpdateManyWithoutMajorsOfferedNestedInput
    students?: StudentUpdateManyWithoutMajorIdNestedInput
  }

  export type MajorUncheckedUpdateInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    requiredCourses?: CourseUncheckedUpdateManyWithoutMajorsOfferedNestedInput
    students?: StudentUncheckedUpdateManyWithoutMajorIdNestedInput
  }

  export type MajorCreateManyInput = {
    majorId: string
    majorName: string
    college: string
    department: string
  }

  export type MajorUpdateManyMutationInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type MajorUncheckedUpdateManyInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedCourseCreateInput = {
    courseId: string
    letterGrade: string
    student: StudentCreateNestedOneWithoutCompletedCoursesInput
  }

  export type CompletedCourseUncheckedCreateInput = {
    id?: number
    courseId: string
    letterGrade: string
    studentId: string
  }

  export type CompletedCourseUpdateInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    letterGrade?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutCompletedCoursesNestedInput
  }

  export type CompletedCourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    letterGrade?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedCourseCreateManyInput = {
    id?: number
    courseId: string
    letterGrade: string
    studentId: string
  }

  export type CompletedCourseUpdateManyMutationInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    letterGrade?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedCourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    letterGrade?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type SemesterEnrollmentCreateInput = {
    semester: string
    student: StudentCreateNestedOneWithoutSemesterEnrollmentInput
    classes?: ClassEnrollmentCreateNestedManyWithoutSemesterEnrollmentInput
  }

  export type SemesterEnrollmentUncheckedCreateInput = {
    id?: number
    semester: string
    studentId: string
    classes?: ClassEnrollmentUncheckedCreateNestedManyWithoutSemesterEnrollmentInput
  }

  export type SemesterEnrollmentUpdateInput = {
    semester?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutSemesterEnrollmentNestedInput
    classes?: ClassEnrollmentUpdateManyWithoutSemesterEnrollmentNestedInput
  }

  export type SemesterEnrollmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    classes?: ClassEnrollmentUncheckedUpdateManyWithoutSemesterEnrollmentNestedInput
  }

  export type SemesterEnrollmentCreateManyInput = {
    id?: number
    semester: string
    studentId: string
  }

  export type SemesterEnrollmentUpdateManyMutationInput = {
    semester?: StringFieldUpdateOperationsInput | string
  }

  export type SemesterEnrollmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type ClassEnrollmentCreateInput = {
    classId: string
    courseId: string
    gradeStatus: string
    letterGrade: string
    semesterEnrollment: SemesterEnrollmentCreateNestedOneWithoutClassesInput
  }

  export type ClassEnrollmentUncheckedCreateInput = {
    id?: number
    classId: string
    courseId: string
    gradeStatus: string
    letterGrade: string
    semesterEnrollmentId: number
  }

  export type ClassEnrollmentUpdateInput = {
    classId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    gradeStatus?: StringFieldUpdateOperationsInput | string
    letterGrade?: StringFieldUpdateOperationsInput | string
    semesterEnrollment?: SemesterEnrollmentUpdateOneRequiredWithoutClassesNestedInput
  }

  export type ClassEnrollmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    gradeStatus?: StringFieldUpdateOperationsInput | string
    letterGrade?: StringFieldUpdateOperationsInput | string
    semesterEnrollmentId?: IntFieldUpdateOperationsInput | number
  }

  export type ClassEnrollmentCreateManyInput = {
    id?: number
    classId: string
    courseId: string
    gradeStatus: string
    letterGrade: string
    semesterEnrollmentId: number
  }

  export type ClassEnrollmentUpdateManyMutationInput = {
    classId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    gradeStatus?: StringFieldUpdateOperationsInput | string
    letterGrade?: StringFieldUpdateOperationsInput | string
  }

  export type ClassEnrollmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    gradeStatus?: StringFieldUpdateOperationsInput | string
    letterGrade?: StringFieldUpdateOperationsInput | string
    semesterEnrollmentId?: IntFieldUpdateOperationsInput | number
  }

  export type ClassCreateInput = {
    classId: string
    semester: string
    instructionalMethod: string
    campus: string
    enrollmentActual: number
    enrollmentMaximum: number
    classStatus: string
    instructors?: InstructorCreateNestedManyWithoutTeachingClassesInput
    gradedByInstructors?: InstructorCreateNestedManyWithoutGradedClassesInput
    schedule?: ScheduleCreateNestedOneWithoutClassInput
    course: CourseCreateNestedOneWithoutCurrentClassesInput
  }

  export type ClassUncheckedCreateInput = {
    classId: string
    courseId: string
    semester: string
    instructionalMethod: string
    campus: string
    enrollmentActual: number
    enrollmentMaximum: number
    classStatus: string
    instructors?: InstructorUncheckedCreateNestedManyWithoutTeachingClassesInput
    gradedByInstructors?: InstructorUncheckedCreateNestedManyWithoutGradedClassesInput
    schedule?: ScheduleUncheckedCreateNestedOneWithoutClassInput
  }

  export type ClassUpdateInput = {
    classId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
    instructors?: InstructorUpdateManyWithoutTeachingClassesNestedInput
    gradedByInstructors?: InstructorUpdateManyWithoutGradedClassesNestedInput
    schedule?: ScheduleUpdateOneWithoutClassNestedInput
    course?: CourseUpdateOneRequiredWithoutCurrentClassesNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    classId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
    instructors?: InstructorUncheckedUpdateManyWithoutTeachingClassesNestedInput
    gradedByInstructors?: InstructorUncheckedUpdateManyWithoutGradedClassesNestedInput
    schedule?: ScheduleUncheckedUpdateOneWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    classId: string
    courseId: string
    semester: string
    instructionalMethod: string
    campus: string
    enrollmentActual: number
    enrollmentMaximum: number
    classStatus: string
  }

  export type ClassUpdateManyMutationInput = {
    classId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUncheckedUpdateManyInput = {
    classId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleCreateInput = {
    scheduleType: string
    startTime: string
    endTime: string
    class: ClassCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    scheduleType: string
    startTime: string
    endTime: string
    classId: string
  }

  export type ScheduleUpdateInput = {
    scheduleType?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    class?: ClassUpdateOneRequiredWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    scheduleType?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleCreateManyInput = {
    scheduleType: string
    startTime: string
    endTime: string
    classId: string
  }

  export type ScheduleUpdateManyMutationInput = {
    scheduleType?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    scheduleType?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    courseId: string
    courseName: string
    creditHours: number
    subject: string
    courseNumber: string
    description: string
    courseImage: string
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    majorsOffered?: MajorCreateNestedManyWithoutRequiredCoursesInput
    currentClasses?: ClassCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    courseId: string
    courseName: string
    creditHours: number
    subject: string
    courseNumber: string
    description: string
    courseImage: string
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    majorsOffered?: MajorUncheckedCreateNestedManyWithoutRequiredCoursesInput
    currentClasses?: ClassUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    creditHours?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    courseNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseImage?: StringFieldUpdateOperationsInput | string
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    majorsOffered?: MajorUpdateManyWithoutRequiredCoursesNestedInput
    currentClasses?: ClassUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    creditHours?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    courseNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseImage?: StringFieldUpdateOperationsInput | string
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    majorsOffered?: MajorUncheckedUpdateManyWithoutRequiredCoursesNestedInput
    currentClasses?: ClassUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    courseId: string
    courseName: string
    creditHours: number
    subject: string
    courseNumber: string
    description: string
    courseImage: string
  }

  export type CourseUpdateManyMutationInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    creditHours?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    courseNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseImage?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUncheckedUpdateManyInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    creditHours?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    courseNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseImage?: StringFieldUpdateOperationsInput | string
  }

  export type PrerequisiteCreateInput = {
    minGrade: string
    course: CourseCreateNestedOneWithoutPrerequisitesInput
  }

  export type PrerequisiteUncheckedCreateInput = {
    id?: number
    courseId: string
    minGrade: string
  }

  export type PrerequisiteUpdateInput = {
    minGrade?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutPrerequisitesNestedInput
  }

  export type PrerequisiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
  }

  export type PrerequisiteCreateManyInput = {
    id?: number
    courseId: string
    minGrade: string
  }

  export type PrerequisiteUpdateManyMutationInput = {
    minGrade?: StringFieldUpdateOperationsInput | string
  }

  export type PrerequisiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    minGrade?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumThemePreferenceFilter<$PrismaModel = never> = {
    equals?: $Enums.ThemePreference | EnumThemePreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.ThemePreference[]
    notIn?: $Enums.ThemePreference[]
    not?: NestedEnumThemePreferenceFilter<$PrismaModel> | $Enums.ThemePreference
  }

  export type UserCountOrderByAggregateInput = {
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    themePreference?: SortOrder
    userType?: SortOrder
    gender?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    themePreference?: SortOrder
    userType?: SortOrder
    gender?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    themePreference?: SortOrder
    userType?: SortOrder
    gender?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumThemePreferenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ThemePreference | EnumThemePreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.ThemePreference[]
    notIn?: $Enums.ThemePreference[]
    not?: NestedEnumThemePreferenceWithAggregatesFilter<$PrismaModel> | $Enums.ThemePreference
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemePreferenceFilter<$PrismaModel>
    _max?: NestedEnumThemePreferenceFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CompletedCourseListRelationFilter = {
    every?: CompletedCourseWhereInput
    some?: CompletedCourseWhereInput
    none?: CompletedCourseWhereInput
  }

  export type SemesterEnrollmentListRelationFilter = {
    every?: SemesterEnrollmentWhereInput
    some?: SemesterEnrollmentWhereInput
    none?: SemesterEnrollmentWhereInput
  }

  export type MajorNullableScalarRelationFilter = {
    is?: MajorWhereInput | null
    isNot?: MajorWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompletedCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SemesterEnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    studentId?: SortOrder
    email?: SortOrder
    college?: SortOrder
    department?: SortOrder
    majorIdField?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    studentId?: SortOrder
    email?: SortOrder
    college?: SortOrder
    department?: SortOrder
    majorIdField?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    studentId?: SortOrder
    email?: SortOrder
    college?: SortOrder
    department?: SortOrder
    majorIdField?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorCountOrderByAggregateInput = {
    instructorId?: SortOrder
    email?: SortOrder
    college?: SortOrder
    department?: SortOrder
    expertise?: SortOrder
  }

  export type InstructorMaxOrderByAggregateInput = {
    instructorId?: SortOrder
    email?: SortOrder
    college?: SortOrder
    department?: SortOrder
    expertise?: SortOrder
  }

  export type InstructorMinOrderByAggregateInput = {
    instructorId?: SortOrder
    email?: SortOrder
    college?: SortOrder
    department?: SortOrder
    expertise?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    adminId?: SortOrder
    email?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    adminId?: SortOrder
    email?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    adminId?: SortOrder
    email?: SortOrder
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MajorCountOrderByAggregateInput = {
    majorId?: SortOrder
    majorName?: SortOrder
    college?: SortOrder
    department?: SortOrder
  }

  export type MajorMaxOrderByAggregateInput = {
    majorId?: SortOrder
    majorName?: SortOrder
    college?: SortOrder
    department?: SortOrder
  }

  export type MajorMinOrderByAggregateInput = {
    majorId?: SortOrder
    majorName?: SortOrder
    college?: SortOrder
    department?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type CompletedCourseCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    letterGrade?: SortOrder
    studentId?: SortOrder
  }

  export type CompletedCourseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompletedCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    letterGrade?: SortOrder
    studentId?: SortOrder
  }

  export type CompletedCourseMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    letterGrade?: SortOrder
    studentId?: SortOrder
  }

  export type CompletedCourseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ClassEnrollmentListRelationFilter = {
    every?: ClassEnrollmentWhereInput
    some?: ClassEnrollmentWhereInput
    none?: ClassEnrollmentWhereInput
  }

  export type ClassEnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SemesterEnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    studentId?: SortOrder
  }

  export type SemesterEnrollmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SemesterEnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    studentId?: SortOrder
  }

  export type SemesterEnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    studentId?: SortOrder
  }

  export type SemesterEnrollmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SemesterEnrollmentScalarRelationFilter = {
    is?: SemesterEnrollmentWhereInput
    isNot?: SemesterEnrollmentWhereInput
  }

  export type ClassEnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    courseId?: SortOrder
    gradeStatus?: SortOrder
    letterGrade?: SortOrder
    semesterEnrollmentId?: SortOrder
  }

  export type ClassEnrollmentAvgOrderByAggregateInput = {
    id?: SortOrder
    semesterEnrollmentId?: SortOrder
  }

  export type ClassEnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    courseId?: SortOrder
    gradeStatus?: SortOrder
    letterGrade?: SortOrder
    semesterEnrollmentId?: SortOrder
  }

  export type ClassEnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    courseId?: SortOrder
    gradeStatus?: SortOrder
    letterGrade?: SortOrder
    semesterEnrollmentId?: SortOrder
  }

  export type ClassEnrollmentSumOrderByAggregateInput = {
    id?: SortOrder
    semesterEnrollmentId?: SortOrder
  }

  export type InstructorListRelationFilter = {
    every?: InstructorWhereInput
    some?: InstructorWhereInput
    none?: InstructorWhereInput
  }

  export type ScheduleNullableScalarRelationFilter = {
    is?: ScheduleWhereInput | null
    isNot?: ScheduleWhereInput | null
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type InstructorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    classId?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    instructionalMethod?: SortOrder
    campus?: SortOrder
    enrollmentActual?: SortOrder
    enrollmentMaximum?: SortOrder
    classStatus?: SortOrder
  }

  export type ClassAvgOrderByAggregateInput = {
    enrollmentActual?: SortOrder
    enrollmentMaximum?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    classId?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    instructionalMethod?: SortOrder
    campus?: SortOrder
    enrollmentActual?: SortOrder
    enrollmentMaximum?: SortOrder
    classStatus?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    classId?: SortOrder
    courseId?: SortOrder
    semester?: SortOrder
    instructionalMethod?: SortOrder
    campus?: SortOrder
    enrollmentActual?: SortOrder
    enrollmentMaximum?: SortOrder
    classStatus?: SortOrder
  }

  export type ClassSumOrderByAggregateInput = {
    enrollmentActual?: SortOrder
    enrollmentMaximum?: SortOrder
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type ScheduleCountOrderByAggregateInput = {
    scheduleType?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    classId?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    scheduleType?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    classId?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    scheduleType?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    classId?: SortOrder
  }

  export type PrerequisiteListRelationFilter = {
    every?: PrerequisiteWhereInput
    some?: PrerequisiteWhereInput
    none?: PrerequisiteWhereInput
  }

  export type MajorListRelationFilter = {
    every?: MajorWhereInput
    some?: MajorWhereInput
    none?: MajorWhereInput
  }

  export type PrerequisiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MajorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    courseId?: SortOrder
    courseName?: SortOrder
    creditHours?: SortOrder
    subject?: SortOrder
    courseNumber?: SortOrder
    description?: SortOrder
    courseImage?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    creditHours?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    courseId?: SortOrder
    courseName?: SortOrder
    creditHours?: SortOrder
    subject?: SortOrder
    courseNumber?: SortOrder
    description?: SortOrder
    courseImage?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    courseId?: SortOrder
    courseName?: SortOrder
    creditHours?: SortOrder
    subject?: SortOrder
    courseNumber?: SortOrder
    description?: SortOrder
    courseImage?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    creditHours?: SortOrder
  }

  export type PrerequisiteCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    minGrade?: SortOrder
  }

  export type PrerequisiteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PrerequisiteMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    minGrade?: SortOrder
  }

  export type PrerequisiteMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    minGrade?: SortOrder
  }

  export type PrerequisiteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumThemePreferenceFieldUpdateOperationsInput = {
    set?: $Enums.ThemePreference
  }

  export type CompletedCourseCreateNestedManyWithoutStudentInput = {
    create?: XOR<CompletedCourseCreateWithoutStudentInput, CompletedCourseUncheckedCreateWithoutStudentInput> | CompletedCourseCreateWithoutStudentInput[] | CompletedCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutStudentInput | CompletedCourseCreateOrConnectWithoutStudentInput[]
    createMany?: CompletedCourseCreateManyStudentInputEnvelope
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
  }

  export type SemesterEnrollmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<SemesterEnrollmentCreateWithoutStudentInput, SemesterEnrollmentUncheckedCreateWithoutStudentInput> | SemesterEnrollmentCreateWithoutStudentInput[] | SemesterEnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SemesterEnrollmentCreateOrConnectWithoutStudentInput | SemesterEnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: SemesterEnrollmentCreateManyStudentInputEnvelope
    connect?: SemesterEnrollmentWhereUniqueInput | SemesterEnrollmentWhereUniqueInput[]
  }

  export type MajorCreateNestedOneWithoutStudentsInput = {
    create?: XOR<MajorCreateWithoutStudentsInput, MajorUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: MajorCreateOrConnectWithoutStudentsInput
    connect?: MajorWhereUniqueInput
  }

  export type CompletedCourseUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<CompletedCourseCreateWithoutStudentInput, CompletedCourseUncheckedCreateWithoutStudentInput> | CompletedCourseCreateWithoutStudentInput[] | CompletedCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutStudentInput | CompletedCourseCreateOrConnectWithoutStudentInput[]
    createMany?: CompletedCourseCreateManyStudentInputEnvelope
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
  }

  export type SemesterEnrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SemesterEnrollmentCreateWithoutStudentInput, SemesterEnrollmentUncheckedCreateWithoutStudentInput> | SemesterEnrollmentCreateWithoutStudentInput[] | SemesterEnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SemesterEnrollmentCreateOrConnectWithoutStudentInput | SemesterEnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: SemesterEnrollmentCreateManyStudentInputEnvelope
    connect?: SemesterEnrollmentWhereUniqueInput | SemesterEnrollmentWhereUniqueInput[]
  }

  export type CompletedCourseUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CompletedCourseCreateWithoutStudentInput, CompletedCourseUncheckedCreateWithoutStudentInput> | CompletedCourseCreateWithoutStudentInput[] | CompletedCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutStudentInput | CompletedCourseCreateOrConnectWithoutStudentInput[]
    upsert?: CompletedCourseUpsertWithWhereUniqueWithoutStudentInput | CompletedCourseUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CompletedCourseCreateManyStudentInputEnvelope
    set?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    disconnect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    delete?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    update?: CompletedCourseUpdateWithWhereUniqueWithoutStudentInput | CompletedCourseUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CompletedCourseUpdateManyWithWhereWithoutStudentInput | CompletedCourseUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
  }

  export type SemesterEnrollmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SemesterEnrollmentCreateWithoutStudentInput, SemesterEnrollmentUncheckedCreateWithoutStudentInput> | SemesterEnrollmentCreateWithoutStudentInput[] | SemesterEnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SemesterEnrollmentCreateOrConnectWithoutStudentInput | SemesterEnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: SemesterEnrollmentUpsertWithWhereUniqueWithoutStudentInput | SemesterEnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SemesterEnrollmentCreateManyStudentInputEnvelope
    set?: SemesterEnrollmentWhereUniqueInput | SemesterEnrollmentWhereUniqueInput[]
    disconnect?: SemesterEnrollmentWhereUniqueInput | SemesterEnrollmentWhereUniqueInput[]
    delete?: SemesterEnrollmentWhereUniqueInput | SemesterEnrollmentWhereUniqueInput[]
    connect?: SemesterEnrollmentWhereUniqueInput | SemesterEnrollmentWhereUniqueInput[]
    update?: SemesterEnrollmentUpdateWithWhereUniqueWithoutStudentInput | SemesterEnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SemesterEnrollmentUpdateManyWithWhereWithoutStudentInput | SemesterEnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SemesterEnrollmentScalarWhereInput | SemesterEnrollmentScalarWhereInput[]
  }

  export type MajorUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<MajorCreateWithoutStudentsInput, MajorUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: MajorCreateOrConnectWithoutStudentsInput
    upsert?: MajorUpsertWithoutStudentsInput
    disconnect?: MajorWhereInput | boolean
    delete?: MajorWhereInput | boolean
    connect?: MajorWhereUniqueInput
    update?: XOR<XOR<MajorUpdateToOneWithWhereWithoutStudentsInput, MajorUpdateWithoutStudentsInput>, MajorUncheckedUpdateWithoutStudentsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CompletedCourseUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CompletedCourseCreateWithoutStudentInput, CompletedCourseUncheckedCreateWithoutStudentInput> | CompletedCourseCreateWithoutStudentInput[] | CompletedCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutStudentInput | CompletedCourseCreateOrConnectWithoutStudentInput[]
    upsert?: CompletedCourseUpsertWithWhereUniqueWithoutStudentInput | CompletedCourseUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CompletedCourseCreateManyStudentInputEnvelope
    set?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    disconnect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    delete?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    update?: CompletedCourseUpdateWithWhereUniqueWithoutStudentInput | CompletedCourseUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CompletedCourseUpdateManyWithWhereWithoutStudentInput | CompletedCourseUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
  }

  export type SemesterEnrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SemesterEnrollmentCreateWithoutStudentInput, SemesterEnrollmentUncheckedCreateWithoutStudentInput> | SemesterEnrollmentCreateWithoutStudentInput[] | SemesterEnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SemesterEnrollmentCreateOrConnectWithoutStudentInput | SemesterEnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: SemesterEnrollmentUpsertWithWhereUniqueWithoutStudentInput | SemesterEnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SemesterEnrollmentCreateManyStudentInputEnvelope
    set?: SemesterEnrollmentWhereUniqueInput | SemesterEnrollmentWhereUniqueInput[]
    disconnect?: SemesterEnrollmentWhereUniqueInput | SemesterEnrollmentWhereUniqueInput[]
    delete?: SemesterEnrollmentWhereUniqueInput | SemesterEnrollmentWhereUniqueInput[]
    connect?: SemesterEnrollmentWhereUniqueInput | SemesterEnrollmentWhereUniqueInput[]
    update?: SemesterEnrollmentUpdateWithWhereUniqueWithoutStudentInput | SemesterEnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SemesterEnrollmentUpdateManyWithWhereWithoutStudentInput | SemesterEnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SemesterEnrollmentScalarWhereInput | SemesterEnrollmentScalarWhereInput[]
  }

  export type ClassCreateNestedManyWithoutInstructorsInput = {
    create?: XOR<ClassCreateWithoutInstructorsInput, ClassUncheckedCreateWithoutInstructorsInput> | ClassCreateWithoutInstructorsInput[] | ClassUncheckedCreateWithoutInstructorsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstructorsInput | ClassCreateOrConnectWithoutInstructorsInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutGradedByInstructorsInput = {
    create?: XOR<ClassCreateWithoutGradedByInstructorsInput, ClassUncheckedCreateWithoutGradedByInstructorsInput> | ClassCreateWithoutGradedByInstructorsInput[] | ClassUncheckedCreateWithoutGradedByInstructorsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutGradedByInstructorsInput | ClassCreateOrConnectWithoutGradedByInstructorsInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutInstructorsInput = {
    create?: XOR<ClassCreateWithoutInstructorsInput, ClassUncheckedCreateWithoutInstructorsInput> | ClassCreateWithoutInstructorsInput[] | ClassUncheckedCreateWithoutInstructorsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstructorsInput | ClassCreateOrConnectWithoutInstructorsInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutGradedByInstructorsInput = {
    create?: XOR<ClassCreateWithoutGradedByInstructorsInput, ClassUncheckedCreateWithoutGradedByInstructorsInput> | ClassCreateWithoutGradedByInstructorsInput[] | ClassUncheckedCreateWithoutGradedByInstructorsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutGradedByInstructorsInput | ClassCreateOrConnectWithoutGradedByInstructorsInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUpdateManyWithoutInstructorsNestedInput = {
    create?: XOR<ClassCreateWithoutInstructorsInput, ClassUncheckedCreateWithoutInstructorsInput> | ClassCreateWithoutInstructorsInput[] | ClassUncheckedCreateWithoutInstructorsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstructorsInput | ClassCreateOrConnectWithoutInstructorsInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutInstructorsInput | ClassUpsertWithWhereUniqueWithoutInstructorsInput[]
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutInstructorsInput | ClassUpdateWithWhereUniqueWithoutInstructorsInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutInstructorsInput | ClassUpdateManyWithWhereWithoutInstructorsInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutGradedByInstructorsNestedInput = {
    create?: XOR<ClassCreateWithoutGradedByInstructorsInput, ClassUncheckedCreateWithoutGradedByInstructorsInput> | ClassCreateWithoutGradedByInstructorsInput[] | ClassUncheckedCreateWithoutGradedByInstructorsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutGradedByInstructorsInput | ClassCreateOrConnectWithoutGradedByInstructorsInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutGradedByInstructorsInput | ClassUpsertWithWhereUniqueWithoutGradedByInstructorsInput[]
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutGradedByInstructorsInput | ClassUpdateWithWhereUniqueWithoutGradedByInstructorsInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutGradedByInstructorsInput | ClassUpdateManyWithWhereWithoutGradedByInstructorsInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutInstructorsNestedInput = {
    create?: XOR<ClassCreateWithoutInstructorsInput, ClassUncheckedCreateWithoutInstructorsInput> | ClassCreateWithoutInstructorsInput[] | ClassUncheckedCreateWithoutInstructorsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutInstructorsInput | ClassCreateOrConnectWithoutInstructorsInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutInstructorsInput | ClassUpsertWithWhereUniqueWithoutInstructorsInput[]
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutInstructorsInput | ClassUpdateWithWhereUniqueWithoutInstructorsInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutInstructorsInput | ClassUpdateManyWithWhereWithoutInstructorsInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutGradedByInstructorsNestedInput = {
    create?: XOR<ClassCreateWithoutGradedByInstructorsInput, ClassUncheckedCreateWithoutGradedByInstructorsInput> | ClassCreateWithoutGradedByInstructorsInput[] | ClassUncheckedCreateWithoutGradedByInstructorsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutGradedByInstructorsInput | ClassCreateOrConnectWithoutGradedByInstructorsInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutGradedByInstructorsInput | ClassUpsertWithWhereUniqueWithoutGradedByInstructorsInput[]
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutGradedByInstructorsInput | ClassUpdateWithWhereUniqueWithoutGradedByInstructorsInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutGradedByInstructorsInput | ClassUpdateManyWithWhereWithoutGradedByInstructorsInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type CourseCreateNestedManyWithoutMajorsOfferedInput = {
    create?: XOR<CourseCreateWithoutMajorsOfferedInput, CourseUncheckedCreateWithoutMajorsOfferedInput> | CourseCreateWithoutMajorsOfferedInput[] | CourseUncheckedCreateWithoutMajorsOfferedInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutMajorsOfferedInput | CourseCreateOrConnectWithoutMajorsOfferedInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutMajorIdInput = {
    create?: XOR<StudentCreateWithoutMajorIdInput, StudentUncheckedCreateWithoutMajorIdInput> | StudentCreateWithoutMajorIdInput[] | StudentUncheckedCreateWithoutMajorIdInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMajorIdInput | StudentCreateOrConnectWithoutMajorIdInput[]
    createMany?: StudentCreateManyMajorIdInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutMajorsOfferedInput = {
    create?: XOR<CourseCreateWithoutMajorsOfferedInput, CourseUncheckedCreateWithoutMajorsOfferedInput> | CourseCreateWithoutMajorsOfferedInput[] | CourseUncheckedCreateWithoutMajorsOfferedInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutMajorsOfferedInput | CourseCreateOrConnectWithoutMajorsOfferedInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutMajorIdInput = {
    create?: XOR<StudentCreateWithoutMajorIdInput, StudentUncheckedCreateWithoutMajorIdInput> | StudentCreateWithoutMajorIdInput[] | StudentUncheckedCreateWithoutMajorIdInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMajorIdInput | StudentCreateOrConnectWithoutMajorIdInput[]
    createMany?: StudentCreateManyMajorIdInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutMajorsOfferedNestedInput = {
    create?: XOR<CourseCreateWithoutMajorsOfferedInput, CourseUncheckedCreateWithoutMajorsOfferedInput> | CourseCreateWithoutMajorsOfferedInput[] | CourseUncheckedCreateWithoutMajorsOfferedInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutMajorsOfferedInput | CourseCreateOrConnectWithoutMajorsOfferedInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutMajorsOfferedInput | CourseUpsertWithWhereUniqueWithoutMajorsOfferedInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutMajorsOfferedInput | CourseUpdateWithWhereUniqueWithoutMajorsOfferedInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutMajorsOfferedInput | CourseUpdateManyWithWhereWithoutMajorsOfferedInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutMajorIdNestedInput = {
    create?: XOR<StudentCreateWithoutMajorIdInput, StudentUncheckedCreateWithoutMajorIdInput> | StudentCreateWithoutMajorIdInput[] | StudentUncheckedCreateWithoutMajorIdInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMajorIdInput | StudentCreateOrConnectWithoutMajorIdInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutMajorIdInput | StudentUpsertWithWhereUniqueWithoutMajorIdInput[]
    createMany?: StudentCreateManyMajorIdInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutMajorIdInput | StudentUpdateWithWhereUniqueWithoutMajorIdInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutMajorIdInput | StudentUpdateManyWithWhereWithoutMajorIdInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutMajorsOfferedNestedInput = {
    create?: XOR<CourseCreateWithoutMajorsOfferedInput, CourseUncheckedCreateWithoutMajorsOfferedInput> | CourseCreateWithoutMajorsOfferedInput[] | CourseUncheckedCreateWithoutMajorsOfferedInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutMajorsOfferedInput | CourseCreateOrConnectWithoutMajorsOfferedInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutMajorsOfferedInput | CourseUpsertWithWhereUniqueWithoutMajorsOfferedInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutMajorsOfferedInput | CourseUpdateWithWhereUniqueWithoutMajorsOfferedInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutMajorsOfferedInput | CourseUpdateManyWithWhereWithoutMajorsOfferedInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutMajorIdNestedInput = {
    create?: XOR<StudentCreateWithoutMajorIdInput, StudentUncheckedCreateWithoutMajorIdInput> | StudentCreateWithoutMajorIdInput[] | StudentUncheckedCreateWithoutMajorIdInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMajorIdInput | StudentCreateOrConnectWithoutMajorIdInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutMajorIdInput | StudentUpsertWithWhereUniqueWithoutMajorIdInput[]
    createMany?: StudentCreateManyMajorIdInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutMajorIdInput | StudentUpdateWithWhereUniqueWithoutMajorIdInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutMajorIdInput | StudentUpdateManyWithWhereWithoutMajorIdInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutCompletedCoursesInput = {
    create?: XOR<StudentCreateWithoutCompletedCoursesInput, StudentUncheckedCreateWithoutCompletedCoursesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCompletedCoursesInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutCompletedCoursesNestedInput = {
    create?: XOR<StudentCreateWithoutCompletedCoursesInput, StudentUncheckedCreateWithoutCompletedCoursesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCompletedCoursesInput
    upsert?: StudentUpsertWithoutCompletedCoursesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutCompletedCoursesInput, StudentUpdateWithoutCompletedCoursesInput>, StudentUncheckedUpdateWithoutCompletedCoursesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentCreateNestedOneWithoutSemesterEnrollmentInput = {
    create?: XOR<StudentCreateWithoutSemesterEnrollmentInput, StudentUncheckedCreateWithoutSemesterEnrollmentInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSemesterEnrollmentInput
    connect?: StudentWhereUniqueInput
  }

  export type ClassEnrollmentCreateNestedManyWithoutSemesterEnrollmentInput = {
    create?: XOR<ClassEnrollmentCreateWithoutSemesterEnrollmentInput, ClassEnrollmentUncheckedCreateWithoutSemesterEnrollmentInput> | ClassEnrollmentCreateWithoutSemesterEnrollmentInput[] | ClassEnrollmentUncheckedCreateWithoutSemesterEnrollmentInput[]
    connectOrCreate?: ClassEnrollmentCreateOrConnectWithoutSemesterEnrollmentInput | ClassEnrollmentCreateOrConnectWithoutSemesterEnrollmentInput[]
    createMany?: ClassEnrollmentCreateManySemesterEnrollmentInputEnvelope
    connect?: ClassEnrollmentWhereUniqueInput | ClassEnrollmentWhereUniqueInput[]
  }

  export type ClassEnrollmentUncheckedCreateNestedManyWithoutSemesterEnrollmentInput = {
    create?: XOR<ClassEnrollmentCreateWithoutSemesterEnrollmentInput, ClassEnrollmentUncheckedCreateWithoutSemesterEnrollmentInput> | ClassEnrollmentCreateWithoutSemesterEnrollmentInput[] | ClassEnrollmentUncheckedCreateWithoutSemesterEnrollmentInput[]
    connectOrCreate?: ClassEnrollmentCreateOrConnectWithoutSemesterEnrollmentInput | ClassEnrollmentCreateOrConnectWithoutSemesterEnrollmentInput[]
    createMany?: ClassEnrollmentCreateManySemesterEnrollmentInputEnvelope
    connect?: ClassEnrollmentWhereUniqueInput | ClassEnrollmentWhereUniqueInput[]
  }

  export type StudentUpdateOneRequiredWithoutSemesterEnrollmentNestedInput = {
    create?: XOR<StudentCreateWithoutSemesterEnrollmentInput, StudentUncheckedCreateWithoutSemesterEnrollmentInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSemesterEnrollmentInput
    upsert?: StudentUpsertWithoutSemesterEnrollmentInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSemesterEnrollmentInput, StudentUpdateWithoutSemesterEnrollmentInput>, StudentUncheckedUpdateWithoutSemesterEnrollmentInput>
  }

  export type ClassEnrollmentUpdateManyWithoutSemesterEnrollmentNestedInput = {
    create?: XOR<ClassEnrollmentCreateWithoutSemesterEnrollmentInput, ClassEnrollmentUncheckedCreateWithoutSemesterEnrollmentInput> | ClassEnrollmentCreateWithoutSemesterEnrollmentInput[] | ClassEnrollmentUncheckedCreateWithoutSemesterEnrollmentInput[]
    connectOrCreate?: ClassEnrollmentCreateOrConnectWithoutSemesterEnrollmentInput | ClassEnrollmentCreateOrConnectWithoutSemesterEnrollmentInput[]
    upsert?: ClassEnrollmentUpsertWithWhereUniqueWithoutSemesterEnrollmentInput | ClassEnrollmentUpsertWithWhereUniqueWithoutSemesterEnrollmentInput[]
    createMany?: ClassEnrollmentCreateManySemesterEnrollmentInputEnvelope
    set?: ClassEnrollmentWhereUniqueInput | ClassEnrollmentWhereUniqueInput[]
    disconnect?: ClassEnrollmentWhereUniqueInput | ClassEnrollmentWhereUniqueInput[]
    delete?: ClassEnrollmentWhereUniqueInput | ClassEnrollmentWhereUniqueInput[]
    connect?: ClassEnrollmentWhereUniqueInput | ClassEnrollmentWhereUniqueInput[]
    update?: ClassEnrollmentUpdateWithWhereUniqueWithoutSemesterEnrollmentInput | ClassEnrollmentUpdateWithWhereUniqueWithoutSemesterEnrollmentInput[]
    updateMany?: ClassEnrollmentUpdateManyWithWhereWithoutSemesterEnrollmentInput | ClassEnrollmentUpdateManyWithWhereWithoutSemesterEnrollmentInput[]
    deleteMany?: ClassEnrollmentScalarWhereInput | ClassEnrollmentScalarWhereInput[]
  }

  export type ClassEnrollmentUncheckedUpdateManyWithoutSemesterEnrollmentNestedInput = {
    create?: XOR<ClassEnrollmentCreateWithoutSemesterEnrollmentInput, ClassEnrollmentUncheckedCreateWithoutSemesterEnrollmentInput> | ClassEnrollmentCreateWithoutSemesterEnrollmentInput[] | ClassEnrollmentUncheckedCreateWithoutSemesterEnrollmentInput[]
    connectOrCreate?: ClassEnrollmentCreateOrConnectWithoutSemesterEnrollmentInput | ClassEnrollmentCreateOrConnectWithoutSemesterEnrollmentInput[]
    upsert?: ClassEnrollmentUpsertWithWhereUniqueWithoutSemesterEnrollmentInput | ClassEnrollmentUpsertWithWhereUniqueWithoutSemesterEnrollmentInput[]
    createMany?: ClassEnrollmentCreateManySemesterEnrollmentInputEnvelope
    set?: ClassEnrollmentWhereUniqueInput | ClassEnrollmentWhereUniqueInput[]
    disconnect?: ClassEnrollmentWhereUniqueInput | ClassEnrollmentWhereUniqueInput[]
    delete?: ClassEnrollmentWhereUniqueInput | ClassEnrollmentWhereUniqueInput[]
    connect?: ClassEnrollmentWhereUniqueInput | ClassEnrollmentWhereUniqueInput[]
    update?: ClassEnrollmentUpdateWithWhereUniqueWithoutSemesterEnrollmentInput | ClassEnrollmentUpdateWithWhereUniqueWithoutSemesterEnrollmentInput[]
    updateMany?: ClassEnrollmentUpdateManyWithWhereWithoutSemesterEnrollmentInput | ClassEnrollmentUpdateManyWithWhereWithoutSemesterEnrollmentInput[]
    deleteMany?: ClassEnrollmentScalarWhereInput | ClassEnrollmentScalarWhereInput[]
  }

  export type SemesterEnrollmentCreateNestedOneWithoutClassesInput = {
    create?: XOR<SemesterEnrollmentCreateWithoutClassesInput, SemesterEnrollmentUncheckedCreateWithoutClassesInput>
    connectOrCreate?: SemesterEnrollmentCreateOrConnectWithoutClassesInput
    connect?: SemesterEnrollmentWhereUniqueInput
  }

  export type SemesterEnrollmentUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<SemesterEnrollmentCreateWithoutClassesInput, SemesterEnrollmentUncheckedCreateWithoutClassesInput>
    connectOrCreate?: SemesterEnrollmentCreateOrConnectWithoutClassesInput
    upsert?: SemesterEnrollmentUpsertWithoutClassesInput
    connect?: SemesterEnrollmentWhereUniqueInput
    update?: XOR<XOR<SemesterEnrollmentUpdateToOneWithWhereWithoutClassesInput, SemesterEnrollmentUpdateWithoutClassesInput>, SemesterEnrollmentUncheckedUpdateWithoutClassesInput>
  }

  export type InstructorCreateNestedManyWithoutTeachingClassesInput = {
    create?: XOR<InstructorCreateWithoutTeachingClassesInput, InstructorUncheckedCreateWithoutTeachingClassesInput> | InstructorCreateWithoutTeachingClassesInput[] | InstructorUncheckedCreateWithoutTeachingClassesInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutTeachingClassesInput | InstructorCreateOrConnectWithoutTeachingClassesInput[]
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
  }

  export type InstructorCreateNestedManyWithoutGradedClassesInput = {
    create?: XOR<InstructorCreateWithoutGradedClassesInput, InstructorUncheckedCreateWithoutGradedClassesInput> | InstructorCreateWithoutGradedClassesInput[] | InstructorUncheckedCreateWithoutGradedClassesInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutGradedClassesInput | InstructorCreateOrConnectWithoutGradedClassesInput[]
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
  }

  export type ScheduleCreateNestedOneWithoutClassInput = {
    create?: XOR<ScheduleCreateWithoutClassInput, ScheduleUncheckedCreateWithoutClassInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutClassInput
    connect?: ScheduleWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutCurrentClassesInput = {
    create?: XOR<CourseCreateWithoutCurrentClassesInput, CourseUncheckedCreateWithoutCurrentClassesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCurrentClassesInput
    connect?: CourseWhereUniqueInput
  }

  export type InstructorUncheckedCreateNestedManyWithoutTeachingClassesInput = {
    create?: XOR<InstructorCreateWithoutTeachingClassesInput, InstructorUncheckedCreateWithoutTeachingClassesInput> | InstructorCreateWithoutTeachingClassesInput[] | InstructorUncheckedCreateWithoutTeachingClassesInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutTeachingClassesInput | InstructorCreateOrConnectWithoutTeachingClassesInput[]
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
  }

  export type InstructorUncheckedCreateNestedManyWithoutGradedClassesInput = {
    create?: XOR<InstructorCreateWithoutGradedClassesInput, InstructorUncheckedCreateWithoutGradedClassesInput> | InstructorCreateWithoutGradedClassesInput[] | InstructorUncheckedCreateWithoutGradedClassesInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutGradedClassesInput | InstructorCreateOrConnectWithoutGradedClassesInput[]
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedOneWithoutClassInput = {
    create?: XOR<ScheduleCreateWithoutClassInput, ScheduleUncheckedCreateWithoutClassInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutClassInput
    connect?: ScheduleWhereUniqueInput
  }

  export type InstructorUpdateManyWithoutTeachingClassesNestedInput = {
    create?: XOR<InstructorCreateWithoutTeachingClassesInput, InstructorUncheckedCreateWithoutTeachingClassesInput> | InstructorCreateWithoutTeachingClassesInput[] | InstructorUncheckedCreateWithoutTeachingClassesInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutTeachingClassesInput | InstructorCreateOrConnectWithoutTeachingClassesInput[]
    upsert?: InstructorUpsertWithWhereUniqueWithoutTeachingClassesInput | InstructorUpsertWithWhereUniqueWithoutTeachingClassesInput[]
    set?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    disconnect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    delete?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    update?: InstructorUpdateWithWhereUniqueWithoutTeachingClassesInput | InstructorUpdateWithWhereUniqueWithoutTeachingClassesInput[]
    updateMany?: InstructorUpdateManyWithWhereWithoutTeachingClassesInput | InstructorUpdateManyWithWhereWithoutTeachingClassesInput[]
    deleteMany?: InstructorScalarWhereInput | InstructorScalarWhereInput[]
  }

  export type InstructorUpdateManyWithoutGradedClassesNestedInput = {
    create?: XOR<InstructorCreateWithoutGradedClassesInput, InstructorUncheckedCreateWithoutGradedClassesInput> | InstructorCreateWithoutGradedClassesInput[] | InstructorUncheckedCreateWithoutGradedClassesInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutGradedClassesInput | InstructorCreateOrConnectWithoutGradedClassesInput[]
    upsert?: InstructorUpsertWithWhereUniqueWithoutGradedClassesInput | InstructorUpsertWithWhereUniqueWithoutGradedClassesInput[]
    set?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    disconnect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    delete?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    update?: InstructorUpdateWithWhereUniqueWithoutGradedClassesInput | InstructorUpdateWithWhereUniqueWithoutGradedClassesInput[]
    updateMany?: InstructorUpdateManyWithWhereWithoutGradedClassesInput | InstructorUpdateManyWithWhereWithoutGradedClassesInput[]
    deleteMany?: InstructorScalarWhereInput | InstructorScalarWhereInput[]
  }

  export type ScheduleUpdateOneWithoutClassNestedInput = {
    create?: XOR<ScheduleCreateWithoutClassInput, ScheduleUncheckedCreateWithoutClassInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutClassInput
    upsert?: ScheduleUpsertWithoutClassInput
    disconnect?: ScheduleWhereInput | boolean
    delete?: ScheduleWhereInput | boolean
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutClassInput, ScheduleUpdateWithoutClassInput>, ScheduleUncheckedUpdateWithoutClassInput>
  }

  export type CourseUpdateOneRequiredWithoutCurrentClassesNestedInput = {
    create?: XOR<CourseCreateWithoutCurrentClassesInput, CourseUncheckedCreateWithoutCurrentClassesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCurrentClassesInput
    upsert?: CourseUpsertWithoutCurrentClassesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCurrentClassesInput, CourseUpdateWithoutCurrentClassesInput>, CourseUncheckedUpdateWithoutCurrentClassesInput>
  }

  export type InstructorUncheckedUpdateManyWithoutTeachingClassesNestedInput = {
    create?: XOR<InstructorCreateWithoutTeachingClassesInput, InstructorUncheckedCreateWithoutTeachingClassesInput> | InstructorCreateWithoutTeachingClassesInput[] | InstructorUncheckedCreateWithoutTeachingClassesInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutTeachingClassesInput | InstructorCreateOrConnectWithoutTeachingClassesInput[]
    upsert?: InstructorUpsertWithWhereUniqueWithoutTeachingClassesInput | InstructorUpsertWithWhereUniqueWithoutTeachingClassesInput[]
    set?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    disconnect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    delete?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    update?: InstructorUpdateWithWhereUniqueWithoutTeachingClassesInput | InstructorUpdateWithWhereUniqueWithoutTeachingClassesInput[]
    updateMany?: InstructorUpdateManyWithWhereWithoutTeachingClassesInput | InstructorUpdateManyWithWhereWithoutTeachingClassesInput[]
    deleteMany?: InstructorScalarWhereInput | InstructorScalarWhereInput[]
  }

  export type InstructorUncheckedUpdateManyWithoutGradedClassesNestedInput = {
    create?: XOR<InstructorCreateWithoutGradedClassesInput, InstructorUncheckedCreateWithoutGradedClassesInput> | InstructorCreateWithoutGradedClassesInput[] | InstructorUncheckedCreateWithoutGradedClassesInput[]
    connectOrCreate?: InstructorCreateOrConnectWithoutGradedClassesInput | InstructorCreateOrConnectWithoutGradedClassesInput[]
    upsert?: InstructorUpsertWithWhereUniqueWithoutGradedClassesInput | InstructorUpsertWithWhereUniqueWithoutGradedClassesInput[]
    set?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    disconnect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    delete?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    connect?: InstructorWhereUniqueInput | InstructorWhereUniqueInput[]
    update?: InstructorUpdateWithWhereUniqueWithoutGradedClassesInput | InstructorUpdateWithWhereUniqueWithoutGradedClassesInput[]
    updateMany?: InstructorUpdateManyWithWhereWithoutGradedClassesInput | InstructorUpdateManyWithWhereWithoutGradedClassesInput[]
    deleteMany?: InstructorScalarWhereInput | InstructorScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateOneWithoutClassNestedInput = {
    create?: XOR<ScheduleCreateWithoutClassInput, ScheduleUncheckedCreateWithoutClassInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutClassInput
    upsert?: ScheduleUpsertWithoutClassInput
    disconnect?: ScheduleWhereInput | boolean
    delete?: ScheduleWhereInput | boolean
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutClassInput, ScheduleUpdateWithoutClassInput>, ScheduleUncheckedUpdateWithoutClassInput>
  }

  export type ClassCreateNestedOneWithoutScheduleInput = {
    create?: XOR<ClassCreateWithoutScheduleInput, ClassUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: ClassCreateOrConnectWithoutScheduleInput
    connect?: ClassWhereUniqueInput
  }

  export type ClassUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: XOR<ClassCreateWithoutScheduleInput, ClassUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: ClassCreateOrConnectWithoutScheduleInput
    upsert?: ClassUpsertWithoutScheduleInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutScheduleInput, ClassUpdateWithoutScheduleInput>, ClassUncheckedUpdateWithoutScheduleInput>
  }

  export type PrerequisiteCreateNestedManyWithoutCourseInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type MajorCreateNestedManyWithoutRequiredCoursesInput = {
    create?: XOR<MajorCreateWithoutRequiredCoursesInput, MajorUncheckedCreateWithoutRequiredCoursesInput> | MajorCreateWithoutRequiredCoursesInput[] | MajorUncheckedCreateWithoutRequiredCoursesInput[]
    connectOrCreate?: MajorCreateOrConnectWithoutRequiredCoursesInput | MajorCreateOrConnectWithoutRequiredCoursesInput[]
    connect?: MajorWhereUniqueInput | MajorWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutCourseInput = {
    create?: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput> | ClassCreateWithoutCourseInput[] | ClassUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCourseInput | ClassCreateOrConnectWithoutCourseInput[]
    createMany?: ClassCreateManyCourseInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type PrerequisiteUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
  }

  export type MajorUncheckedCreateNestedManyWithoutRequiredCoursesInput = {
    create?: XOR<MajorCreateWithoutRequiredCoursesInput, MajorUncheckedCreateWithoutRequiredCoursesInput> | MajorCreateWithoutRequiredCoursesInput[] | MajorUncheckedCreateWithoutRequiredCoursesInput[]
    connectOrCreate?: MajorCreateOrConnectWithoutRequiredCoursesInput | MajorCreateOrConnectWithoutRequiredCoursesInput[]
    connect?: MajorWhereUniqueInput | MajorWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput> | ClassCreateWithoutCourseInput[] | ClassUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCourseInput | ClassCreateOrConnectWithoutCourseInput[]
    createMany?: ClassCreateManyCourseInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type PrerequisiteUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutCourseInput | PrerequisiteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutCourseInput | PrerequisiteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutCourseInput | PrerequisiteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type MajorUpdateManyWithoutRequiredCoursesNestedInput = {
    create?: XOR<MajorCreateWithoutRequiredCoursesInput, MajorUncheckedCreateWithoutRequiredCoursesInput> | MajorCreateWithoutRequiredCoursesInput[] | MajorUncheckedCreateWithoutRequiredCoursesInput[]
    connectOrCreate?: MajorCreateOrConnectWithoutRequiredCoursesInput | MajorCreateOrConnectWithoutRequiredCoursesInput[]
    upsert?: MajorUpsertWithWhereUniqueWithoutRequiredCoursesInput | MajorUpsertWithWhereUniqueWithoutRequiredCoursesInput[]
    set?: MajorWhereUniqueInput | MajorWhereUniqueInput[]
    disconnect?: MajorWhereUniqueInput | MajorWhereUniqueInput[]
    delete?: MajorWhereUniqueInput | MajorWhereUniqueInput[]
    connect?: MajorWhereUniqueInput | MajorWhereUniqueInput[]
    update?: MajorUpdateWithWhereUniqueWithoutRequiredCoursesInput | MajorUpdateWithWhereUniqueWithoutRequiredCoursesInput[]
    updateMany?: MajorUpdateManyWithWhereWithoutRequiredCoursesInput | MajorUpdateManyWithWhereWithoutRequiredCoursesInput[]
    deleteMany?: MajorScalarWhereInput | MajorScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput> | ClassCreateWithoutCourseInput[] | ClassUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCourseInput | ClassCreateOrConnectWithoutCourseInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutCourseInput | ClassUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ClassCreateManyCourseInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutCourseInput | ClassUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutCourseInput | ClassUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput> | PrerequisiteCreateWithoutCourseInput[] | PrerequisiteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PrerequisiteCreateOrConnectWithoutCourseInput | PrerequisiteCreateOrConnectWithoutCourseInput[]
    upsert?: PrerequisiteUpsertWithWhereUniqueWithoutCourseInput | PrerequisiteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PrerequisiteCreateManyCourseInputEnvelope
    set?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    disconnect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    delete?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    connect?: PrerequisiteWhereUniqueInput | PrerequisiteWhereUniqueInput[]
    update?: PrerequisiteUpdateWithWhereUniqueWithoutCourseInput | PrerequisiteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PrerequisiteUpdateManyWithWhereWithoutCourseInput | PrerequisiteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
  }

  export type MajorUncheckedUpdateManyWithoutRequiredCoursesNestedInput = {
    create?: XOR<MajorCreateWithoutRequiredCoursesInput, MajorUncheckedCreateWithoutRequiredCoursesInput> | MajorCreateWithoutRequiredCoursesInput[] | MajorUncheckedCreateWithoutRequiredCoursesInput[]
    connectOrCreate?: MajorCreateOrConnectWithoutRequiredCoursesInput | MajorCreateOrConnectWithoutRequiredCoursesInput[]
    upsert?: MajorUpsertWithWhereUniqueWithoutRequiredCoursesInput | MajorUpsertWithWhereUniqueWithoutRequiredCoursesInput[]
    set?: MajorWhereUniqueInput | MajorWhereUniqueInput[]
    disconnect?: MajorWhereUniqueInput | MajorWhereUniqueInput[]
    delete?: MajorWhereUniqueInput | MajorWhereUniqueInput[]
    connect?: MajorWhereUniqueInput | MajorWhereUniqueInput[]
    update?: MajorUpdateWithWhereUniqueWithoutRequiredCoursesInput | MajorUpdateWithWhereUniqueWithoutRequiredCoursesInput[]
    updateMany?: MajorUpdateManyWithWhereWithoutRequiredCoursesInput | MajorUpdateManyWithWhereWithoutRequiredCoursesInput[]
    deleteMany?: MajorScalarWhereInput | MajorScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput> | ClassCreateWithoutCourseInput[] | ClassUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCourseInput | ClassCreateOrConnectWithoutCourseInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutCourseInput | ClassUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ClassCreateManyCourseInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutCourseInput | ClassUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutCourseInput | ClassUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutPrerequisitesInput = {
    create?: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisitesInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutPrerequisitesNestedInput = {
    create?: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPrerequisitesInput
    upsert?: CourseUpsertWithoutPrerequisitesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutPrerequisitesInput, CourseUpdateWithoutPrerequisitesInput>, CourseUncheckedUpdateWithoutPrerequisitesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumThemePreferenceFilter<$PrismaModel = never> = {
    equals?: $Enums.ThemePreference | EnumThemePreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.ThemePreference[]
    notIn?: $Enums.ThemePreference[]
    not?: NestedEnumThemePreferenceFilter<$PrismaModel> | $Enums.ThemePreference
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumThemePreferenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ThemePreference | EnumThemePreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.ThemePreference[]
    notIn?: $Enums.ThemePreference[]
    not?: NestedEnumThemePreferenceWithAggregatesFilter<$PrismaModel> | $Enums.ThemePreference
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemePreferenceFilter<$PrismaModel>
    _max?: NestedEnumThemePreferenceFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CompletedCourseCreateWithoutStudentInput = {
    courseId: string
    letterGrade: string
  }

  export type CompletedCourseUncheckedCreateWithoutStudentInput = {
    id?: number
    courseId: string
    letterGrade: string
  }

  export type CompletedCourseCreateOrConnectWithoutStudentInput = {
    where: CompletedCourseWhereUniqueInput
    create: XOR<CompletedCourseCreateWithoutStudentInput, CompletedCourseUncheckedCreateWithoutStudentInput>
  }

  export type CompletedCourseCreateManyStudentInputEnvelope = {
    data: CompletedCourseCreateManyStudentInput | CompletedCourseCreateManyStudentInput[]
  }

  export type SemesterEnrollmentCreateWithoutStudentInput = {
    semester: string
    classes?: ClassEnrollmentCreateNestedManyWithoutSemesterEnrollmentInput
  }

  export type SemesterEnrollmentUncheckedCreateWithoutStudentInput = {
    id?: number
    semester: string
    classes?: ClassEnrollmentUncheckedCreateNestedManyWithoutSemesterEnrollmentInput
  }

  export type SemesterEnrollmentCreateOrConnectWithoutStudentInput = {
    where: SemesterEnrollmentWhereUniqueInput
    create: XOR<SemesterEnrollmentCreateWithoutStudentInput, SemesterEnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type SemesterEnrollmentCreateManyStudentInputEnvelope = {
    data: SemesterEnrollmentCreateManyStudentInput | SemesterEnrollmentCreateManyStudentInput[]
  }

  export type MajorCreateWithoutStudentsInput = {
    majorId: string
    majorName: string
    college: string
    department: string
    requiredCourses?: CourseCreateNestedManyWithoutMajorsOfferedInput
  }

  export type MajorUncheckedCreateWithoutStudentsInput = {
    majorId: string
    majorName: string
    college: string
    department: string
    requiredCourses?: CourseUncheckedCreateNestedManyWithoutMajorsOfferedInput
  }

  export type MajorCreateOrConnectWithoutStudentsInput = {
    where: MajorWhereUniqueInput
    create: XOR<MajorCreateWithoutStudentsInput, MajorUncheckedCreateWithoutStudentsInput>
  }

  export type CompletedCourseUpsertWithWhereUniqueWithoutStudentInput = {
    where: CompletedCourseWhereUniqueInput
    update: XOR<CompletedCourseUpdateWithoutStudentInput, CompletedCourseUncheckedUpdateWithoutStudentInput>
    create: XOR<CompletedCourseCreateWithoutStudentInput, CompletedCourseUncheckedCreateWithoutStudentInput>
  }

  export type CompletedCourseUpdateWithWhereUniqueWithoutStudentInput = {
    where: CompletedCourseWhereUniqueInput
    data: XOR<CompletedCourseUpdateWithoutStudentInput, CompletedCourseUncheckedUpdateWithoutStudentInput>
  }

  export type CompletedCourseUpdateManyWithWhereWithoutStudentInput = {
    where: CompletedCourseScalarWhereInput
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyWithoutStudentInput>
  }

  export type CompletedCourseScalarWhereInput = {
    AND?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
    OR?: CompletedCourseScalarWhereInput[]
    NOT?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
    id?: IntFilter<"CompletedCourse"> | number
    courseId?: StringFilter<"CompletedCourse"> | string
    letterGrade?: StringFilter<"CompletedCourse"> | string
    studentId?: StringFilter<"CompletedCourse"> | string
  }

  export type SemesterEnrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: SemesterEnrollmentWhereUniqueInput
    update: XOR<SemesterEnrollmentUpdateWithoutStudentInput, SemesterEnrollmentUncheckedUpdateWithoutStudentInput>
    create: XOR<SemesterEnrollmentCreateWithoutStudentInput, SemesterEnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type SemesterEnrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: SemesterEnrollmentWhereUniqueInput
    data: XOR<SemesterEnrollmentUpdateWithoutStudentInput, SemesterEnrollmentUncheckedUpdateWithoutStudentInput>
  }

  export type SemesterEnrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: SemesterEnrollmentScalarWhereInput
    data: XOR<SemesterEnrollmentUpdateManyMutationInput, SemesterEnrollmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type SemesterEnrollmentScalarWhereInput = {
    AND?: SemesterEnrollmentScalarWhereInput | SemesterEnrollmentScalarWhereInput[]
    OR?: SemesterEnrollmentScalarWhereInput[]
    NOT?: SemesterEnrollmentScalarWhereInput | SemesterEnrollmentScalarWhereInput[]
    id?: IntFilter<"SemesterEnrollment"> | number
    semester?: StringFilter<"SemesterEnrollment"> | string
    studentId?: StringFilter<"SemesterEnrollment"> | string
  }

  export type MajorUpsertWithoutStudentsInput = {
    update: XOR<MajorUpdateWithoutStudentsInput, MajorUncheckedUpdateWithoutStudentsInput>
    create: XOR<MajorCreateWithoutStudentsInput, MajorUncheckedCreateWithoutStudentsInput>
    where?: MajorWhereInput
  }

  export type MajorUpdateToOneWithWhereWithoutStudentsInput = {
    where?: MajorWhereInput
    data: XOR<MajorUpdateWithoutStudentsInput, MajorUncheckedUpdateWithoutStudentsInput>
  }

  export type MajorUpdateWithoutStudentsInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    requiredCourses?: CourseUpdateManyWithoutMajorsOfferedNestedInput
  }

  export type MajorUncheckedUpdateWithoutStudentsInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    requiredCourses?: CourseUncheckedUpdateManyWithoutMajorsOfferedNestedInput
  }

  export type ClassCreateWithoutInstructorsInput = {
    classId: string
    semester: string
    instructionalMethod: string
    campus: string
    enrollmentActual: number
    enrollmentMaximum: number
    classStatus: string
    gradedByInstructors?: InstructorCreateNestedManyWithoutGradedClassesInput
    schedule?: ScheduleCreateNestedOneWithoutClassInput
    course: CourseCreateNestedOneWithoutCurrentClassesInput
  }

  export type ClassUncheckedCreateWithoutInstructorsInput = {
    classId: string
    courseId: string
    semester: string
    instructionalMethod: string
    campus: string
    enrollmentActual: number
    enrollmentMaximum: number
    classStatus: string
    gradedByInstructors?: InstructorUncheckedCreateNestedManyWithoutGradedClassesInput
    schedule?: ScheduleUncheckedCreateNestedOneWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutInstructorsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutInstructorsInput, ClassUncheckedCreateWithoutInstructorsInput>
  }

  export type ClassCreateWithoutGradedByInstructorsInput = {
    classId: string
    semester: string
    instructionalMethod: string
    campus: string
    enrollmentActual: number
    enrollmentMaximum: number
    classStatus: string
    instructors?: InstructorCreateNestedManyWithoutTeachingClassesInput
    schedule?: ScheduleCreateNestedOneWithoutClassInput
    course: CourseCreateNestedOneWithoutCurrentClassesInput
  }

  export type ClassUncheckedCreateWithoutGradedByInstructorsInput = {
    classId: string
    courseId: string
    semester: string
    instructionalMethod: string
    campus: string
    enrollmentActual: number
    enrollmentMaximum: number
    classStatus: string
    instructors?: InstructorUncheckedCreateNestedManyWithoutTeachingClassesInput
    schedule?: ScheduleUncheckedCreateNestedOneWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutGradedByInstructorsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutGradedByInstructorsInput, ClassUncheckedCreateWithoutGradedByInstructorsInput>
  }

  export type ClassUpsertWithWhereUniqueWithoutInstructorsInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutInstructorsInput, ClassUncheckedUpdateWithoutInstructorsInput>
    create: XOR<ClassCreateWithoutInstructorsInput, ClassUncheckedCreateWithoutInstructorsInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutInstructorsInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutInstructorsInput, ClassUncheckedUpdateWithoutInstructorsInput>
  }

  export type ClassUpdateManyWithWhereWithoutInstructorsInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutInstructorsInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    classId?: StringFilter<"Class"> | string
    courseId?: StringFilter<"Class"> | string
    semester?: StringFilter<"Class"> | string
    instructionalMethod?: StringFilter<"Class"> | string
    campus?: StringFilter<"Class"> | string
    enrollmentActual?: IntFilter<"Class"> | number
    enrollmentMaximum?: IntFilter<"Class"> | number
    classStatus?: StringFilter<"Class"> | string
  }

  export type ClassUpsertWithWhereUniqueWithoutGradedByInstructorsInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutGradedByInstructorsInput, ClassUncheckedUpdateWithoutGradedByInstructorsInput>
    create: XOR<ClassCreateWithoutGradedByInstructorsInput, ClassUncheckedCreateWithoutGradedByInstructorsInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutGradedByInstructorsInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutGradedByInstructorsInput, ClassUncheckedUpdateWithoutGradedByInstructorsInput>
  }

  export type ClassUpdateManyWithWhereWithoutGradedByInstructorsInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutGradedByInstructorsInput>
  }

  export type CourseCreateWithoutMajorsOfferedInput = {
    courseId: string
    courseName: string
    creditHours: number
    subject: string
    courseNumber: string
    description: string
    courseImage: string
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    currentClasses?: ClassCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutMajorsOfferedInput = {
    courseId: string
    courseName: string
    creditHours: number
    subject: string
    courseNumber: string
    description: string
    courseImage: string
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    currentClasses?: ClassUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutMajorsOfferedInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutMajorsOfferedInput, CourseUncheckedCreateWithoutMajorsOfferedInput>
  }

  export type StudentCreateWithoutMajorIdInput = {
    studentId: string
    email: string
    college: string
    department: string
    completedCourses?: CompletedCourseCreateNestedManyWithoutStudentInput
    semesterEnrollment?: SemesterEnrollmentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutMajorIdInput = {
    studentId: string
    email: string
    college: string
    department: string
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutStudentInput
    semesterEnrollment?: SemesterEnrollmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutMajorIdInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutMajorIdInput, StudentUncheckedCreateWithoutMajorIdInput>
  }

  export type StudentCreateManyMajorIdInputEnvelope = {
    data: StudentCreateManyMajorIdInput | StudentCreateManyMajorIdInput[]
  }

  export type CourseUpsertWithWhereUniqueWithoutMajorsOfferedInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutMajorsOfferedInput, CourseUncheckedUpdateWithoutMajorsOfferedInput>
    create: XOR<CourseCreateWithoutMajorsOfferedInput, CourseUncheckedCreateWithoutMajorsOfferedInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutMajorsOfferedInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutMajorsOfferedInput, CourseUncheckedUpdateWithoutMajorsOfferedInput>
  }

  export type CourseUpdateManyWithWhereWithoutMajorsOfferedInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutMajorsOfferedInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    courseId?: StringFilter<"Course"> | string
    courseName?: StringFilter<"Course"> | string
    creditHours?: IntFilter<"Course"> | number
    subject?: StringFilter<"Course"> | string
    courseNumber?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    courseImage?: StringFilter<"Course"> | string
  }

  export type StudentUpsertWithWhereUniqueWithoutMajorIdInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutMajorIdInput, StudentUncheckedUpdateWithoutMajorIdInput>
    create: XOR<StudentCreateWithoutMajorIdInput, StudentUncheckedCreateWithoutMajorIdInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutMajorIdInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutMajorIdInput, StudentUncheckedUpdateWithoutMajorIdInput>
  }

  export type StudentUpdateManyWithWhereWithoutMajorIdInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutMajorIdInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    studentId?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    college?: StringFilter<"Student"> | string
    department?: StringFilter<"Student"> | string
    majorIdField?: StringNullableFilter<"Student"> | string | null
  }

  export type StudentCreateWithoutCompletedCoursesInput = {
    studentId: string
    email: string
    college: string
    department: string
    semesterEnrollment?: SemesterEnrollmentCreateNestedManyWithoutStudentInput
    majorId?: MajorCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutCompletedCoursesInput = {
    studentId: string
    email: string
    college: string
    department: string
    majorIdField?: string | null
    semesterEnrollment?: SemesterEnrollmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutCompletedCoursesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCompletedCoursesInput, StudentUncheckedCreateWithoutCompletedCoursesInput>
  }

  export type StudentUpsertWithoutCompletedCoursesInput = {
    update: XOR<StudentUpdateWithoutCompletedCoursesInput, StudentUncheckedUpdateWithoutCompletedCoursesInput>
    create: XOR<StudentCreateWithoutCompletedCoursesInput, StudentUncheckedCreateWithoutCompletedCoursesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutCompletedCoursesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutCompletedCoursesInput, StudentUncheckedUpdateWithoutCompletedCoursesInput>
  }

  export type StudentUpdateWithoutCompletedCoursesInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    semesterEnrollment?: SemesterEnrollmentUpdateManyWithoutStudentNestedInput
    majorId?: MajorUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutCompletedCoursesInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    majorIdField?: NullableStringFieldUpdateOperationsInput | string | null
    semesterEnrollment?: SemesterEnrollmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateWithoutSemesterEnrollmentInput = {
    studentId: string
    email: string
    college: string
    department: string
    completedCourses?: CompletedCourseCreateNestedManyWithoutStudentInput
    majorId?: MajorCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutSemesterEnrollmentInput = {
    studentId: string
    email: string
    college: string
    department: string
    majorIdField?: string | null
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSemesterEnrollmentInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSemesterEnrollmentInput, StudentUncheckedCreateWithoutSemesterEnrollmentInput>
  }

  export type ClassEnrollmentCreateWithoutSemesterEnrollmentInput = {
    classId: string
    courseId: string
    gradeStatus: string
    letterGrade: string
  }

  export type ClassEnrollmentUncheckedCreateWithoutSemesterEnrollmentInput = {
    id?: number
    classId: string
    courseId: string
    gradeStatus: string
    letterGrade: string
  }

  export type ClassEnrollmentCreateOrConnectWithoutSemesterEnrollmentInput = {
    where: ClassEnrollmentWhereUniqueInput
    create: XOR<ClassEnrollmentCreateWithoutSemesterEnrollmentInput, ClassEnrollmentUncheckedCreateWithoutSemesterEnrollmentInput>
  }

  export type ClassEnrollmentCreateManySemesterEnrollmentInputEnvelope = {
    data: ClassEnrollmentCreateManySemesterEnrollmentInput | ClassEnrollmentCreateManySemesterEnrollmentInput[]
  }

  export type StudentUpsertWithoutSemesterEnrollmentInput = {
    update: XOR<StudentUpdateWithoutSemesterEnrollmentInput, StudentUncheckedUpdateWithoutSemesterEnrollmentInput>
    create: XOR<StudentCreateWithoutSemesterEnrollmentInput, StudentUncheckedCreateWithoutSemesterEnrollmentInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSemesterEnrollmentInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSemesterEnrollmentInput, StudentUncheckedUpdateWithoutSemesterEnrollmentInput>
  }

  export type StudentUpdateWithoutSemesterEnrollmentInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    completedCourses?: CompletedCourseUpdateManyWithoutStudentNestedInput
    majorId?: MajorUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutSemesterEnrollmentInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    majorIdField?: NullableStringFieldUpdateOperationsInput | string | null
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ClassEnrollmentUpsertWithWhereUniqueWithoutSemesterEnrollmentInput = {
    where: ClassEnrollmentWhereUniqueInput
    update: XOR<ClassEnrollmentUpdateWithoutSemesterEnrollmentInput, ClassEnrollmentUncheckedUpdateWithoutSemesterEnrollmentInput>
    create: XOR<ClassEnrollmentCreateWithoutSemesterEnrollmentInput, ClassEnrollmentUncheckedCreateWithoutSemesterEnrollmentInput>
  }

  export type ClassEnrollmentUpdateWithWhereUniqueWithoutSemesterEnrollmentInput = {
    where: ClassEnrollmentWhereUniqueInput
    data: XOR<ClassEnrollmentUpdateWithoutSemesterEnrollmentInput, ClassEnrollmentUncheckedUpdateWithoutSemesterEnrollmentInput>
  }

  export type ClassEnrollmentUpdateManyWithWhereWithoutSemesterEnrollmentInput = {
    where: ClassEnrollmentScalarWhereInput
    data: XOR<ClassEnrollmentUpdateManyMutationInput, ClassEnrollmentUncheckedUpdateManyWithoutSemesterEnrollmentInput>
  }

  export type ClassEnrollmentScalarWhereInput = {
    AND?: ClassEnrollmentScalarWhereInput | ClassEnrollmentScalarWhereInput[]
    OR?: ClassEnrollmentScalarWhereInput[]
    NOT?: ClassEnrollmentScalarWhereInput | ClassEnrollmentScalarWhereInput[]
    id?: IntFilter<"ClassEnrollment"> | number
    classId?: StringFilter<"ClassEnrollment"> | string
    courseId?: StringFilter<"ClassEnrollment"> | string
    gradeStatus?: StringFilter<"ClassEnrollment"> | string
    letterGrade?: StringFilter<"ClassEnrollment"> | string
    semesterEnrollmentId?: IntFilter<"ClassEnrollment"> | number
  }

  export type SemesterEnrollmentCreateWithoutClassesInput = {
    semester: string
    student: StudentCreateNestedOneWithoutSemesterEnrollmentInput
  }

  export type SemesterEnrollmentUncheckedCreateWithoutClassesInput = {
    id?: number
    semester: string
    studentId: string
  }

  export type SemesterEnrollmentCreateOrConnectWithoutClassesInput = {
    where: SemesterEnrollmentWhereUniqueInput
    create: XOR<SemesterEnrollmentCreateWithoutClassesInput, SemesterEnrollmentUncheckedCreateWithoutClassesInput>
  }

  export type SemesterEnrollmentUpsertWithoutClassesInput = {
    update: XOR<SemesterEnrollmentUpdateWithoutClassesInput, SemesterEnrollmentUncheckedUpdateWithoutClassesInput>
    create: XOR<SemesterEnrollmentCreateWithoutClassesInput, SemesterEnrollmentUncheckedCreateWithoutClassesInput>
    where?: SemesterEnrollmentWhereInput
  }

  export type SemesterEnrollmentUpdateToOneWithWhereWithoutClassesInput = {
    where?: SemesterEnrollmentWhereInput
    data: XOR<SemesterEnrollmentUpdateWithoutClassesInput, SemesterEnrollmentUncheckedUpdateWithoutClassesInput>
  }

  export type SemesterEnrollmentUpdateWithoutClassesInput = {
    semester?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutSemesterEnrollmentNestedInput
  }

  export type SemesterEnrollmentUncheckedUpdateWithoutClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorCreateWithoutTeachingClassesInput = {
    instructorId: string
    email: string
    college: string
    department: string
    expertise: string
    gradedClasses?: ClassCreateNestedManyWithoutGradedByInstructorsInput
  }

  export type InstructorUncheckedCreateWithoutTeachingClassesInput = {
    instructorId: string
    email: string
    college: string
    department: string
    expertise: string
    gradedClasses?: ClassUncheckedCreateNestedManyWithoutGradedByInstructorsInput
  }

  export type InstructorCreateOrConnectWithoutTeachingClassesInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutTeachingClassesInput, InstructorUncheckedCreateWithoutTeachingClassesInput>
  }

  export type InstructorCreateWithoutGradedClassesInput = {
    instructorId: string
    email: string
    college: string
    department: string
    expertise: string
    teachingClasses?: ClassCreateNestedManyWithoutInstructorsInput
  }

  export type InstructorUncheckedCreateWithoutGradedClassesInput = {
    instructorId: string
    email: string
    college: string
    department: string
    expertise: string
    teachingClasses?: ClassUncheckedCreateNestedManyWithoutInstructorsInput
  }

  export type InstructorCreateOrConnectWithoutGradedClassesInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutGradedClassesInput, InstructorUncheckedCreateWithoutGradedClassesInput>
  }

  export type ScheduleCreateWithoutClassInput = {
    scheduleType: string
    startTime: string
    endTime: string
  }

  export type ScheduleUncheckedCreateWithoutClassInput = {
    scheduleType: string
    startTime: string
    endTime: string
  }

  export type ScheduleCreateOrConnectWithoutClassInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutClassInput, ScheduleUncheckedCreateWithoutClassInput>
  }

  export type CourseCreateWithoutCurrentClassesInput = {
    courseId: string
    courseName: string
    creditHours: number
    subject: string
    courseNumber: string
    description: string
    courseImage: string
    prerequisites?: PrerequisiteCreateNestedManyWithoutCourseInput
    majorsOffered?: MajorCreateNestedManyWithoutRequiredCoursesInput
  }

  export type CourseUncheckedCreateWithoutCurrentClassesInput = {
    courseId: string
    courseName: string
    creditHours: number
    subject: string
    courseNumber: string
    description: string
    courseImage: string
    prerequisites?: PrerequisiteUncheckedCreateNestedManyWithoutCourseInput
    majorsOffered?: MajorUncheckedCreateNestedManyWithoutRequiredCoursesInput
  }

  export type CourseCreateOrConnectWithoutCurrentClassesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCurrentClassesInput, CourseUncheckedCreateWithoutCurrentClassesInput>
  }

  export type InstructorUpsertWithWhereUniqueWithoutTeachingClassesInput = {
    where: InstructorWhereUniqueInput
    update: XOR<InstructorUpdateWithoutTeachingClassesInput, InstructorUncheckedUpdateWithoutTeachingClassesInput>
    create: XOR<InstructorCreateWithoutTeachingClassesInput, InstructorUncheckedCreateWithoutTeachingClassesInput>
  }

  export type InstructorUpdateWithWhereUniqueWithoutTeachingClassesInput = {
    where: InstructorWhereUniqueInput
    data: XOR<InstructorUpdateWithoutTeachingClassesInput, InstructorUncheckedUpdateWithoutTeachingClassesInput>
  }

  export type InstructorUpdateManyWithWhereWithoutTeachingClassesInput = {
    where: InstructorScalarWhereInput
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyWithoutTeachingClassesInput>
  }

  export type InstructorScalarWhereInput = {
    AND?: InstructorScalarWhereInput | InstructorScalarWhereInput[]
    OR?: InstructorScalarWhereInput[]
    NOT?: InstructorScalarWhereInput | InstructorScalarWhereInput[]
    instructorId?: StringFilter<"Instructor"> | string
    email?: StringFilter<"Instructor"> | string
    college?: StringFilter<"Instructor"> | string
    department?: StringFilter<"Instructor"> | string
    expertise?: StringFilter<"Instructor"> | string
  }

  export type InstructorUpsertWithWhereUniqueWithoutGradedClassesInput = {
    where: InstructorWhereUniqueInput
    update: XOR<InstructorUpdateWithoutGradedClassesInput, InstructorUncheckedUpdateWithoutGradedClassesInput>
    create: XOR<InstructorCreateWithoutGradedClassesInput, InstructorUncheckedCreateWithoutGradedClassesInput>
  }

  export type InstructorUpdateWithWhereUniqueWithoutGradedClassesInput = {
    where: InstructorWhereUniqueInput
    data: XOR<InstructorUpdateWithoutGradedClassesInput, InstructorUncheckedUpdateWithoutGradedClassesInput>
  }

  export type InstructorUpdateManyWithWhereWithoutGradedClassesInput = {
    where: InstructorScalarWhereInput
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyWithoutGradedClassesInput>
  }

  export type ScheduleUpsertWithoutClassInput = {
    update: XOR<ScheduleUpdateWithoutClassInput, ScheduleUncheckedUpdateWithoutClassInput>
    create: XOR<ScheduleCreateWithoutClassInput, ScheduleUncheckedCreateWithoutClassInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutClassInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutClassInput, ScheduleUncheckedUpdateWithoutClassInput>
  }

  export type ScheduleUpdateWithoutClassInput = {
    scheduleType?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUncheckedUpdateWithoutClassInput = {
    scheduleType?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUpsertWithoutCurrentClassesInput = {
    update: XOR<CourseUpdateWithoutCurrentClassesInput, CourseUncheckedUpdateWithoutCurrentClassesInput>
    create: XOR<CourseCreateWithoutCurrentClassesInput, CourseUncheckedCreateWithoutCurrentClassesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCurrentClassesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCurrentClassesInput, CourseUncheckedUpdateWithoutCurrentClassesInput>
  }

  export type CourseUpdateWithoutCurrentClassesInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    creditHours?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    courseNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseImage?: StringFieldUpdateOperationsInput | string
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    majorsOffered?: MajorUpdateManyWithoutRequiredCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutCurrentClassesInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    creditHours?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    courseNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseImage?: StringFieldUpdateOperationsInput | string
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    majorsOffered?: MajorUncheckedUpdateManyWithoutRequiredCoursesNestedInput
  }

  export type ClassCreateWithoutScheduleInput = {
    classId: string
    semester: string
    instructionalMethod: string
    campus: string
    enrollmentActual: number
    enrollmentMaximum: number
    classStatus: string
    instructors?: InstructorCreateNestedManyWithoutTeachingClassesInput
    gradedByInstructors?: InstructorCreateNestedManyWithoutGradedClassesInput
    course: CourseCreateNestedOneWithoutCurrentClassesInput
  }

  export type ClassUncheckedCreateWithoutScheduleInput = {
    classId: string
    courseId: string
    semester: string
    instructionalMethod: string
    campus: string
    enrollmentActual: number
    enrollmentMaximum: number
    classStatus: string
    instructors?: InstructorUncheckedCreateNestedManyWithoutTeachingClassesInput
    gradedByInstructors?: InstructorUncheckedCreateNestedManyWithoutGradedClassesInput
  }

  export type ClassCreateOrConnectWithoutScheduleInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutScheduleInput, ClassUncheckedCreateWithoutScheduleInput>
  }

  export type ClassUpsertWithoutScheduleInput = {
    update: XOR<ClassUpdateWithoutScheduleInput, ClassUncheckedUpdateWithoutScheduleInput>
    create: XOR<ClassCreateWithoutScheduleInput, ClassUncheckedCreateWithoutScheduleInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutScheduleInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutScheduleInput, ClassUncheckedUpdateWithoutScheduleInput>
  }

  export type ClassUpdateWithoutScheduleInput = {
    classId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
    instructors?: InstructorUpdateManyWithoutTeachingClassesNestedInput
    gradedByInstructors?: InstructorUpdateManyWithoutGradedClassesNestedInput
    course?: CourseUpdateOneRequiredWithoutCurrentClassesNestedInput
  }

  export type ClassUncheckedUpdateWithoutScheduleInput = {
    classId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
    instructors?: InstructorUncheckedUpdateManyWithoutTeachingClassesNestedInput
    gradedByInstructors?: InstructorUncheckedUpdateManyWithoutGradedClassesNestedInput
  }

  export type PrerequisiteCreateWithoutCourseInput = {
    minGrade: string
  }

  export type PrerequisiteUncheckedCreateWithoutCourseInput = {
    id?: number
    minGrade: string
  }

  export type PrerequisiteCreateOrConnectWithoutCourseInput = {
    where: PrerequisiteWhereUniqueInput
    create: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput>
  }

  export type PrerequisiteCreateManyCourseInputEnvelope = {
    data: PrerequisiteCreateManyCourseInput | PrerequisiteCreateManyCourseInput[]
  }

  export type MajorCreateWithoutRequiredCoursesInput = {
    majorId: string
    majorName: string
    college: string
    department: string
    students?: StudentCreateNestedManyWithoutMajorIdInput
  }

  export type MajorUncheckedCreateWithoutRequiredCoursesInput = {
    majorId: string
    majorName: string
    college: string
    department: string
    students?: StudentUncheckedCreateNestedManyWithoutMajorIdInput
  }

  export type MajorCreateOrConnectWithoutRequiredCoursesInput = {
    where: MajorWhereUniqueInput
    create: XOR<MajorCreateWithoutRequiredCoursesInput, MajorUncheckedCreateWithoutRequiredCoursesInput>
  }

  export type ClassCreateWithoutCourseInput = {
    classId: string
    semester: string
    instructionalMethod: string
    campus: string
    enrollmentActual: number
    enrollmentMaximum: number
    classStatus: string
    instructors?: InstructorCreateNestedManyWithoutTeachingClassesInput
    gradedByInstructors?: InstructorCreateNestedManyWithoutGradedClassesInput
    schedule?: ScheduleCreateNestedOneWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutCourseInput = {
    classId: string
    semester: string
    instructionalMethod: string
    campus: string
    enrollmentActual: number
    enrollmentMaximum: number
    classStatus: string
    instructors?: InstructorUncheckedCreateNestedManyWithoutTeachingClassesInput
    gradedByInstructors?: InstructorUncheckedCreateNestedManyWithoutGradedClassesInput
    schedule?: ScheduleUncheckedCreateNestedOneWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutCourseInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput>
  }

  export type ClassCreateManyCourseInputEnvelope = {
    data: ClassCreateManyCourseInput | ClassCreateManyCourseInput[]
  }

  export type PrerequisiteUpsertWithWhereUniqueWithoutCourseInput = {
    where: PrerequisiteWhereUniqueInput
    update: XOR<PrerequisiteUpdateWithoutCourseInput, PrerequisiteUncheckedUpdateWithoutCourseInput>
    create: XOR<PrerequisiteCreateWithoutCourseInput, PrerequisiteUncheckedCreateWithoutCourseInput>
  }

  export type PrerequisiteUpdateWithWhereUniqueWithoutCourseInput = {
    where: PrerequisiteWhereUniqueInput
    data: XOR<PrerequisiteUpdateWithoutCourseInput, PrerequisiteUncheckedUpdateWithoutCourseInput>
  }

  export type PrerequisiteUpdateManyWithWhereWithoutCourseInput = {
    where: PrerequisiteScalarWhereInput
    data: XOR<PrerequisiteUpdateManyMutationInput, PrerequisiteUncheckedUpdateManyWithoutCourseInput>
  }

  export type PrerequisiteScalarWhereInput = {
    AND?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
    OR?: PrerequisiteScalarWhereInput[]
    NOT?: PrerequisiteScalarWhereInput | PrerequisiteScalarWhereInput[]
    id?: IntFilter<"Prerequisite"> | number
    courseId?: StringFilter<"Prerequisite"> | string
    minGrade?: StringFilter<"Prerequisite"> | string
  }

  export type MajorUpsertWithWhereUniqueWithoutRequiredCoursesInput = {
    where: MajorWhereUniqueInput
    update: XOR<MajorUpdateWithoutRequiredCoursesInput, MajorUncheckedUpdateWithoutRequiredCoursesInput>
    create: XOR<MajorCreateWithoutRequiredCoursesInput, MajorUncheckedCreateWithoutRequiredCoursesInput>
  }

  export type MajorUpdateWithWhereUniqueWithoutRequiredCoursesInput = {
    where: MajorWhereUniqueInput
    data: XOR<MajorUpdateWithoutRequiredCoursesInput, MajorUncheckedUpdateWithoutRequiredCoursesInput>
  }

  export type MajorUpdateManyWithWhereWithoutRequiredCoursesInput = {
    where: MajorScalarWhereInput
    data: XOR<MajorUpdateManyMutationInput, MajorUncheckedUpdateManyWithoutRequiredCoursesInput>
  }

  export type MajorScalarWhereInput = {
    AND?: MajorScalarWhereInput | MajorScalarWhereInput[]
    OR?: MajorScalarWhereInput[]
    NOT?: MajorScalarWhereInput | MajorScalarWhereInput[]
    majorId?: StringFilter<"Major"> | string
    majorName?: StringFilter<"Major"> | string
    college?: StringFilter<"Major"> | string
    department?: StringFilter<"Major"> | string
  }

  export type ClassUpsertWithWhereUniqueWithoutCourseInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutCourseInput, ClassUncheckedUpdateWithoutCourseInput>
    create: XOR<ClassCreateWithoutCourseInput, ClassUncheckedCreateWithoutCourseInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutCourseInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutCourseInput, ClassUncheckedUpdateWithoutCourseInput>
  }

  export type ClassUpdateManyWithWhereWithoutCourseInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutPrerequisitesInput = {
    courseId: string
    courseName: string
    creditHours: number
    subject: string
    courseNumber: string
    description: string
    courseImage: string
    majorsOffered?: MajorCreateNestedManyWithoutRequiredCoursesInput
    currentClasses?: ClassCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutPrerequisitesInput = {
    courseId: string
    courseName: string
    creditHours: number
    subject: string
    courseNumber: string
    description: string
    courseImage: string
    majorsOffered?: MajorUncheckedCreateNestedManyWithoutRequiredCoursesInput
    currentClasses?: ClassUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutPrerequisitesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
  }

  export type CourseUpsertWithoutPrerequisitesInput = {
    update: XOR<CourseUpdateWithoutPrerequisitesInput, CourseUncheckedUpdateWithoutPrerequisitesInput>
    create: XOR<CourseCreateWithoutPrerequisitesInput, CourseUncheckedCreateWithoutPrerequisitesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutPrerequisitesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutPrerequisitesInput, CourseUncheckedUpdateWithoutPrerequisitesInput>
  }

  export type CourseUpdateWithoutPrerequisitesInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    creditHours?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    courseNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseImage?: StringFieldUpdateOperationsInput | string
    majorsOffered?: MajorUpdateManyWithoutRequiredCoursesNestedInput
    currentClasses?: ClassUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutPrerequisitesInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    creditHours?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    courseNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseImage?: StringFieldUpdateOperationsInput | string
    majorsOffered?: MajorUncheckedUpdateManyWithoutRequiredCoursesNestedInput
    currentClasses?: ClassUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CompletedCourseCreateManyStudentInput = {
    id?: number
    courseId: string
    letterGrade: string
  }

  export type SemesterEnrollmentCreateManyStudentInput = {
    id?: number
    semester: string
  }

  export type CompletedCourseUpdateWithoutStudentInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    letterGrade?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedCourseUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    letterGrade?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedCourseUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    letterGrade?: StringFieldUpdateOperationsInput | string
  }

  export type SemesterEnrollmentUpdateWithoutStudentInput = {
    semester?: StringFieldUpdateOperationsInput | string
    classes?: ClassEnrollmentUpdateManyWithoutSemesterEnrollmentNestedInput
  }

  export type SemesterEnrollmentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
    classes?: ClassEnrollmentUncheckedUpdateManyWithoutSemesterEnrollmentNestedInput
  }

  export type SemesterEnrollmentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    semester?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUpdateWithoutInstructorsInput = {
    classId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
    gradedByInstructors?: InstructorUpdateManyWithoutGradedClassesNestedInput
    schedule?: ScheduleUpdateOneWithoutClassNestedInput
    course?: CourseUpdateOneRequiredWithoutCurrentClassesNestedInput
  }

  export type ClassUncheckedUpdateWithoutInstructorsInput = {
    classId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
    gradedByInstructors?: InstructorUncheckedUpdateManyWithoutGradedClassesNestedInput
    schedule?: ScheduleUncheckedUpdateOneWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutInstructorsInput = {
    classId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUpdateWithoutGradedByInstructorsInput = {
    classId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
    instructors?: InstructorUpdateManyWithoutTeachingClassesNestedInput
    schedule?: ScheduleUpdateOneWithoutClassNestedInput
    course?: CourseUpdateOneRequiredWithoutCurrentClassesNestedInput
  }

  export type ClassUncheckedUpdateWithoutGradedByInstructorsInput = {
    classId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
    instructors?: InstructorUncheckedUpdateManyWithoutTeachingClassesNestedInput
    schedule?: ScheduleUncheckedUpdateOneWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutGradedByInstructorsInput = {
    classId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateManyMajorIdInput = {
    studentId: string
    email: string
    college: string
    department: string
  }

  export type CourseUpdateWithoutMajorsOfferedInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    creditHours?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    courseNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseImage?: StringFieldUpdateOperationsInput | string
    prerequisites?: PrerequisiteUpdateManyWithoutCourseNestedInput
    currentClasses?: ClassUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutMajorsOfferedInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    creditHours?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    courseNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseImage?: StringFieldUpdateOperationsInput | string
    prerequisites?: PrerequisiteUncheckedUpdateManyWithoutCourseNestedInput
    currentClasses?: ClassUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutMajorsOfferedInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    creditHours?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    courseNumber?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    courseImage?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUpdateWithoutMajorIdInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    completedCourses?: CompletedCourseUpdateManyWithoutStudentNestedInput
    semesterEnrollment?: SemesterEnrollmentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutMajorIdInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutStudentNestedInput
    semesterEnrollment?: SemesterEnrollmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutMajorIdInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type ClassEnrollmentCreateManySemesterEnrollmentInput = {
    id?: number
    classId: string
    courseId: string
    gradeStatus: string
    letterGrade: string
  }

  export type ClassEnrollmentUpdateWithoutSemesterEnrollmentInput = {
    classId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    gradeStatus?: StringFieldUpdateOperationsInput | string
    letterGrade?: StringFieldUpdateOperationsInput | string
  }

  export type ClassEnrollmentUncheckedUpdateWithoutSemesterEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    gradeStatus?: StringFieldUpdateOperationsInput | string
    letterGrade?: StringFieldUpdateOperationsInput | string
  }

  export type ClassEnrollmentUncheckedUpdateManyWithoutSemesterEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    gradeStatus?: StringFieldUpdateOperationsInput | string
    letterGrade?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorUpdateWithoutTeachingClassesInput = {
    instructorId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    gradedClasses?: ClassUpdateManyWithoutGradedByInstructorsNestedInput
  }

  export type InstructorUncheckedUpdateWithoutTeachingClassesInput = {
    instructorId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    gradedClasses?: ClassUncheckedUpdateManyWithoutGradedByInstructorsNestedInput
  }

  export type InstructorUncheckedUpdateManyWithoutTeachingClassesInput = {
    instructorId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorUpdateWithoutGradedClassesInput = {
    instructorId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    teachingClasses?: ClassUpdateManyWithoutInstructorsNestedInput
  }

  export type InstructorUncheckedUpdateWithoutGradedClassesInput = {
    instructorId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    teachingClasses?: ClassUncheckedUpdateManyWithoutInstructorsNestedInput
  }

  export type InstructorUncheckedUpdateManyWithoutGradedClassesInput = {
    instructorId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
  }

  export type PrerequisiteCreateManyCourseInput = {
    id?: number
    minGrade: string
  }

  export type ClassCreateManyCourseInput = {
    classId: string
    semester: string
    instructionalMethod: string
    campus: string
    enrollmentActual: number
    enrollmentMaximum: number
    classStatus: string
  }

  export type PrerequisiteUpdateWithoutCourseInput = {
    minGrade?: StringFieldUpdateOperationsInput | string
  }

  export type PrerequisiteUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    minGrade?: StringFieldUpdateOperationsInput | string
  }

  export type PrerequisiteUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    minGrade?: StringFieldUpdateOperationsInput | string
  }

  export type MajorUpdateWithoutRequiredCoursesInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    students?: StudentUpdateManyWithoutMajorIdNestedInput
  }

  export type MajorUncheckedUpdateWithoutRequiredCoursesInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    students?: StudentUncheckedUpdateManyWithoutMajorIdNestedInput
  }

  export type MajorUncheckedUpdateManyWithoutRequiredCoursesInput = {
    majorId?: StringFieldUpdateOperationsInput | string
    majorName?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUpdateWithoutCourseInput = {
    classId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
    instructors?: InstructorUpdateManyWithoutTeachingClassesNestedInput
    gradedByInstructors?: InstructorUpdateManyWithoutGradedClassesNestedInput
    schedule?: ScheduleUpdateOneWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutCourseInput = {
    classId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
    instructors?: InstructorUncheckedUpdateManyWithoutTeachingClassesNestedInput
    gradedByInstructors?: InstructorUncheckedUpdateManyWithoutGradedClassesNestedInput
    schedule?: ScheduleUncheckedUpdateOneWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutCourseInput = {
    classId?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    instructionalMethod?: StringFieldUpdateOperationsInput | string
    campus?: StringFieldUpdateOperationsInput | string
    enrollmentActual?: IntFieldUpdateOperationsInput | number
    enrollmentMaximum?: IntFieldUpdateOperationsInput | number
    classStatus?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}