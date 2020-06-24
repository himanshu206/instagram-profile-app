import POSTS from "../assets/data/posts.json";

export const CONSTANTS = {
  USER_POSTS_FETCH_SUCCESS: "USER_POSTS_FETCH_SUCCESS",
  INCREMENT_POST_COMMENTS_COUNT: "INCREMENT_POST_COMMENTS_COUNT",
  INCREMENT_POST_LIKES_COUNT: "INCREMENT_POST_LIKES_COUNT",
};

export const fetchUserPosts = (userId) => (dispatch) => {
  /**
   * Skipped api call, and simply returning mock data
   * Ideally, it should fetch posts based on userId
   */
  dispatch({
    type: CONSTANTS.USER_POSTS_FETCH_SUCCESS,
    response: POSTS,
    params: {
      userId,
    },
  });
};

export const incrementPostLikesCount = (userId, postId) => (dispatch) => {
  /**
   * Skipped api call, and simply returning mock data
   * Ideally, it should update post based on postId
   */
  dispatch({
    type: CONSTANTS.INCREMENT_POST_LIKES_COUNT,
    params: {
      userId,
      postId,
    },
  });
};
