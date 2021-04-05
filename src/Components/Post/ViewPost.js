import React, { useState, useEffect, useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { url } from "../../Api/index";
import axios from "axios";
import "./Styles/Viewpost.css";
import UserContext from "../../Context/UserContext";
import CreateComment from "../Comment/CreateComment";
import moment from "moment";

const ViewPost = (props) => {
  const { userData } = useContext(UserContext);
  const [post, setPost] = useState({});
  //const [comments, setComments] = useState([]);

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
            <p className="current-post-title">{post.title}</p>
            <p>{post.content}</p>
          </section>

          <section className="comments-wrapper">
            {post.comments
              .map((c) => {
                return (
                  <li className="item-wrapper" key={c._id}>
                    <section className="comment-content">
                      <p>{c.content}</p>
                    </section>
                    <section className="comment-details">
                      <p>createdBy:{c.author} </p>
                      <p>createdAt: {moment(`${c.createdAt}`).fromNow()} </p>
                    </section>
                  </li>
                );
              })
              .reverse()}
          </section>
          {userData.user ? <CreateComment props={props} /> : <></>}
        </section>
      )}
    </>
  );
};

export default ViewPost;
