import React, { useContext, useState, useEffect } from "react";

import "./Styles/Profile.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { url } from "../../Api/index";
import axios from "axios";

function Profile() {
  const [posts, setPosts] = useState(0);

  return (
    <>

      <section className="profile">
        <h1 className="username"> Username:</h1>{" "}
        <section> Number of posts: {posts} </section>{" "}
      </section>

    </>
  );
}

export default Profile;
