import React from "react";
// import { useHistory } from "react-router-dom";
// import Moment from "moment";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import "./Styles/Post.css";

function Post({ post }) {
  // const history = useHistory();
  // const edit = () => history.push("/editpost/:id");
  // const viewPost = () => history.push("/viewpost");

  return (
    <>
      {/* {userData.user ? (
        <>
          <p className="user">{post.author}</p>
          <section className="content">
            <button className="view-post-wrapper" onClick={viewPost}>
              <p className="post-title"> {post.title}</p>
              <hr />
              <p> {post.content}</p>
            </button>
            <section className="post-options">
              <button onClick={() => {}}>
                <ThumbUpAltIcon fontSize="small" />
                Like
                {post.likes}
              </button>
              <button>
                <DeleteOutlineIcon fontSize="small" /> Delete
              </button>
            </section>
          </section>
          <section className="post-options">
            <p className="info">
              {post.likes}
              {Moment(`${post.createdAt}`).fromNow()}
              <button onClick={edit}>
                <EditIcon fontSize="small" /> Edit
                {post.likes}
              </button>
            </p>
          </section>
        </>
      ) : (
        <>
          <p className="user">{post.author}</p>
          <section className="content">
            <button className="view-post-wrapper" onClick={viewPost}>
              <p className="post-title"> {post.title}</p>
              <hr />
              <p> {post.content}</p>
              Likes
            </button>
          </section>
          <p className="info">
            {post.likes}
            {Moment(`${post.createdAt}`).fromNow()}
          </p> */}
    </>
    //   )}
    // </>
  );
}

export default Post;
