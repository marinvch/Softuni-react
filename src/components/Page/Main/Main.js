import React from "react";
import Post from "./Posts/Posts";
import "./Main.css";

const Main = () => {
  return (
    <article className="container-wrapper">
      <Post />
      <Post />
      <Post />  
    </article>
  );
};

export default Main;
