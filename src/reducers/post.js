import { CONSTANTS } from "../actions/post";

export default (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.USER_POSTS_FETCH_SUCCESS: {
      const {
        params: { userId },
        response,
      } = action;
      return {
        ...state,
        [userId]: response,
      };
    }
    case CONSTANTS.INCREMENT_POST_COMMENTS_COUNT: {
      const {
        params: { userId, postId },
      } = action;

      let updatedPosts = [...state[userId]];
      const post = updatedPosts.find((post) => post.id === parseInt(postId));
      post.comments++;

      return {
        ...state,
        [userId]: [...updatedPosts],
      };
    }
    case CONSTANTS.INCREMENT_POST_LIKES_COUNT: {
      const {
        params: { userId, postId },
      } = action;

      let updatedPosts = [...state[userId]];
      const post = updatedPosts.find((post) => post.id === parseInt(postId));
      post.likes++;

      return {
        ...state,
        [userId]: [...updatedPosts],
      };
    }
    default:
      return state;
  }
};
