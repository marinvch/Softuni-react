import React from "react";
import "./Styles/Profile.css";

function Profile() {
  return (
    <>
      <section className="profile">
        <h1> User Profile</h1>
        <input type="password" placeholder="New password"></input>
        <input type="password" placeholder="Confirm new password"></input>
        <button type="submit"> Save</button>
      </section>
    </>
  );
}

export default Profile;
