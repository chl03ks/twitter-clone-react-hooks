import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Redirect } from "react-router-dom";

import { handleNewTweet } from "../actions/tweets";

export default function NewTweet({ id = null }) {
  const [text, setText] = useState("");
  const [redirect, setRedirect] = useState(false)
  const dispatch = useDispatch();
  const textLeft = 280 - text.length;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleNewTweet(text, id));
    setRedirect(id ? false : true)
    setText("");
  };

  return redirect ? <Redirect to="/" /> :(
    <div>
      <h3 className="center"> Compose new Tweet </h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          className="textarea"
          maxLength="280"
          value={text}
          onChange={handleChange}
        />
        {textLeft <= 100 && <div className="tweet-length">{textLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}
