import React from "react";
import "./Image.css";

const Image = ({ src, circle }) => {
  const extraClass = circle ? "circle" : "";
  return <img className={`image ${extraClass}`} src={src} alt="hello"></img>;
};

export default Image;
