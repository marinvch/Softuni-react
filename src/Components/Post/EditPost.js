import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const EditPost = (props) => {


  return (
    <section className="post-wrapper">
      <h1>Edit Post</h1>
      <form >
        <input
          className="post-input"
          type="text"
        />
        <input
          className="post-input"
          type="text"
        />
        <button type="submit">Save new post</button>
      </form>
    </section>
  );
};

export default EditPost;
