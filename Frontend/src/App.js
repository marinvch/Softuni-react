import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@mui/material/";
import Layout from "./components/Layout";

import Auth from "./pages/authPage";
import Register from "./components/Auth/Register";
import User from "./components/Profile/User";

import PostDetails from "./components/Post/PostDetails";
import Profile from "./components/Profile/Profile";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Container fullwidth="true">
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/register" component={Register} />
            {/* Post Routes */}
            <Route path="/posts/:id" component={PostDetails} />

            {/* User Routes */}
            <Route path="/dashbord" component={User} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Layout>
      </Container>
    </BrowserRouter>
  );
}
