import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Styles/Main.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Main = () => {
  const { logedIn } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);

  const getData = async function () {
    await axios.get("http://localhost:5000/posts").then((res) => {
      setPosts(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="post-wrapper">
      {logedIn === false && (
        <>
          <ul className="post">
            {posts.map((post) => (
              <li key={post._id}>
                <p className="user">{post.author}</p>
                <p className="content">
                  {post.title}
                  {post.content}
                </p>
                <p className="info">
                  {post.likes}
                  {post.createdAt}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
      {logedIn === true && (
        <>
          <ul className="post">
            {posts.map((post) => (
              <li key={post._id}>
                <p className="user">{post.author}</p>
                <p className="content">
                  {post.title}
                  {post.content}
                </p>
                <p className="info">
                  {post.likes}
                  {post.createdAt}
                  <Link to="createpost">
                    <AddCircleIcon />
                  </Link>
                  <Link to="editpost">
                    <EditIcon />
                  </Link>
                  <Link to="deltepost">
                    <DeleteForeverIcon />
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Main;
