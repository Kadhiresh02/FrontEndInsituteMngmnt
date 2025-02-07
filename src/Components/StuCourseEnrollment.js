// import React, { useState } from "react";
// import "./StudentDashboard.css";

// const courses = ["React", "Node.js", "ASP.NET", "Java", "Python"];

// const StuCourseEnrollment = () => {
//   const [enrolledCourses, setEnrolledCourses] = useState([]);

//   const enrollCourse = (course) => {
//     if (!enrolledCourses.includes(course)) {
//       setEnrolledCourses([...enrolledCourses, course]);
//     }
//   };

//   return (
//     <div className="section-container">
//       <h2 className="section-heading">Course Enrollment</h2>
//       <h3>Available Courses:</h3>
//       <ul className="list-container">
//         {courses.map((course) => (
//           <li key={course}>
//             {course} <button className="action-button" onClick={() => enrollCourse(course)}>Enroll</button>
//           </li>
//         ))}
//       </ul>

//       <h3>Enrolled Courses:</h3>
//       <ul className="list-container">
//         {enrolledCourses.map((course) => (
//           <li key={course}>{course}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StuCourseEnrollment;


// import React, { useState } from "react";
// import "./StudentDashboard.css";

// const courses = [
//   "Fullstack Development with .NET",
//   "Fullstack Development with Python",
//   "Frontend Development with React",
//   "Software Testing",
//   "DevOps",
//   "Salesforce",
//   "Cloud Computing",
//   "Data Analyst",
//   "Cyber Security",
//   "Android Development",
//   "Artificial Intelligence (AI)",
//   "Power BI"
// ];

// const StuCourseEnrollment = () => {
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [showEnrolled, setShowEnrolled] = useState(false);

//   const enrollCourse = (course) => {
//     if (!enrolledCourses.includes(course)) {
//       setEnrolledCourses([...enrolledCourses, course]);
//     }
//   };

//   return (
//     <div className="section-container">
//       <nav className="navbar">
//         <button className="action-button" onClick={() => setShowEnrolled(false)}>Available Courses</button>
//         <button className="action-button" onClick={() => setShowEnrolled(true)}>Enrolled Courses</button>
//       </nav>
      
//       <h2 className="section-heading">{showEnrolled ? "Enrolled Courses" : "Available Courses"}</h2>
      
//       {!showEnrolled ? (
//         <div className="card-container">
//           {courses.map((course) => (
//             <div key={course} className="course-card">
//               <h3>{course}</h3>
//               <button className="action-button" onClick={() => enrollCourse(course)}>Enroll</button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <ul className="list-container">
//           {enrolledCourses.length > 0 ? (
//             enrolledCourses.map((course) => <li key={course}>{course}</li>)
//           ) : (
//             <p>No enrolled courses yet.</p>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default StuCourseEnrollment;


import React, { useState } from "react";
import "./StudentDashboard.css";

const courses = ["Fullstack Development with .NET",
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
  "Power BI"];

const StuCourseEnrollment = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [view, setView] = useState("available"); // Default view: available courses

  const enrollCourse = (course) => {
    if (!enrolledCourses.includes(course)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const toggleView = (viewType) => {
    setView(viewType);
  };

  return (
    <div className="section-container">
      <div className="navbar">
        <button className="nav-button" onClick={() => toggleView("available")}>
          Available Courses
        </button>
        <button className="nav-button" onClick={() => toggleView("enrolled")}>
          Enrolled Courses
        </button>
      </div>

      <h2 className="section-heading">{view === "available" ? "Available Courses" : "Enrolled Courses"}</h2>

      {view === "available" ? (
        <div className="course-grid">
          {courses.map((course) => (
            <div className="course-card" key={course}>
              <h5 className="course-name">{course}</h5>
              <button className="enroll-button" onClick={() => enrollCourse(course)}>
                Enroll
              </button>
            </div>
          ))}
        </div>
      ) : (
        <ul className="list-container">
          {enrolledCourses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StuCourseEnrollment;
