import React, { useState } from "react";
import StuProfile from "./StuProfile";
import StuCourseEnrollment from "./StuCourseEnrollment";
import StuBatches from "./StuBatches";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="dashboard-heading">Dashboard</h2>
        <ul className="menu">
          <li
            className={activeSection === "profile" ? "menu-item active" : "menu-item"}
            onClick={() => setActiveSection("profile")}
          >
            My Profile
          </li>
          <li
            className={activeSection === "courses" ? "menu-item active" : "menu-item"}
            onClick={() => setActiveSection("courses")}
          >
            Course Enrollment
          </li>
          <li
            className={activeSection === "batches" ? "menu-item active" : "menu-item"}
            onClick={() => setActiveSection("batches")}
          >
            Batches
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        {activeSection === "profile" && <StuProfile />}
        {activeSection === "courses" && <StuCourseEnrollment />}
        {activeSection === "batches" && <StuBatches />}
      </div>
    </div>
  );
};

export default StudentDashboard;
