import React from "react";
import { useSelector } from "react-redux";
import Tweet from "./Tweet";

export default function Dashboard() {
  const tweets = useSelector(({ tweets }) => Object.keys(tweets));
  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {tweets.map((id) => (
          <li key={id}>
            <Tweet id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
