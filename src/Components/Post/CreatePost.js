import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import "./Styles/Createpost.css";
import { url } from "../../Api/index";
import axios from "axios";

const CreatePost = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  //Post data
  const [data, setData] = useState({
    title: "",
    content: "",
    date: "",
    author: "",
  });

  const addPost = async (e) => {
    e.preventDefault();

    try {
      //Validation
      if (!data.title || !data.content) {
        return alert("Fill all Fields.");
      }

      //Check is LoggedIn
      if (userData.token) {
        data.date = new Date();
        data.author = userData.user.id;
      }

      //Sending Post Request to the backend
      await axios.post(`${url}/posts/createpost`, data, {
        headers: {
          "x-auth-token": userData.token,
        },
      });

      //Relocating to home Page
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="post-wrapper">
      <h1>Add New Post</h1>
      <form onSubmit={addPost}>
        <input
          className="post-input"
          type="text"
          placeholder="Title"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <input
          className="post-input"
          type="text"
          placeholder="Content"
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <button type="submit">Save new post</button>
      </form>
    </section>
  );
};

export default CreatePost;
