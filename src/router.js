import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Profile from "./components/Profile/Profile";
import AuthContext from "./context/AuthContext";
import Home from "./components/layout/Home";
import CreatePost from "./components/Profile/CreatePost";
import EditPost from "./components/Profile/EditPost";

function Router() {
  const { logedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {logedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {logedIn === true && (
          <>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/createpost">
              <CreatePost />
            </Route>
            <Route path="/editpost">
              <EditPost />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
