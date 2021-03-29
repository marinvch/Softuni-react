import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import { url } from "../../Api/index";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import "./Styles/Post.css";

import moment from "moment";
import axios from "axios";
function Post({ posts }) {
  const { userData } = useContext(UserContext);

  const deletePost = async (id) => {
    axios.delete(`${url}/posts/delete/${id}`, {
      headers: {
        "x-auth-token": userData.token,
      },
    });
  };

  return (
    <>
      {!posts.length ? (
        <div className="spinner">
          <CircularProgress />
        </div>
      ) : (
        <section className="post-wrapper">
          {userData.user ? (
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
                        <Link to={{ pathname: `/edit-post/${post._id}` }}>
                          <EditIcon />
                        </Link>
                        <Link to="/" onClick={() => deletePost(post._id)}>
                          <DeleteForeverIcon />
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
      )}
    </>
  );
}

export default Post;
