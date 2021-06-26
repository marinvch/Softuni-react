import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts'
import { Container, Grow, Grid } from '@material-ui/core';

import Posts from "../Post/Posts";
import Form from '../Form/Form';

function Home() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Grow in>
      <Container>
        <Grid container justify='space-between' alignItems='strech' spacing={ 3 }>
          <Grid item xs={ 12 } sm={ 7 }>
            <Posts setCurrentId={ setCurrentId } ></Posts>
          </Grid>
          <Grid item xs={ 12 } sm={ 4 }>
            <Form currentId={ currentId } setCurrentId={ setCurrentId }></Form>
          </Grid>

        </Grid>
      </Container>
    </Grow>
  )

}

export default Home;