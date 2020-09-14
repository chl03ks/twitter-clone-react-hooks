import React from "react";
import { useDispatch } from "react-redux";
import useTweet from "../hooks/useTweet";
import { TiHeart, TiHeartOutline, TiArrowBackOutline } from "react-icons/ti";

import { handleToggleTweet } from "../actions/tweets";
import { formatDate } from "../utils/helpers";

export default function Tweet({ id: tweetId }) {
  const dispatch = useDispatch();
  const { tweet, authedUser } = useTweet(tweetId);

  const toParent = () => {};

  if (tweet === null) {
    return <div>This tweet doesn't exist</div>;
  }

  const {
    id,
    text,
    name,
    likes,
    parent,
    avatar,
    replies,
    hasLiked,
    timestamp,
  } = tweet;

  const handleLike = (e) => {
    e.preventDefault();
    dispatch(
      handleToggleTweet({
        id,
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
