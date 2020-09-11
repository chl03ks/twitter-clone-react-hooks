import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-redux-loading";

import { handleInitialData } from "./actions/shared";

import Dashboard from "./components/Dashboard";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authedUser === null);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div>
      <LoadingBar />
      {loading === true ? null : <Dashboard />}
    </div>
  );
}

export default App;
