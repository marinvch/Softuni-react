import React, { useState, useEffect, useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import  {url}  from "../../Api/index";
import axios from "axios";

import UserContext from "../../Context/UserContext";
import CreateComment from "../Comment/CreateComment";

import moment from "moment";

import "./Styles/Viewpost.css";
import CommentIcon from '@material-ui/icons/Comment';
import AddIcon from "@material-ui/icons/Add";

const ViewPost = (props) => {
  const { userData } = useContext(UserContext);
  const [post, setPost] = useState({});
  const [showComment, setShowComment] = useState(false);

  const showCommentInput = () => {
    setShowComment(!showComment);
  };

  useEffect(() => {
    let id = props.match.params.id;

    const getPost = async () => {
      await axios.all([
        await axios.get(`${url}/posts/${id}`).then((res) => {
          setPost(res.data);
        }),
      ]);
    };

    getPost();
  }, [props.match.params.id]);

  return (
    <>
      {!post.title || !post.content ? (
        <CircularProgress />
      ) : (
        <section className="post-wrapper">
          <section className="current-post">
            <p className="current-post-title">Title: {post.title}</p>
            <p>Content: {post.content}</p>
          </section>
          {userData.user ? (
            <>
              <p>
                <AddIcon className="addComment" onClick={showCommentInput} />
              </p>
              {showComment && <CreateComment props={props} />}
            </>
          ) : (
            <>
              <p>Need to be logged in to comment this post</p>
            </>
          )}
          <section className="comments-wrapper">
            {post.comments
              .map((c) => {
                return (
                  <li className="item-wrapper" key={c._id}>
                    <section className="comment-content">
                      <p>{c.content}</p>
                    </section>
                    <section className="comment-details">
                      <p>createdBy: {c.author} </p>

                      <p>createdAt: {moment(`${c.createdAt}`).fromNow()}</p>
                    </section>
                  </li>
                );
              })
              .reverse()}
          </section>
        </section>
      )}
    </>
  );
};

export default ViewPost;
