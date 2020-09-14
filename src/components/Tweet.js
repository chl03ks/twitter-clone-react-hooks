import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TiHeart, TiHeartOutline, TiArrowBackOutline } from "react-icons/ti";

import { handleToggleTweet } from "../actions/tweets";
import { formatTweet, formatDate } from "../utils/helpers";

export default function Tweet({ id }) {
  const dispatch = useDispatch();

  const state = useSelector(({ authedUser, users, tweets }) => {
    const tweet = tweets[id];
    const parent = tweet ? tweets[tweet.replyingTo] : null;
    return {
      authedUser,
      tweet: tweet
        ? formatTweet(tweet, users[tweet.author], authedUser, parent)
        : null,
    };
  });

  const toParent = () => {};

  if (state.tweet === null) {
    return <div>This tweet doesn't exist</div>;
  }

  const {
    name,
    avatar,
    timestamp,
    text,
    id: tweetId,
    hasLiked,
    likes,
    replies,
    parent,
  } = state.tweet;

  const { authedUser } = state;

  const handleLike = (e) => {
    e.preventDefault();
    dispatch(
      handleToggleTweet({
        id: tweetId,
        hasLiked,
        authedUser,
      })
    );
  };

  return (
    <div className="tweet">
      <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      <div className="tweet-info">
        <div>
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <button
              className="replying-to"
              onClick={(e) => toParent(e, parent.id)}
            >
              Replying to @{parent.author}
            </button>
          )}
          <p>{text}</p>
        </div>
        <div className="tweet-icons">
          <TiArrowBackOutline className="tweet-icon" />
          <span>{replies !== 0 && replies}</span>
          <button className="heart-button" onClick={handleLike}>
            {hasLiked === true ? (
              <TiHeart color="#e0245e" className="tweet-icon" />
            ) : (
              <TiHeartOutline className="tweet-icon" />
            )}
          </button>
          <span>{likes !== 0 && likes}</span>
        </div>
      </div>
    </div>
  );
}
