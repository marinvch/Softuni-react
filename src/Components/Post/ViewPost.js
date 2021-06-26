import React, { useState, useEffect, useContext } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";


import CreateComment from "../Comment/CreateComment";

import moment from "moment";

import "./Styles/Viewpost.css";
import AddIcon from "@material-ui/icons/Add";

const ViewPost = (props) => {


  return (

    <section className="post-wrapper">
      <section className="current-post">
        <p className="current-post-title">Title: </p>
        <p>Content:</p>
      </section>
      <p>
        <AddIcon className="addComment" />
      </p>
      <section className="comments-wrapper">
      </section>
    </section>
  )
};

export default ViewPost;
