import React from "react";
import Image from "../../../common/Image";
import ProfileStatistics from "./ProfileStatistics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "./UserProfile.css";

const UserProfile = ({ user }) => {
  const { name, website, summary, statistics, profilePhotoUrl } = user;
  return (
    <div className="user-profile">
      <div className="user-profile__main">
        <div className="main__info">
          <div className="info__image">
            <Image circle src={profilePhotoUrl}></Image>
          </div>
          <span className="info__name">{name}</span>
        </div>
        <div className="main__stats">
          <ProfileStatistics statistics={statistics}></ProfileStatistics>
          <div className="stats__buttons-wrapper">
            <button className="buttons-wrapper__follow-btn">Follow</button>
            <button className="buttons-wrapper__more-btn">
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
      <div className="user-profile__summary">{summary}</div>
      <a
        className="user-profile__website"
        href={website}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        {website}
      </a>
    </div>
  );
};

export default UserProfile;
