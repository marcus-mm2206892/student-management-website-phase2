"use client";

import { getCoursesAction } from "@/app/action/server-actions";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import EmptyContent from "@/app/components/EmptyContent";
import NoResults from "@/app/components/NoResults";
import CourseModal from "@/app/components/CourseModal";


import styles from '@/app/styles/student-home-page.module.css';
import discoverStyles from '@/app/styles/course-card-discover.module.css';

const cycleTexts = [
  'courses',
  'track your progress',
  'plan your academic journey'
];

export default function StudentHome() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([])

  async function loadCourses() {
    const initialCourses = await getCoursesAction();
    setCourses(initialCourses);
  }

  useEffect( () => {loadCourses()}, [] )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cycleTexts.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const recommendedCourses = [];
  const supplementaryCourses = [];
  const electiveCourses = [];

  return (
    <>
      {/* {JSON.stringify(courses[0])} */}
      <main className={styles["student-home"]}>
        <section className={styles.hero}>
          <h1>
            Explore{' '}
            {cycleTexts.map((text, idx) => (
              <span
                key={idx}
                className={`${styles["cycle-text"]} ${currentIndex === idx ? styles.active : ''}`}
              >
                {text}
                {idx < cycleTexts.length - 1 ? (idx === cycleTexts.length - 2 ? ', and ' : ', ') : ' '} 
              </span>
            ))}
            effortlessly.
          </h1>
        </section>

        <CourseSection
          title="Find Recommended Courses"
          subtitle="Explore uncompleted courses that fit your learning path."
          courses={courses}
          onBrowse={() => router.push('/browse')}
          router={router}
          onCourseClick={setSelectedCourse}
        />

        <CourseSection
          title="Explore Beyond Your Path"
          subtitle="Take courses that enhance your core studies and deepen your overall learning experience."
          courses={supplementaryCourses}
          onBrowse={() => router.push('/browse')}
          router={router}
          onCourseClick={setSelectedCourse}
        />

        <CourseSection
          title="Find Elective Courses"
          subtitle="Explore elective courses that enhance your skills and broaden your academic experience."
          courses={electiveCourses}
          onBrowse={() => router.push('/browse')}
          router={router}
          onCourseClick={setSelectedCourse}
        />

        <button
          className={styles["more-btn"]}
          onClick={(e) => {
            e.stopPropagation();
            router.push('/browse');
          }}
        >
          Browse All Courses
        </button>

        {selectedCourse && (
          <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
        )}

      </main>
    </>
  );
}

function CourseSection({ title, subtitle, courses, onBrowse, router, onCourseClick }) {
  return (
    <section className={styles.courses}>
      <div className={styles["courses-header"]}>
        <div className={styles["courses-header-left"]}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className={styles["courses-header-right"]}>
          <button className={styles["browse-courses"]} onClick={onBrowse}>
            <Link href="/browse" className={styles["browse-courses"]}>
              Browse all courses <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </button>
        </div>
      </div>
      {courses.length > 0 ? (
        <div className={styles["course-grid"]}>
          {courses.map((course) => (
            <CourseCard
              key={course.courseId}
              course={course}
              onClick={() => onCourseClick(course)}
              onPlusClick={(e) => {
                e.stopPropagation();
                router.push('/student/register');
              }}
            />

          ))}
        </div>
      ) : (
        <EmptyContent />
      )}
    </section>
  );
}

function CourseCard({ course, onClick, onPlusClick }) {
  const creditText = course.creditHours === 1 ? 'Credit Hour' : 'Credit Hours';
  return (
    <div className={discoverStyles["course-card"]} onClick={onClick}>
      <div className={discoverStyles["course-image"]}>
        <img src={course.courseImage} alt="Course Image" />
        <div className={discoverStyles["hover-icon"]} onClick={onPlusClick}>
          <i className="fa-solid fa-plus"></i>
          <span className={discoverStyles["hover-text"]}>Register Course</span>
        </div>
        <i className={`fa-solid fa-turn-up ${discoverStyles["top-right-icon"]}`}></i>
      </div>
      <div className={discoverStyles["course-info"]}>
        <div className={discoverStyles["course-header"]}>
          <span className={discoverStyles["course-tag"]}>{course.courseId}</span>
          <span className={discoverStyles.semester}>Spring 2025</span>
        </div>
        <h3>{course.courseName}</h3>
        <p className={discoverStyles["course-subtitle"]}>{course.description}</p>
        <div className={discoverStyles["course-tags"]}>
          <span className={discoverStyles.tag}>
            <i className="fa-solid fa-hourglass-half"></i> {course.creditHours} {creditText}
          </span>
          {course.CourseMajorOfferings?.map((m) => (
            <span key={m.majorId} className={discoverStyles.tag}>
              <i className={`fa-solid ${m.majorId === 'CMPE' ? 'fa-microchip' : 'fa-laptop-code'}`}></i> {m.majorId}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}