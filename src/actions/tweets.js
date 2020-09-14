import { saveLikeToggle } from "../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

export function toggleTweet({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    hasLiked,
    authedUser,
  };
}

export function handleToggleTweet(info) {
  return (dispatch) => {
    console.log(info)
    dispatch(toggleTweet(info));
    return saveLikeToggle(info).catch((e) => {
      console.warn(e);
      dispatch(toggleTweet(info));
      alert("There was an error liking the Tweet. Try again.");
    });
  };
}
