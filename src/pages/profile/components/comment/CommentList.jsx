import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map((comment) => {
        const { id } = comment;
        return <Comment key={id} comment={comment}></Comment>;
      })}
    </div>
  );
};

export default CommentList;
