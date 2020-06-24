import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

const Header = ({ title, onBack }) => {
  return (
    <div className="header">
      {onBack ? (
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={onBack}
          className="header__back-btn"
        ></FontAwesomeIcon>
      ) : null}
      <span className="header__title">{title}</span>
    </div>
  );
};

export default Header;
