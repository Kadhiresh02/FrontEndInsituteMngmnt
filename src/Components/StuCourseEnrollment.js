import React, { useState } from "react";
import "./StudentDashboard.css";

const courses = ["React", "Node.js", "ASP.NET", "Java", "Python"];

const StuCourseEnrollment = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    if (!enrolledCourses.includes(course)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  return (
    <div className="section-container">
      <h2 className="section-heading">Course Enrollment</h2>
      <h3>Available Courses:</h3>
      <ul className="list-container">
        {courses.map((course) => (
          <li key={course}>
            {course} <button className="action-button" onClick={() => enrollCourse(course)}>Enroll</button>
          </li>
        ))}
      </ul>

      <h3>Enrolled Courses:</h3>
      <ul className="list-container">
        {enrolledCourses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default StuCourseEnrollment;
