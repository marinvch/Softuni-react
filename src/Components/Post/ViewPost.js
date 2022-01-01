import React from "react";

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
      <section className="comments-wrapper"></section>
    </section>
  );
};

export default ViewPost;
