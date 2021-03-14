import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import "./Posts.css";

const Posts = () => {
  return (
    <article className="post-wrapper">
      <section className="post-section user">
        <AccountCircleIcon />
        <p>Created by:Username</p>
      </section>
      <section className="post-section content">
        <p>Some Content</p>
      </section>
      <section className="post-section details">
        <p> Last modified:</p>
        <p> Likes:</p>
        <ThumbUpIcon />
      </section>
    </article>
  );
};

export default Posts;
