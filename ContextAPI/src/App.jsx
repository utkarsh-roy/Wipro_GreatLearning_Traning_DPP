import React from "react";
import UserContext from "./UserContext";
import Parent from "./Parent";

function App() {
  const username = "Sakshi";

  return (
    <div style={{ padding: 20 }}>
      <h1>Context API Example</h1>
      <UserContext.Provider value={username}>
        <Parent />
      </UserContext.Provider>
    </div>
  );
}

export default App;
