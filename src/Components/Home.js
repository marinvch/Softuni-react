import React from "react";
import Posts from "./Post/Posts";
import CircularProgress from "@material-ui/core/CircularProgress";

function Home() {
  return <div>{!Posts ? <CircularProgress /> : <Posts />}</div>;
}

export default Home;
