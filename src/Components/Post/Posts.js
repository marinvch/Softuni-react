import React from "react";
import { useSelector } from 'react-redux';

import CircularProgress from "@material-ui/core/CircularProgress";


import "./Styles/Post.css";
import CommentIcon from "@material-ui/icons/Comment";

import moment from "moment";


function Post() {
  const posts = useSelector((state) => state.posts)

  return (
    <section className="post-wrapper">
      { posts.map(post => {
        <h1>{ post }</h1>
      }) }
    </section >

  )
}

export default Post;
