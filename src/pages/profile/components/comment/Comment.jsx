import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Image from "../../../common/Image";

import "./Comment.css";

const Comment = React.forwardRef(({ comment }, ref) => {
  const {
    text,
    likes,
    commentedById,
    commentedByProfilePhotoUrl,
    commentedAt,
  } = comment;
  return (
    <div className="comment" ref={ref}>
      <div className="comment-by__image">
        <Image circle src={commentedByProfilePhotoUrl}></Image>
      </div>
      <div className="comment__content">
        <div className="content__body">
          <span className="body__title">{commentedById}</span>
          <span>{text}</span>
          <div className="body__meta">
            <span>{moment(commentedAt).fromNow(true)}</span>
            {likes ? <span>{likes} likes</span> : null}
            <span>Reply</span>
          </div>
        </div>
        <div className="content__action">
          <FontAwesomeIcon icon={faHeart} size="xs"></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
});

export default Comment;
