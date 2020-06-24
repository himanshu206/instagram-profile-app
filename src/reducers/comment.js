import { CONSTANTS } from "../actions/comment";

export default (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.POST_COMMENTS_FETCH_SUCCESS: {
      const {
        params: { postId },
        response,
      } = action;

      return {
        ...state,
        [postId]: state[postId] || response,
      };
    }
    case CONSTANTS.ADD_POST_COMMENT: {
      const {
        params: { postId },
        response,
      } = action;

      const updatedPosts = [...state[postId]];
      updatedPosts.unshift(response);

      return {
        ...state,
        [postId]: updatedPosts,
      };
    }
    default:
      return state;
  }
};
