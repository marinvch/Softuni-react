import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/Navbar";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login"></Route>
        <Route path="/dashbord"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
