import { useSelector } from "react-redux";
import { formatTweet } from "../utils/helpers";

export default function useTweet(id) {
  return useSelector(({ authedUser, users, tweets }) => {
    const tweet = tweets[id];
    const parent = tweet ? tweets[tweet.replyingTo] : null;
    return {
      authedUser,
      tweet: tweet
        ? formatTweet(tweet, users[tweet.author], authedUser, parent)
        : null,
    };
  });
}

export const useTweetReplies = (id) => {
  return useSelector(({ authedUser, users, tweets }) => {
    return {
      id,
      replies: !tweets[id]
        ? []
        : tweets[id].replies.sort(
            (a, b) => tweets[b].timestamp - tweets[a].timestamp
          ),
    };
  });
};
