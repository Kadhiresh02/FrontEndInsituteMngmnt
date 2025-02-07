import React from "react";
import "./StudentDashboard.css";

const assignedBatches = [
  { batchName: "Batch A", timing: "9 AM - 11 AM" },
  { batchName: "Batch B", timing: "2 PM - 4 PM" },
];

const StuBatches = () => {
  return (
    <div className="section-container">
      <h2 className="section-heading">Batches</h2>
      <ul className="list-container">
        {assignedBatches.map((batch, index) => (
          <li key={index}>
            <strong>{batch.batchName}</strong> - {batch.timing}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StuBatches;
