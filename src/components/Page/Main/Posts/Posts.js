import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import TitleIcon from "@material-ui/icons/Title";
import axios from "axios";

import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ul className="post">
      {posts.map((post) => (
        <li key={post._id}>
          <p className="user">
            <AccountCircleIcon />
            {post.author}
          </p>
          <p className="content">
            <TitleIcon />
            {post.title}
            {post.content}
          </p>
          <p className="info">
            <ThumbUpIcon />
            {post.likes}
            {post.createdAt}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
