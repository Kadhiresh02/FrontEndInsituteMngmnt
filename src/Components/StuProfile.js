import React, { useState } from "react";
import "./StudentDashboard.css";

const StuProfile = () => {
  const [student, setStudent] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Edit Icon Button (Pure CSS) */}
        <button className="edit-icon" onClick={() => setEditMode(!editMode)}></button>

        <h2 className="profile-heading">Profile</h2>

        {editMode ? (
          <div className="form-container">
            <strong>Name:</strong><input type="text" name="name" value={student.name} onChange={handleChange} />
            <strong>Email:</strong><input type="email" name="email" value={student.email} onChange={handleChange} />
            <strong>Phone:</strong><input type="text" name="phone" value={student.phone} onChange={handleChange} />
            <button className="action-button" onClick={() => setEditMode(false)}>Save</button>
          </div>
        ) : (
//           <div className="details-container">
//   <p><strong>Name:</strong> {student.name}</p>
//   <p><strong>Email:</strong> {student.email}</p>
//   <p><strong>Phone:</strong> {student.phone}</p>
// </div>
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
</div>


        )}
      </div>
    </div>
  );
};

export default StuProfile;
