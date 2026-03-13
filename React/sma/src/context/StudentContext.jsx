import React, { createContext, useContext, useReducer } from "react";

const StudentContext = createContext(null);

const initialState = {
  students: [],
  courses: [],
  enrollments: {} 
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        students: [...state.students, action.payload]
      };
    case "DELETE_STUDENT":
      // remove student and any enrollments
      const newEnroll = { ...state.enrollments };
      delete newEnroll[action.payload];
      return {
        ...state,
        students: state.students.filter(s => s.id !== action.payload),
        enrollments: newEnroll
      };
    case "ADD_COURSE":
      return {
        ...state,
        courses: [...state.courses, action.payload]
      };
    case "DELETE_COURSE":
      // remove course from list and from enrollments
      const cleanedEnroll = {};
      Object.entries(state.enrollments).forEach(([sid, courseIds]) => {
        cleanedEnroll[sid] = courseIds.filter(id => id !== action.payload);
      });
      return {
        ...state,
        courses: state.courses.filter(c => c.id !== action.payload),
        enrollments: cleanedEnroll
      };
    case "ENROLL_COURSE":
      const { studentId, courseId } = action.payload;
      return {
        ...state,
        enrollments: {
          ...state.enrollments,
          [studentId]: Array.from(
            new Set([...(state.enrollments[studentId] || []), courseId])
          )
        }
      };
    case "UNENROLL_COURSE":
      const { studentId: sid, courseId: cid } = action.payload;
      return {
        ...state,
        enrollments: {
          ...state.enrollments,
          [sid]: (state.enrollments[sid] || []).filter(id => id !== cid)
        }
      };
    default:
      return state;
  }
}

export function StudentProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudentContext() {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudentContext must be used within a StudentProvider");
  }
  return context;
}

export default StudentContext;
