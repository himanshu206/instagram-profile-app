import React from "react";

import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

import "./CommentView.css";

class CommentView extends React.PureComponent {
  constructor(props) {
    super(props);

    this.listWrapperRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { comments } = this.props;
    if (prevProps.comments.length !== comments.length) {
      this.listWrapperRef.current.scrollTo(0, 0);
    }
  }

  render() {
    const { comments, onAdd } = this.props;
    return (
      <div className="comment-view">
        <div className="comment-view__list" ref={this.listWrapperRef}>
          <CommentList comments={comments}></CommentList>
        </div>
        <div className="comment-view__box">
          <CommentBox onAdd={onAdd}></CommentBox>
        </div>
      </div>
    );
  }
}

export default CommentView;
