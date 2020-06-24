import * as React from "react";
import Post from "./Post";

import "./PostList.css";

class PostList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.postRefs = props.posts.reduce((acc, value) => {
      acc[value.id] = React.createRef();
      return acc;
    }, {});
  }

  componentDidMount() {
    const { selectedPostId } = this.props;
    this.scrollToPost(selectedPostId);
  }

  scrollToPost = (postId) => {
    this.postRefs[postId].current.scrollIntoView({
      block: "start",
    });
  };

  render() {
    const { posts, onLike, onComment } = this.props;
    return (
      <div className="post-list">
        {posts.map((post) => {
          const { id } = post;
          return (
            <Post
              key={id}
              ref={this.postRefs[id]}
              post={post}
              onLike={onLike}
              onComment={onComment}
            ></Post>
          );
        })}
      </div>
    );
  }
}

export default PostList;
