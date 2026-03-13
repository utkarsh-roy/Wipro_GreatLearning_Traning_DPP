import React, { useState } from "react";
import { useStudentContext } from "../context/StudentContext";
import { enrollCourse } from "../services/StudentServices";

function EnrollCourse() {
  const { state, dispatch } = useStudentContext();
  const { students, courses } = state;
  const [studentId, setStudentId] = useState("");
  const [courseId, setCourseId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentId && courseId) {
      enrollCourse(dispatch, studentId, courseId);
      setStudentId("");
      setCourseId("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h3>Enroll Student in Course</h3>
      <div className="row g-2">
        <div className="col">
          <select
            className="form-select"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          >
            <option value="">Select student</option>
            {students.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <select
            className="form-select"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
          >
            <option value="">Select course</option>
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-auto">
          <button className="btn btn-success" type="submit">
            Enroll
          </button>
        </div>
      </div>
    </form>
  );
}

export default EnrollCourse;
