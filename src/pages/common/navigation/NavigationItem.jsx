import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import "./NavigationItem.css";

const NavigationItem = ({ item }) => {
  const { title, icon, path } = item;
  return (
    <NavLink exact to={path} activeClassName="active">
      <FontAwesomeIcon
        icon={icon}
        title={title}
        className="navigation-item"
      ></FontAwesomeIcon>
    </NavLink>
  );
};

export default NavigationItem;
