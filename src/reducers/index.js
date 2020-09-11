import { combineReducers } from "redux";

import { loadingBarReducer } from "react-redux-loading";

import tweets from "./tweets";
import authedUser from "./authedUser";
import users from "./users";

export default combineReducers({
  tweets,
  authedUser,
  users,
  loadingBar: loadingBarReducer,
});
