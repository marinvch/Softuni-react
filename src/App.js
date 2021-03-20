import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getToken } from "./Components/Api/index";
import UserContext from "./Context/UserContext";

import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";

import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import CreatePost from "./Components/Post/CreatePost";
import EditPost from "./Components/Post/EditPost";

import Profile from "./Components/Profile/Profile";
import DeletePost from "./Components/Post/DeletePost";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    let token = localStorage.getItem("auth-token");
    const tokenRes = getToken({
      headers: {
        "x-auth-token": token,
      },
    });

    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }

    if (tokenRes.data) {
      setUserData(tokenRes.data);
    }
    getToken();
    console.log(userData)
  }, [userData]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/createpost" component={CreatePost} />
          <Route path="/editpost" component={EditPost} />
          <Route path="/deletepost" component={DeletePost} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
