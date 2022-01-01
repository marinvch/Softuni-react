import React from "react";
import { Container, Grow, Grid } from "@mui/material/";
import Posts from "../Post/Posts";

function Home() {
  return (
    <Container>
      <Grid container justify="space-between" alignItems="strech" spacing={3}>
        <Grid item xs={12} sm={7}>
          <Posts />
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
      </Grid>
    </Container>
  );
}

export default Home;
