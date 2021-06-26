import React, { useState, useContext } from "react";


import CircularProgress from "@material-ui/core/CircularProgress";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import "./Styles/CreateComment.css";
import { useHistory } from "react-router-dom";



const CreateComment = () => {

  return (
    <section className="comments-wrapper">
      <section className="comments-wrapper">
        <h1>Add New Comment</h1>
        <form>
          <input
            className="comment-input"
            type="text"
            placeholder="enter your comment"
          />
          <button type="submit">Save new Comment</button>
        </form>
      </section>
    </section>
  )
};

export default CreateComment;
