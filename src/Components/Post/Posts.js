import React, { useEffect, useState } from "react";
import "./Styles/Post.css";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/postActions";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
import { Container, Box, Grid, Typography } from "@mui/material/";

import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material/";

const Post = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(posts);
  return (
    <Container fluid>
      {posts === null ? (
        <List sx={{ width: "100%", maxWidth: 1200 }}>
          <CircularProgress />
        </List>
      ) : (
        posts.posts?.map((post, id) => {
          return (
            <List
              sx={{
                width: "100%",
                maxWidth: 1200,
                justifyContent: "space-between",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    {post?.author?.username.charAt(0).toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={post.title}
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {post.content}
                    </Typography>
                  }
                />
                <Divider />
                <Grid>
                  <ListItemText>
                    <Typography variant="subtitle2">
                      likes: {post.likes}
                    </Typography>
                    <Typography variant="subtitle2">
                      posted: {moment(post.createdAt).fromNow()}
                    </Typography>
                  </ListItemText>
                </Grid>
              </ListItem>
            </List>
          );
        })
      )}
    </Container>
  );
};

export default Post;
