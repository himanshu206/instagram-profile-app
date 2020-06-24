import React from "react";
import NavigationItem from "./NavigationItem";

import PAGES from "../../../assets/data/pages.js";

import "./NavigationView.css";

const Navigation = () => {
  return (
    <div className="navigation">
      {PAGES.map((page) => {
        const { id } = page;
        return <NavigationItem key={id} item={page}></NavigationItem>;
      })}
    </div>
  );
};

export default Navigation;
