import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div style={{
      position: "fixed",
      top: "30%",
      left: "30%",
      background: "white",
      padding: "20px",
      border: "2px solid black"
    }}>
      {children}
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;