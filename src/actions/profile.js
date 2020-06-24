import USER from "../assets/data/user.json";

export const CONSTANTS = {
  USER_PROFILE_FETCH_SUCCESS: "USER_PROFILE_FETCH_SUCCESS",
};

export const fetchUserProfile = (userId) => (dispatch) => {
  /**
   * Skipped api call, and simply returning mock data
   * Ideally, it should fetch user based on userId
   */
  dispatch({
    type: CONSTANTS.USER_PROFILE_FETCH_SUCCESS,
    response: USER,
    params: {
      userId,
    },
  });
};
