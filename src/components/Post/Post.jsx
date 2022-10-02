import React from "react";
import "./post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import { likePost } from "../../Api/PostRequest";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authreducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div className="Post">
      <div className="details">
        <div className="user">
          <img src={serverPublic + user.profilePicture} alt="" />
          <span style={{ fontWeight: "bold" }} className="user_name">
            {user.firstname}
            {user.lastname}
          </span>
        </div>
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ curser: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
    </div>
  );
};

export default Post;
