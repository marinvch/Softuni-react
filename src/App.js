import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { url } from "./Api/index";
import axios from "axios";
import UserContext from "./Context/UserContext";

import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Posts from "./Components/Post/Posts";
import CreatePost from "./Components/Post/CreatePost";
import ViewPost from "./Components/Post/ViewPost";
import EditPost from "./Components/Post/EditPost";

import Profile from "./Components/Profile/Profile";

import CreateComment from "./Components/Comment/CreateComment";
import "./App.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await axios
      .get(`${url}/posts/`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => console.log(error));
  };

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    //check if the token is valid
    let tokenRes = await axios.post(`${url}/auth/validtoken`, null, {
      headers: {
        "x-auth-token": token,
      },
    });

    if (tokenRes.data) {
      let userRes = await axios.get(`${url}/auth/currentuser`, {
        headers: {
          "x-auth-token": token,
        },
      });
      setUserData({ token, user: userRes.data });
    }
  };

  useEffect(() => {
    checkLoggedIn();
    getPosts();
  }, [posts]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />

          {/* Post Routes */}
          <Route exact path="/" render={() => <Posts posts={posts} />} />
          <Route path="/create-post" component={CreatePost} />
          <Route
            path="/edit-post/:id"
            render={(props) => <EditPost {...props} posts={posts} />}
          />
          <Route
            path="/view-post/:id"
            render={(props) => <ViewPost {...props} posts={posts} />}
          />

          {/* Comment Routes */}
          <Route path="/createcomment" component={CreateComment} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}
