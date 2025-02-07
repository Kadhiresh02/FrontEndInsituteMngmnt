import React, { useState } from "react";
import "./StudentDashboard.css";

const StuProfile = () => {
  const [student, setStudent] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    dob: "2000-01-01",  // Default format: YYYY-MM-DD
    gender: "Male",
  });

  const [editMode, setEditMode] = useState(false);

  // Function to format date to DD/MM/YYYY
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Edit Icon */}
        <button className="edit-icon" onClick={() => setEditMode(!editMode)}></button>

        <h2 className="profile-heading">Profile</h2>

        {editMode ? (
          <div className="form-container">
            <strong>Name:</strong>
            <input type="text" name="name" value={student.name} onChange={handleChange} />

            <strong>Email:</strong>
            <input type="email" name="email" value={student.email} onChange={handleChange} />

            <strong>Phone:</strong>
            <input type="text" name="phone" value={student.phone} onChange={handleChange} />

            <strong>Date of Birth:</strong>
            <input type="date" name="dob" value={student.dob} onChange={handleChange} />

            <strong>Gender:</strong>
            <select name="gender" value={student.gender} onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <button className="action-button" onClick={() => setEditMode(false)}>Save</button>
          </div>
        ) : (
          <div className="details-container">
            <div className="detail-row">
              <span className="detail-label">Name:</span>
              <span className="detail-value">{student.name}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{student.email}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">{student.phone}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">DOB:</span>
              <span className="detail-value">{formatDate(student.dob)}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Gender:</span>
              <span className="detail-value">{student.gender}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StuProfile;
