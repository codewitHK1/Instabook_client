import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../../actions/userAction";

const User = ({ person }) => {
  const { user } = useSelector((state) => state.authreducer.authData);
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const dispatch = useDispatch();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleFallow = () => {
    following
      ? dispatch(unFollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };
  return (
    <div className="followers">
      <div>
        <img
          src={
            person.profilePicture
              ? serverPublic + person.profilePicture
              : serverPublic + "profileImg.jpg"
          }
          className="followerimages"
          alt=""
        />
        <div className="name">
          <span>{person.firstname}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button
        className={
          following ? "button fc-button Unfollowbutton" : "button fc-button"
        }
        onClick={handleFallow}
      >
        {following ? "Unfollow" : "Fallow"}
      </button>
    </div>
  );
};

export default User;
