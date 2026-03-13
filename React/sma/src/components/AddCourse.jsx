import React, { useState } from "react";
import { useStudentContext } from "../context/StudentContext";
import { addCourse } from "../services/CourseServices";
import { v4 as uuidv4 } from "uuid";

function AddCourse() {
  const { dispatch } = useStudentContext();
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && duration) {
      addCourse(dispatch, { id: uuidv4(), title, duration });
      setTitle("");
      setDuration("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <h3>Add Course</h3>
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Add Course
      </button>
    </form>
  );
}

export default AddCourse;
