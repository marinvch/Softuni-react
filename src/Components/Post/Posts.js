import React, { useEffect, useState } from "react";
import "./Styles/Post.css";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/postActions";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Post = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {posts === null ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        posts.posts?.map((post, id) => {
          return (
            <Box sx={{ flexGrow: 1 }} key={id}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <p>{post.title}</p>
                </Grid>
              </Grid>
            </Box>
          );
        })
      )}
    </>
  );
};

export default Post;
