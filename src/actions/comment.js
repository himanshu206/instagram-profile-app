import COMMENTS from "../assets/data/comments.json";
import uuidv4 from "uuid/v4";

import { CONSTANTS as POST_CONSTANTS } from "./post";

export const CONSTANTS = {
  POST_COMMENTS_FETCH_SUCCESS: "POST_COMMENTS_FETCH_SUCCESS",
  ADD_POST_COMMENT: "ADD_POST_COMMENT",
};

export const fetchPostComments = (postId) => (dispatch) => {
  /**
   * Skipped api call, and simply returning mock data
   * Ideally, it should fetch comments based on postId
   */
  dispatch({
    type: CONSTANTS.POST_COMMENTS_FETCH_SUCCESS,

    // Filtering on mock data to have comments related to post id
    response: COMMENTS.filter((comment) => comment.postId === parseInt(postId)),
    params: {
      postId,
    },
  });
};

export const addComment = (userId, postId, text) => (dispatch) => {
  /**
   * Skipped api call, and simply returning mock data
   * Ideally, it should fetch comments based on postId
   */
  dispatch({
    type: CONSTANTS.ADD_POST_COMMENT,

    // Comment added ( mocked, ideally it will come from server)
    response: {
      id: uuidv4(),
      postId,
      text,
      commentedById: "himanshu_gupta",
      commentedByProfilePhotoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRansA9wKejiQYgEQXIIGLtzoe5AAXMSevf2u7pQRE3J0NryHbQ&usqp=CAU",
      commentedAt: new Date().toISOString(),
      likes: 0,
    },
    params: {
      postId,
    },
  });

  // To update comments count in related post
  dispatch({
    type: POST_CONSTANTS.INCREMENT_POST_COMMENTS_COUNT,
    params: {
      userId,
      postId,
    },
  });
};
