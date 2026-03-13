import React from "react";
import { StudentProvider } from "./context/StudentContext";
import AddStudent from "./components/AddStudent";
import AddCourse from "./components/AddCourse";
import EnrollCourse from "./components/EnrollCourse";
import StudentList from "./components/StudentList";
import CourseList from "./components/CourseList";

function App() {
  return (
    <StudentProvider>
      <div className="container mt-4">
        <h1 className="mb-4">Student Management App</h1>
        <div className="row">
          <div className="col-md-6">
            <AddStudent />
            <AddCourse />
            <EnrollCourse />
          </div>
          <div className="col-md-6">
            <StudentList />
            <CourseList />
          </div>
        </div>
      </div>
    </StudentProvider>
  );
}

export default App;
