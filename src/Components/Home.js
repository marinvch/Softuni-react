import React, { useContext, useEffect, useState } from "react";
import { getPosts } from "./Api/index";
import "./Styles/Home.css";

const Home = () => {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res.data);
    });
  }, []);

  return <section>some info will be here</section>;
};

export default Home;
