import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from '@material-ui/core'

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Auth from './Components/Auth/Auth'

import "./App.css";

export default function App() {

  return (
    <BrowserRouter>
      <Container fullWidth>
        <Home />
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/auth" component={ Auth } />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
