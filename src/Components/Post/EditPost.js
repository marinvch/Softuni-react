import React  from "react";

const EditPost = (...post) => {
  return (
    <section className="post-wrapper">
            <h1>Edit Post{post.key}</h1>
      <form>
        <input
          className="post-input"
          type="text"
          placeholder="Title"
          onChange={(e) => {}}
        />
        <input
          className="post-input"
          type="text"
          placeholder="Content"
          onChange={(e) => {}}
        />
        <button>Save new post</button>
      </form>
    </section>
  );
};

export default EditPost;
