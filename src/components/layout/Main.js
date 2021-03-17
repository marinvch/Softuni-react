import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Styles/Main.css";

const Main = () => {
  const [posts, setPosts] = useState([]);

  const getData = async function () {
    await axios.get("http://localhost:5000/posts").then((res) => {
      setPosts(res.data);
    });
    await axios.get("http://localhost:5000/auth/allusers").then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="post-wrapper">
      <ul className="post">
        {posts.map((post) => (
          <li key={post._id}>
            <p className="user">{post.author}</p>
            <p className="content">
              {post.title}
              {post.content}
            </p>
            <p className="info">
              {post.likes}
              {post.createdAt}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Main;
