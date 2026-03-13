import React, { useContext } from "react";
import UserContext from "./UserContext";

function Child() {
  const username = useContext(UserContext);
  return (
    <div>
      <h3>Hello {username} 👋</h3>
    </div>
  );
}

export default Child;
