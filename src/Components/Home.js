import React from "react";
import Posts from "./Post/Posts";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Styles/Home.css";

function Home() {
  return (
    <div className="wrapper">{!Posts ? <CircularProgress /> : <Posts />}</div>
  );
}

export default Home;
