import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewPost({ post }) {
  const [data, setData] = useState();
  const { _id } = useParams();
  const load = async () => {};

  useEffect(() => {
    axios.get(`http://localhost:posts/:${_id}`).then((res) => {
      console.log(res.data);
    });
  }, [_id]);
  return (
    <div>
      <form onLoad={load}>
        <h1>Post Title{post.title}</h1>
        <section>Comments</section>
      </form>
    </div>
  );
}

export default ViewPost;
