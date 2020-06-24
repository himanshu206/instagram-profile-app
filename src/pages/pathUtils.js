export default class PathUtils {
  static getProfileViewPath = (userId) => {
    return `/profile/${userId}`;
  };

  static getPostsViewPath = (userId, postId) => {
    return `/profile/${userId}/posts/${postId}`;
  };

  static getCommentsViewPath = (userId, postId) => {
    return `/profile/${userId}/posts/${postId}/comments`;
  };
}
