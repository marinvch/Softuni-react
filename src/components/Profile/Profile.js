import React, { useContext, useState, useEffect } from "react";

import UserContext from "../../Context/UserContext";
import "./Styles/Profile.css";
import CircularProgress from "@material-ui/core/CircularProgress";

function Profile() {
  const { userData } = useContext(UserContext);

  return (
    <>
      {!userData.user ? (
        <CircularProgress />
      ) : (
        <section className="profile">
          <h1 className="username"> {userData.user.username}</h1>
          <section>Number of posts: {userData.user.posts.length}</section>
          <section>Number of comments : {0}</section>
        </section>
      )}
    </>
  );
}

export default Profile;
