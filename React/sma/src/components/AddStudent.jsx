import React, { useState } from "react";
import { useStudentContext } from "../context/StudentContext";
import { addStudent } from "../services/StudentServices";
import { v4 as uuidv4 } from "uuid";

function AddStudent() {
  const { dispatch } = useStudentContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      addStudent(dispatch, { id: uuidv4(), name, email });
      setName("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <h3>Add Student</h3>
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Add Student
      </button>
    </form>
  );
}

export default AddStudent;
