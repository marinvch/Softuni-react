import axios from "axios";
import React, { useState, useContext } from "react";
import UserContext from "../../Context/UserContext";
import { url } from "../../Api/index";
import { useHistory } from "react-router-dom";

function CreateComment() {
  const history = useHistory();
  const { userData } = useContext(UserContext);
  const id = userData.user.id;
  const [comment, setComment] = useState();

  const addComment = async (e, id) => {
    e.preventDefault();

    const data = {
      comment: comment,
      postedBy: userData.user.id,
    };
    console.log(data);
    await axios
      .put(`${url}/posts/comment`, data, {
        headers: {
          "x-auth-token": userData.token,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <form onSubmit={addComment}>
      <input
        type="text"
        name="comment"
        placeholder="Enter your comment."
        onChange={(e) => setComment({ ...comment, text: e.target.value })}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
}

export default CreateComment;
