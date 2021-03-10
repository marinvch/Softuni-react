import React, { useState, useEffect } from "react";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import axios from "axios";
import "./Discusion.css";

function Discusion() {
  const url = "http://localhost:5000/posts";
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  if (post) {
    return (
      <div className="discusion-wrapper">
        <section className="user-icon inner-discusion-wrapper">
          <AccountCircleRoundedIcon />
          <p>{post.title}</p>
        </section>
        <section className="user-content inner-discusion-wrapper">
          <p> </p>
          <p> </p>
        </section>
        <section className="comments inner-discusion-wrapper">
          <button>
            <ThumbUpAltRoundedIcon />
          </button>

          <section>
            Last Comment from:<p> </p>
          </section>
        </section>
      </div>
    );
  } else {
    return (
      <div className="discusion-wrapper">
        <section className="user-icon inner-discusion-wrapper">
          <AccountCircleRoundedIcon />
          <p></p>
        </section>
        <section className="user-content inner-discusion-wrapper">
          <p> </p>
          <p> </p>
        </section>
        <section className="comments inner-discusion-wrapper">
          <button>
            <ThumbUpAltRoundedIcon />
          </button>

          <section>
            Last Comment from:<p> </p>
          </section>
        </section>
      </div>
    );
  }
}

export default Discusion;
