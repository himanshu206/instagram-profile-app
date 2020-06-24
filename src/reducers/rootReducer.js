import { combineReducers } from "redux";
import profile from "./profile";
import post from "./post";
import comment from "./comment";

export default combineReducers({
  profile,
  post,
  comment,
});
