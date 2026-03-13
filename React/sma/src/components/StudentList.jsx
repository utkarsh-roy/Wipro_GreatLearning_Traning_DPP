import React from "react";
import { useStudentContext } from "../context/StudentContext";
import { deleteStudent, unenrollCourse } from "../services/StudentServices";

function StudentList() {
  const { state, dispatch } = useStudentContext();
  const { students, courses, enrollments } = state;

  const handleDelete = (id) => {
    deleteStudent(dispatch, id);
  };

  const handleUnenroll = (studentId, courseId) => {
    unenrollCourse(dispatch, studentId, courseId);
  };

  return (
    <div>
      <h3>Students</h3>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <ul className="list-group">
          {students.map((s) => (
            <li key={s.id} className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  {s.name} ({s.email})
                  <ul>
                    {(enrollments[s.id] || []).map((cid) => {
                      const course = courses.find((c) => c.id === cid);
                      if (!course) return null;
                      return (
                        <li key={cid} className="d-flex align-items-center">
                          {course.title}
                          <button
                            className="btn btn-sm btn-outline-danger ms-2"
                            onClick={() => handleUnenroll(s.id, cid)}
                          >
                            x
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(s.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
