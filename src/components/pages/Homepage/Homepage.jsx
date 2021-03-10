import React from "react";
import "./homepage.css";
import Nav from "../Navigation/Navigation";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function Homepage() {
  return (
    <div className="wrapper">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default Homepage;
