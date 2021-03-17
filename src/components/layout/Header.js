import React, { useContext } from "react";
import "./Styles/Navigation.css";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Header = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const home = () => history.push("/");
  const register = () => history.push("/register");
  const login = () => history.push("/login");

  const profile = () => history.push("/profile");
  const addPost = () => history.push("/addpost");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <header className="header">
      <nav>
        <section>MERN FORUM</section>
        {userData.user ? (
          <>
            <button onClick={home}>Home</button>
            <button onClick={addPost}>Addpost</button>
            <button onClick={profile}>Profile</button>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={home}>Home</button>
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
