import React, { useState } from "react";
import "./StudentDashboard.css";

const courses = [
  "Fullstack Development with .NET",
  "Fullstack Development with Python",
  "Frontend Development with React",
  "Software Testing",
  "DevOps",
  "Salesforce",
  "Cloud Computing",
  "Data Analyst",
  "Cyber Security",
  "Android Development",
  "Artificial Intelligence (AI)",
  "Power BI"
];

const StuCourseEnrollment = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [view, setView] = useState("available");

  const enrollCourse = (course) => {
    if (!enrolledCourses.includes(course)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const toggleView = (viewType) => {
    setView(viewType);
  };

  return (
    <div className="course-section">
      <div className="course-navbar">
        <button className="course-button" onClick={() => toggleView("available")}>
          Available Courses
        </button>
        <button className="course-button" onClick={() => toggleView("enrolled")}>
          Enrolled Courses
        </button>
      </div>


      <div style={{ margin: '15px 0', borderBottom: '2px solid rgb(252, 222, 198)', width: '100%' }} />

      <h2 className="course-heading">
        {view === "available" ? "Available Courses" : "Enrolled Courses"}
      </h2>

      {view === "available" ? (
        <ul className="course-list available-list">
          {courses.map((course) => (
            <li className="course-item" key={course}>
              <span className="course-name">{course}</span>
              <button className="enroll-btn" onClick={() => enrollCourse(course)}>
                Enroll
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="course-list enrolled-list">
          {enrolledCourses.map((course) => (
            <li className="course-item" key={course}>{course}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StuCourseEnrollment;
