import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import CircularProgress from "@material-ui/core/CircularProgress";

import "./Styles/Createpost.css";

const CreatePost = () => {
  // const dispatch = useDispatch();

  // const history = useHistory();

  // //Post data
  // const [data, setData] = useState({
  //   title: "",
  //   content: "",
  //   date: "",
  //   author: "",
  // });

  // const addPost = (e) => {
  //   e.preventDefault();

  //   try {
  //     //Validation
  //     if (!data.title || !data.content) {
  //       return alert("Fill all Fields.");
  //     }

  //     //Sending Post Request to the backend
  //     dispatch(createPost(data, {

  //     }))


  //     //Relocating to home Page
  //     history.push(`/`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <section className="post-wrapper">
      <h1>Add New Post</h1>
      <form >
        <input
          className="post-input"
          type="text"
          placeholder="Title"
        />
        <input
          className="post-input"
          type="text"
          placeholder="Content"
        />
        <button type="submit">Save new post</button>
      </form>
    </section>
  );
};

export default CreatePost;
