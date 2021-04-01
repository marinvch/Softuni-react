import React, { useState, useEffect, useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { url } from "../../Api/index";
import axios from "axios";
import UserContext from "../../Context/UserContext";

const EditPost = (props) => {
  const { userData } = useContext(UserContext);
  const [post, setPost] = useState({});

  useEffect(() => {
    console.log(props);
    let id = props.match.params.id;
    const getPost = async () => {
      await axios.get(`${url}/posts/${id}`).then((res) => {
        setPost(res.data);
      });
    };
    getPost()
  }, [props]);

  return (
    <>
      {!post.title || !post.content ? (
        <CircularProgress />
      ) : (
        <section className="post-wrapper">
          <p>{post.title}</p>
          <p>{post.content}</p>
          {userData.user ? <button>Add Comment</button> : <></>}
        </section>
      )}
    </>
  );
};

export default EditPost;
