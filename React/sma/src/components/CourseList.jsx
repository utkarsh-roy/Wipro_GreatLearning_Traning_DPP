import React from "react";
import { useStudentContext } from "../context/StudentContext";
import { deleteCourse } from "../services/CourseServices";

function CourseList() {
  const { state, dispatch } = useStudentContext();
  const { courses } = state;

  const handleDelete = (id) => {
    deleteCourse(dispatch, id);
  };

  return (
    <div>
      <h3>Courses</h3>
      {courses.length === 0 ? (
        <p>No courses added yet.</p>
      ) : (
        <ul className="list-group">
          {courses.map((c) => (
            <li key={c.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                {c.title} ({c.duration})
              </div>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(c.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseList;
