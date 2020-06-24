import React from "react";
import Image from "../Image";

import "./GalleryView.css";

const GalleryView = ({ gallery, onImageClick }) => {
  return (
    <div className="gallery-view">
      {gallery.map((data) => {
        const { id, imageUrl } = data;
        return (
          <div
            key={id}
            className="gallery-view__image-container"
            onClick={onImageClick.bind(this, id)}
          >
            <Image src={imageUrl}></Image>
          </div>
        );
      })}
    </div>
  );
};

export default GalleryView;
