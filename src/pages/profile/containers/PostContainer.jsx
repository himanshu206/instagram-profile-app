import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchUserPosts, incrementPostLikesCount } from "../../../actions/post";

import Header from "../../common/header/Header";
import PostList from "../components/post/PostList";

import PathUtils from "../../pathUtils";

class PostContainer extends React.PureComponent {
  componentDidMount() {
    const {
      match: {
        params: { userId },
      },
      fetchUserPosts,
    } = this.props;
    fetchUserPosts(userId);
  }

  handleOnBack = () => {
    const {
      history,
      match: {
        params: { userId },
      },
    } = this.props;
    history.push(PathUtils.getProfileViewPath(userId));
  };

  handleOnLike = (postId) => {
    const {
      match: {
        params: { userId },
      },
      incrementPostLikesCount,
    } = this.props;

    incrementPostLikesCount(userId, postId);
  };

  handleOnComment = (postId) => {
    const {
      history,
      match: {
        params: { userId },
      },
    } = this.props;
    history.push(PathUtils.getCommentsViewPath(userId, postId));
  };

  render() {
    const {
      match: {
        params: { postId },
      },
      posts,
    } = this.props;
    return (
      <>
        <Header title={"Posts"} onBack={this.handleOnBack}></Header>
        {posts.length ? (
          <PostList
            posts={posts}
            selectedPostId={postId}
            onLike={this.handleOnLike}
            onComment={this.handleOnComment}
          ></PostList>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  const posts = state.post[props.match.params.userId] || [];
  return {
    posts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
  incrementPostLikesCount: (userId, postId) =>
    dispatch(incrementPostLikesCount(userId, postId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostContainer));
