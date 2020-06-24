import React from "react";

import GalleryView from "../../../common/gallery/GalleryView";
import UserProfile from "./UserProfile";

import "./ProfileView.css";

const ProfileView = ({ user, onGalleryImageClick }) => {
  const { gallery, ...rest } = user;
  return (
    <div className="profile-view">
      <UserProfile user={rest}></UserProfile>
      <GalleryView
        gallery={gallery}
        onImageClick={onGalleryImageClick}
      ></GalleryView>
    </div>
  );
};

export default ProfileView;
