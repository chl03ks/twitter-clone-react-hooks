import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { handleInitialData } from "./actions/shared";

import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import NewTweet from "./components/NewTweet";
import TweetPage from "./components/TweetPage";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authedUser === null);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <div className="container">
          <Nav></Nav>
          {loading === true ? null : (
            <div>
              <Route path="/" exact component={Dashboard}></Route>
              <Route path="/tweet/:id" exact component={TweetPage}></Route>
              <Route path="/new/" exact component={NewTweet}></Route>
            </div>
          )}
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
