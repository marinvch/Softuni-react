import React, { useState, useEffect, useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { url } from "../../Api/index";
import axios from "axios";
import "./Styles/Viewpost.css";
import UserContext from "../../Context/UserContext";
import CreateComment from "../Comment/CreateComment";

const EditPost = (props) => {
  const { userData } = useContext(UserContext);
  const [post, setPost] = useState({});

  useEffect(() => {
    let id = props.match.params.id;
    const getPost = async () => {
      await axios.get(`${url}/posts/${id}`).then((res) => {
        setPost(res.data);
      });
    };
    getPost();
  }, [props]);

  return (
    <>
      {!post.title || !post.content ? (
        <CircularProgress />
      ) : (
        <section className="post-wrapper">
          <p>{post.title}</p>
          <p>{post.content}</p>
          {userData.user ? <CreateComment /> : <></>}
        </section>
      )}
    </>
  );
};

export default EditPost;
