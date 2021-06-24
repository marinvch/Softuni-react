import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../Context/UserContext";
import { url } from "../../Api/index";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import CircularProgress from "@material-ui/core/CircularProgress";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

import "./Styles/Post.css";
import CommentIcon from "@material-ui/icons/Comment";

import moment from "moment";
import axios from "axios";

function Post(props) {
  const postsRedux = useSelector((state) => state.posts);
  console.log(postsRedux )
  const { userData } = useContext(UserContext);
  const history = useHistory();
  let [posts, setPosts] = useState([]);
  let [likes, setLikes] = useState();

  // const deletePost = async (id) => {
  //   await axios
  //     .delete(`${url}/posts/delete/${id}`, {
  //       headers: {
  //         "x-auth-token": userData.token,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       alert("You deleted the post");
  //       history.go("/");
  //     });
  // };

  // const LikePost = async (id) => {
  //   try {
  //     await axios
  //       .put(`${url}/posts/like/${id}`, likes, {
  //         headers: {
  //           "x-auth-token": userData.token,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         setLikes(res.data);

  //         history.push("/");
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const disLikePost = async (id) => {
  //   try {
  //     await axios
  //       .put(`${url}/posts/dislike/${id}`, likes, {
  //         headers: {
  //           "x-auth-token": userData.token,
  //         },
  //       })
  //       .then((res) => {
  //         setLikes(res.data);

  //         history.push("/");
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   const getData = async () => {
  //     await axios.get(`${url}/posts/`).then((res) => {
  //       setPosts(res.data);
  //     });
  //   };
  //   getData();
  // }, [likes]);

  return (
    <section className="post-wrapper">
      {!postsRedux.length ? (
        <div className="spinner-wrapper">
          <CircularProgress className="spin" />
        </div>
      ) : (
        <>
          {userData.user ? (
            <>
              {postsRedux
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
                          <div className="like-details">
                            <ThumbUpIcon
                              className="like-btn"
                              //onClick={() => LikePost(post._id)}
                            />
                            {post.likes}
                            <ThumbDownAltIcon
                              className="dislike-btn"
                              //onClick={() => disLikePost(post._id)}
                            />
                            Created: {moment(`${post.createdAt}`).fromNow()}
                            <CommentIcon /> {post.comments.length}
                          </div>
                          <div className="post-actions">
                            <Link
                              className="link-item"
                              to={`/edit-post/${post._id}`}
                            >
                              <EditIcon />
                            </Link>
                            <Link className="link-item" to="/">
                              <DeleteForeverIcon
                                //onClick={() => deletePost(post._id)}
                              />
                            </Link>
                          </div>
                        </section>
                      </section>
                    </li>
                  );
                })
                .reverse()}
            </>
          ) : (
            <>
              {postsRedux
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
                          <p className="likes">Liked {post.likes} times</p>
                          <p>
                            Created: {moment(`${post.createdAt}`).fromNow()}
                          </p>
                          <p>{post.comments.length} comments</p>
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
