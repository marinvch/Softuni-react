import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import UserContext from "../../Context/UserContext";
import { url } from "../../Api/index";
import axios from "axios";

const EditPost = (props) => {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const [message, setMessage] = useState({});

  let id = props.match.params.id;
  const updatePost = async (e) => {
    e.preventDefault();

    const data = {
      title: message.title,
      content: message.content,
    };

    await axios.put(`${url}/posts/${id}`, data, {
      headers: {
        "x-auth-token": userData.token,
      },
    });
    history.push("/");
  };

  useEffect(() => {
    const loadPost = async () => {
      const post = await axios.get(`${url}/posts/${id}`).then((res) => {
        setMessage(res.data);
      });
      console.log(post);
    };
    loadPost();
  }, [id]);

  return (
    <section className="post-wrapper">
      <h1>Edit Post</h1>
      {!message.title || !message.content ? (
        <CircularProgress />
      ) : (
        <form onSubmit={updatePost}>
          <input
            className="post-input"
            value={message.title}
            onChange={(e) => setMessage({ ...message, title: e.target.value })}
            type="text"
          />
          <input
            className="post-input"
            value={message.content}
            onChange={(e) =>
              setMessage({ ...message, content: e.target.value })
            }
            type="text"
          />
          <button type="submit">Save new post</button>
        </form>
      )}
    </section>
  );
};

export default EditPost;
