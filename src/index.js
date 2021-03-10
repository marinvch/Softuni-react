import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import Register from "./components/register/Register";
import "./index.css";

let App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Homepage} />
        <Route path={"/register"} component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
