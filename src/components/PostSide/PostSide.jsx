import React from "react";
import "./PostSide.css";
import AddPost from "../AddPost/AddPost";
import Posts from "../Posts/Posts";

const PostSide = () => {
  return (
    <div className="PostSide">
      <AddPost />
      <Posts />
    </div>
  );
};

export default PostSide;
