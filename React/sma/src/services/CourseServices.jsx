

export function addCourse(dispatch, course) {
  dispatch({ type: "ADD_COURSE", payload: course });
}

export function deleteCourse(dispatch, courseId) {
  dispatch({ type: "DELETE_COURSE", payload: courseId });
}
