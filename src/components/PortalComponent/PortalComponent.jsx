// import React from "react";
import ReactDOM from "react-dom";

const PortalComponent = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.body // You can also use document.getElementById('root') or any other element as the target
  );
};

export default PortalComponent;
