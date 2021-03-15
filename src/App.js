import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Page/Header/Navigation";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Main from "./components/Page/Main/Main";
import Footer from "./components/Page/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
