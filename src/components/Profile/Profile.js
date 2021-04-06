import React, { useContext, useState, useEffect } from "react";

import UserContext from "../../Context/UserContext";
import "./Styles/Profile.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { url } from "../../Api/index";
import axios from "axios";

function Profile() {
  const { userData } = useContext(UserContext);
  const [posts, setPosts] = useState(0);
  useEffect(() => {
    axios
      .get(`${url}/auth/currentuser`, {
        headers: {
          "x-auth-token": userData.token,
        },
      })
      .then((res) => {
        console.log(res.data)
        setPosts(res.data.posts.length);
      });
  }, [userData.token]);
  return (
    <>
      {!userData.user ? (
        <CircularProgress />
      ) : (
        <section className="profile">
          <h1 className="username"> Username: {userData.user.username}</h1>
          <section>Number of posts: {posts}</section>
        </section>
      )}
    </>
  );
}

export default Profile;
