import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import UserContext from "../../Context/UserContext";
import { url } from "../../Api/index";
import axios from "axios";

const EditPost = (props) => {
  const history = useHistory();
  const { userData } = useContext(UserContext);
  const [message, setMessage] = useState({});
 

  const updatePost = (e) => {
    e.preventDefault();

    const data = {
      title: message.title,
      content: message.content,
    };

    axios
      .put(`${url}/posts/${props.match.params.id}`, data, {
        headers: {
          "x-auth-token": userData.token,
        },
      })
      .then(history.push("/"));
  };

  useEffect(() => {
    axios.get(`${url}/posts/${props.match.params.id}`).then((res) => {
      setMessage(res.data);
    });
  }, [props.match.params.id]);

  return (
    <section className="post-wrapper">
      <h1>Edit Post</h1>
      {!message.title || !message.content ? (
        <CircularProgress />
      ) : (
        <form>
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
          <button onClick={updatePost}>Save new post</button>
        </form>
      )}
    </section>
  );
};

export default EditPost;
