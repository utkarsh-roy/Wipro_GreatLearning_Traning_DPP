import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>React Portal Example</h1>

      <button onClick={() => setShow(true)}>
        Open Modal
      </button>

      {show && (
        <Modal>
          <h2>Hello from Portal</h2>
          <button onClick={() => setShow(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default App;