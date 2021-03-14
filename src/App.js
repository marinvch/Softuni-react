import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Page/Header/Navigation";
import Main from "./components/Page/Main/Main";
import Footer from "./components/Page/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch></Switch>
      <Main />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
