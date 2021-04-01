import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../Context/UserContext";
import { url } from "../../Api/index";
import { Link, useHistory } from "react-router-dom";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import "./Styles/Post.css";

import moment from "moment";
import axios from "axios";

function Post(props) {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  let [posts, setPosts] = useState([]);

  const deletePost = async (id) => {
    await axios
      .delete(`${url}/posts/delete/${id}`, {
        headers: {
          "x-auth-token": userData.token,
        },
      })
      .then((res) => {
        console.log(res);
        history.go('/')
      });
  };

  useEffect(() => {
    const getData = async () => {
      await axios.get(`${url}/posts/`).then((res) => {
        setPosts(res.data);
      });
    };
    getData();
  }, []);

  return (
    <section className="post-wrapper">
      {userData.user ? (
        <>
          {posts
            .map((post) => {
              return (
                <li key={post._id}>
                  <section className="user">
                    <p>User: </p>
                    <p>{post.author.username}</p>
                  </section>
                  <section className="content">
                    <Link
                      className="link-content"
                      to={{ pathname: `/view-post/${post._id}` }}
                    >
                      <p>Title:{post.title}</p>
                    </Link>
                  </section>
                  <section className="info">
                    <p>Detailes</p>
                    {moment(`${post.createdAt}`).fromNow()}
                    <Link to={{ pathname: `/edit-post/${post._id}` }}>
                      <EditIcon />
                    </Link>
                    <Link to="/">
                      <DeleteForeverIcon onClick={() => deletePost(post._id)} />
                    </Link>
                  </section>
                </li>
              );
            })
            .reverse()}
        </>
      ) : (
        <>
          {posts
            .map((post, index) => {
              return (
                <li key={index}>
                  <section className="user">
                    <p>User: </p>
                    <p>{post.author.username}</p>
                  </section>
                  <section className="content">
                    <Link
                      className="link-content"
                      to={{ pathname: `/view-post/${post._id}` }}
                    >
                      <p>Title:{post.title}</p>
                    </Link>
                  </section>
                  <section className="info">
                    <p>Detailes</p>
                    {moment(`${post.createdAt}`).fromNow()}
                  </section>
                </li>
              );
            })
            .reverse()}
        </>
      )}
    </section>
  );
}

export default Post;
