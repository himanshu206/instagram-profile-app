import React from "react";
import Image from "../../../common/Image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShare,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

import "./Post.css";

const Post = React.forwardRef(({ post, onLike, onComment }, ref) => {
  const { id, imageUrl, description, likes, comments } = post;

  const handleOnLike = () => {
    onLike(id);
  };

  const handleOnComment = () => {
    onComment(id);
  };

  return (
    <div className="post" ref={ref}>
      <div className="post__header">
        <div className="header__image">
          <Image circle src={imageUrl}></Image>
        </div>
        <span>{"sachin__tendulkar"}</span>
      </div>
      <div className="post__content">
        <div className="content__image">
          <Image src={imageUrl}></Image>
        </div>
        <div className="content__actions">
          <div className="actions__primary">
            <FontAwesomeIcon
              icon={faHeart}
              title={"Like"}
              className="icon"
              onClick={handleOnLike}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faComment}
              title={"Comment"}
              className="icon"
              onClick={handleOnComment}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faShare}
              title={"Share"}
              className="icon"
            ></FontAwesomeIcon>
          </div>
          <div className="actions__secondary">
            <FontAwesomeIcon
              icon={faBookmark}
              title={"Save"}
              className="icon"
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="content__meta">
          <span>{likes} likes</span>
          <span>{comments} comments</span>
        </div>
        <div className="content__description">{description}</div>
      </div>
    </div>
  );
});

export default Post;
