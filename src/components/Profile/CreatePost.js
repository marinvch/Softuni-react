import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import jwtDecode from "jwt-decode";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const history = useHistory();
  async function createPost(e) {
    e.preventDefault();
    try {
     console.log(window)
      const postData = {
        title,
        content,
        createdAt: new Date(),
      };

      await axios.post("", postData);
      history.pushState("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <Navigation />
      <form onSubmit={createPost}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit">Save new post</button>
      </form>
      <Footer />
    </div>
  );
};

export default CreatePost;
