import React from "react";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <h1>Student Cards</h1>

      <StudentCard name="Prasanna" department="CSE" marks="90" />
      <StudentCard name="Sashi" department="ECE" marks="85" />
      <StudentCard name="Dhruv" department="IT" marks="88" />

    </div>
  );
}

export default App;