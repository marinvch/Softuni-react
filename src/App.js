import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { url } from "./Api/index";
import axios from "axios";
import UserContext from "./Context/UserContext";

import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import CreatePost from "./Components/Post/CreatePost";
import ViewPost from "./Components/Post/ViewPost";
import EditPost from "./Components/Post/EditPost";

import Profile from "./Components/Profile/Profile";


import "./App.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

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
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Switch>
          {/* Navigation */}
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />

          <Route path="/add-post" component={CreatePost} />
          <Route path="/view-post/:id" component={ViewPost} />
          <Route path="/edit-post/:id" component={EditPost} />

          {/* Post Routes */}
        </Switch>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}
