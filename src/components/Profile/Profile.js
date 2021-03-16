import React from "react";
import "./Styles/Profile.css";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

function Profile() {
  return (
    <>
      <Navigation />
      <section className="profile">
        <h1> User Profile</h1>
        <input type="password" placeholder="New password"></input>
        <input type="password" placeholder="Confirm new password"></input>
        <button type="submit"> Save</button>
      </section>
      <Footer />
    </>
  );
}

export default Profile;
