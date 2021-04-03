import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../Context/UserContext";
import { url } from "../../Api/index";
import { Link, useHistory } from "react-router-dom";

import CircularProgress from "@material-ui/core/CircularProgress";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

import "./Styles/Post.css";

import moment from "moment";
import axios from "axios";

function Post(props) {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  let [posts, setPosts] = useState([]);
  let [likes, setLikes] = useState();

  const deletePost = async (id) => {
    await axios
      .delete(`${url}/posts/delete/${id}`, {
        headers: {
          "x-auth-token": userData.token,
        },
      })
      .then((res) => {
        console.log(res);
        history.go("/");
      });
  };

  const LikePost = async (id) => {
    await axios
      .put(`${url}/posts/like/${id}`, likes, {
        headers: {
          "x-auth-token": userData.token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setLikes(res.data);
        history.push("/");
      });
  };

  const disLikePost = async (id) => {
    await axios
      .put(`${url}/posts/dislike/${id}`, likes, {
        headers: {
          "x-auth-token": userData.token,
        },
      })
      .then((res) => {
        setLikes(res.data);
        history.push("/");
      });
  };

  useEffect(() => {
    const getData = async () => {
      await axios.get(`${url}/posts/`).then((res) => {
        setPosts(res.data);
      });
    };
    getData();
  }, [likes]);

  return (
    <section className="post-wrapper">
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <>
          {userData.user ? (
            <>
              {posts
                .map((post) => {
                  return (
                    <li key={post._id}>
                      <section className="content">
                        <Link
                          className="link-item"
                          to={`/view-post/${post._id}`}
                        >
                          <h2>{post.title}</h2>
                          <h4>{post.content}</h4>
                        </Link>
                      </section>
                      <section className="details">
                        <section className="user">
                          <p>Author: {post.author.username} </p>
                        </section>
                        <section className="info">
                          <div className="like-wrapper">
                            <p>
                              <ThumbUpIcon
                                className="like-btn"
                                onClick={() => LikePost(post._id)}
                              />
                            </p>
                            <p className="likes">{post.likes} </p>
                            <p>
                              <ThumbDownAltIcon
                                className="dislike-btn"
                                onClick={() => disLikePost(post._id)}
                              />
                            </p>
                          </div>

                          <p className="date">
                            Created: {moment(`${post.createdAt}`).fromNow()}
                          </p>

                          <Link
                            className="link-item"
                            to={`/edit-post/${post._id}`}
                          >
                            <EditIcon />
                          </Link>
                          <Link className="link-item" to="/">
                            <DeleteForeverIcon
                              onClick={() => deletePost(post._id)}
                            />
                          </Link>
                        </section>
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
                    <li key={post._id}>
                      <section className="content">
                        <Link
                          className="link-item"
                          to={`/view-post/${post._id}`}
                        >
                          <h2>{post.title}</h2>
                          <h4>{post.content}</h4>
                        </Link>
                      </section>
                      <section className="details">
                        <section className="user">
                          <p>Author: {post.author.username} </p>
                        </section>
                        <section className="info">
                          <p className="likes">Liked {post.likes} times</p>
                          <p>
                            Created: {moment(`${post.createdAt}`).fromNow()}
                          </p>
                        </section>
                      </section>
                    </li>
                  );
                })
                .reverse()}
            </>
          )}
        </>
      )}
    </section>
  );
}

export default Post;
