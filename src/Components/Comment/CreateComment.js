import React, { useState, useContext } from "react";

import UserContext from "../../Context/UserContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import "./Styles/CreateComment.css";
import { useHistory } from "react-router-dom";
import {url}  from "../../Api/index";
import axios from "axios";

const CreateComment = ({ props }) => {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const id = props.match.params.id;

  //Post data
  const [data, setData] = useState({
    content: "",
    date: "",
    author: "",
    postId: id,
  });

  const addComment = async (e) => {
    e.preventDefault();

    try {
      //Validation
      if (!data.content) {
        return alert("Fill all Fields.");
      }

      //Check is LoggedIn
      if (userData.token) {
        data.date = new Date();
        data.author = userData.user.username;
      }

      //Sending Post Request to the backend
      await axios.post(`${url}/comments/add`, data, {
        headers: {
          "x-auth-token": userData.token,
        },
      });
      history.push(`/`);

      //Relocating to post Page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="comments-wrapper">
      {!userData.user ? (
        <CircularProgress />
      ) : (
        <section className="comments-wrapper">
          <h1>Add New Comment</h1>
          <form onSubmit={addComment}>
            <input
              className="comment-input"
              type="text"
              placeholder="enter your comment"
              onChange={(e) => setData({ ...data, content: e.target.value })}
            />
            <button type="submit">Save new Comment</button>
          </form>
        </section>
      )}
    </section>
  );
};

export default CreateComment;
