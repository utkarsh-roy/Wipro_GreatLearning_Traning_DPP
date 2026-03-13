import React, { useReducer } from "react";
import UserContext from "./UserContext";
import Parent from "./Parent";

// simple reducer for counter
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function App() {
  const username = "Utkarsh";
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: 20 }}>
      <section>
        <h1>Reducer</h1>
        <UserContext.Provider value={username}>
          <Parent />
        </UserContext.Provider>
      </section>

      <hr />

      <section>
        <h1>useReducer Example</h1>
        <p>Count: {state.count}</p>
        <button
          className="btn btn-primary me-2"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        <button
          className="btn btn-secondary me-2"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
        <button className="btn btn-danger" onClick={() => dispatch({ type: "reset" })}>
          reset
        </button>
      </section>
    </div>
  );
}

export default App;
