import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchPostComments, addComment } from "../../../actions/comment";

import Header from "../../common/header/Header";
import CommentView from "../components/comment/CommentView";
import PathUtils from "../../pathUtils";

class CommentContainer extends React.PureComponent {
  componentDidMount() {
    const {
      match: {
        params: { postId },
      },
      fetchPostComments,
    } = this.props;

    fetchPostComments(postId);
  }

  handleOnBack = () => {
    const {
      history,
      match: {
        params: { userId, postId },
      },
    } = this.props;
    history.push(PathUtils.getPostsViewPath(userId, postId));
  };

  handleAddComment = (text) => {
    const {
      addComment,
      match: {
        params: { userId, postId },
      },
    } = this.props;
    addComment(userId, postId, text);
  };

  render() {
    const { comments } = this.props;
    return (
      <>
        <Header title={"Comments"} onBack={this.handleOnBack}></Header>
        <CommentView
          comments={comments}
          onAdd={this.handleAddComment}
        ></CommentView>
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  const comments = state.comment[props.match.params.postId] || [];
  return {
    comments,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPostComments: (postId) => dispatch(fetchPostComments(postId)),
  addComment: (userId, postId, text) =>
    dispatch(addComment(userId, postId, text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CommentContainer));
