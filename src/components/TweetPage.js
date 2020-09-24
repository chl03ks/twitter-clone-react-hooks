import React from "react";
import { useTweetReplies } from "../hooks/useTweet";
import { useParams } from 'react-router-dom';

import Tweet from "./Tweet";
import NewTweet from "./NewTweet";

export default function TweetPage() {
  let { id } = useParams();
  const { replies = [] } = useTweetReplies(id);
  return (
    <div>
      <Tweet id={id}></Tweet>
      <NewTweet id={id}></NewTweet>
      {replies.length !== 0 && <h3 className="center">Replies</h3>}
      <ul>
        {replies.map((replyid) => (
          <li key={replyid}>
            <Tweet id={replyid}></Tweet>
          </li>
        ))}
      </ul>
    </div>
  );
}
