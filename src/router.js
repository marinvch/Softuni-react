import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";

import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import CreatePost from "./Components/Post/CreatePost";
import EditPost from "./Components/Post/EditPost";

import Profile from "./Components/Profile/Profile";
import DeletePost from "./Components/Post/DeletePost";
import AuthContext from "./Context/UserContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {loggedIn === false && (
          <>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/profile" component={Profile} />
            <Route path="/createpost" component={CreatePost} />
            <Route path="/editpost" component={EditPost} />
            <Route path="/deletepost" component={DeletePost} />
          </>
        )}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
