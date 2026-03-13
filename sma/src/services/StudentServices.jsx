

export function addStudent(dispatch, student) {
  dispatch({ type: "ADD_STUDENT", payload: student });
}

export function deleteStudent(dispatch, studentId) {
  dispatch({ type: "DELETE_STUDENT", payload: studentId });
}

export function enrollCourse(dispatch, studentId, courseId) {
  dispatch({ type: "ENROLL_COURSE", payload: { studentId, courseId } });
}

export function unenrollCourse(dispatch, studentId, courseId) {
  dispatch({ type: "UNENROLL_COURSE", payload: { studentId, courseId } });
}
