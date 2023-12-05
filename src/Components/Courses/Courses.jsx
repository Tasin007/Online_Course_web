// Courses.jsx
import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = ({ onCourseSelect, selectedCourses }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('course.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          onCourseSelect={onCourseSelect}
          selectedCourses={selectedCourses}
        />
      ))}
    </div>
  );
};

export default Courses;
