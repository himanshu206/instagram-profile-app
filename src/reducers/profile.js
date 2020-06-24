import { CONSTANTS } from "../actions/profile";

export default (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.USER_PROFILE_FETCH_SUCCESS: {
      const {
        params: { userId },
        response,
      } = action;
      return {
        ...state,
        [userId]: response,
      };
    }
    default:
      return state;
  }
};
