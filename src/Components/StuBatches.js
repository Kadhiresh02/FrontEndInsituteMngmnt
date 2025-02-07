import React from "react";
import "./StudentDashboard.css";

const assignedBatches = [
  { batchName: "Batch A", teacher: "John Doe", timing: "9 AM - 11 AM", type: "Weekdays" },
  { batchName: "Batch B", teacher: "Jane Smith", timing: "2 PM - 4 PM", type: "Weekdays" },
];

const StuBatches = () => {
  return (
    <div className="section-container">
      <h2 className="section-heading">Assigned Batches</h2>
      <div className="batch-grid">
        {assignedBatches.map((batch, index) => (
          <div className="batch-card" key={index}>
            <h5 className="batch-course-name">{batch.batchName}</h5>
            <p className="batch-info"><strong>Teacher:</strong> {batch.teacher}</p>
            <p className="batch-info"><strong>Timing:</strong> {batch.timing}</p>
            <p className="batch-info"><strong>Type:</strong> {batch.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StuBatches;
