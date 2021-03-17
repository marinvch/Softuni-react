import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Home from "./components/layout/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import UserContext from "./context/UserContext";
import CreatePost from "./components/Profile/CreatePost";
import EditPost from "./components/Profile/EditPost";
import Profile from "./components/Profile/Profile";
import DeletePost from "./components/Profile/DeletePost";

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLogedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/auth/validToken",
        null,
        {
          headers: { "x-auth-token": token },
        }
      );

      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/auth/", {
          headers: {
            "x-auth-token": token,
          },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLogedIn();
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/addpost" component={CreatePost} />
            <Route path="/editpost" component={EditPost} />
            <Route path="/deletepost" component={DeletePost} />
          </Switch>
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
