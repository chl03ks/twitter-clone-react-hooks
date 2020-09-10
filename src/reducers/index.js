import { combineReducers } from "redux";

import tweets from "./tweets";
import authedUser from "./authedUser";

import users from "./users";

export default combineReducers({
  tweets,
  authedUser,
  users,
});
