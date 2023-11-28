import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <dialog className="ModalBackground">
      <div className="ModalContainer">{children}</div>
    </dialog>,
    document.getElementById("modal")
  );
};

export { Modal };
