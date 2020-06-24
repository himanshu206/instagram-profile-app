import React from "react";
import "./DummyView.css";

const DummyView = ({ text }) => {
  const message = `Welcome, ${text} View`;
  return (
    <div className="dummy-view">
      <h1>{message}</h1>
    </div>
  );
};

export default DummyView;
