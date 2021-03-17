import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { userData } = useContext(UserContext);

  const history = useHistory();
  async function createPost(e) {
    const author = userData.user.id;
    console.log(author);
    e.preventDefault();
    try {
      const postData = {
        title,
        content,
        createdAt: new Date(),
        author,
      };

      await axios.post("http://localhost:5000/posts", postData);
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
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
    </div>
  );
};

export default CreatePost;
