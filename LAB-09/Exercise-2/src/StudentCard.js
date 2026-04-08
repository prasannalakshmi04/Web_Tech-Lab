import React from "react";

function StudentCard(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>Student Card</h2>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Department:</b> {props.department}</p>
      <p><b>Marks:</b> {props.marks}</p>
    </div>
  );
}

export default StudentCard;