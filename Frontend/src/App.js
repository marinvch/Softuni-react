import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@mui/material/";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Register from "./components/Auth/Register";

import PostDetails from "./components/Post/PostDetails";

import { useSelector } from "react-redux";

import "./App.css";

export default function App() {
  const isUserLogedIn = useSelector((state) => state.auth.token);

  return (
    <BrowserRouter>
      <Container fullwidth="true">
        <Navbar isUsrLogedIn={isUserLogedIn} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/register" component={Register} />
          {/* POSTS ROUTES */}
          <Route path="/posts/:id" component={PostDetails} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
