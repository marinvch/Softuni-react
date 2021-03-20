import React from "react";
import "./Styles/Header.css";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const home = () => history.push("/");
  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const profile = () => history.push("/profile");
  const createPost = () => history.push("/createpost");

  const logout = () => {
    localStorage.setItem("auth-token", "");
    history.push("/");
  };

  return (
    <header className="header">
      <section className="logo">
        <h1>MERN FORUM</h1>{" "}
      </section>
      <section>
        <button onClick={home}>Home</button>
        <button onClick={createPost}>Add Post</button>
        <button onClick={profile}>Profile</button>
        <button onClick={logout}>Logout</button>
        <button onClick={home}>Home</button>
        <button onClick={register}>Register</button>
        <button onClick={login}>Login</button>
      </section>
      {/* ) : (
        <section>
          <button onClick={home}>Home</button>
          <button onClick={register}>Register</button>
          <button onClick={login}>Login</button>
        </section>
      )} */}
    </header>
  );
};

export default Header;
