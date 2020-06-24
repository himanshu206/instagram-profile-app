import React from "react";
import "./Statistic.css";

const Statistic = ({ title, value }) => {
  return (
    <div className="statistic">
      <span className="statistic__value">{value}</span>
      <span className="statistic__title">{title}</span>
    </div>
  );
};

export default Statistic;
