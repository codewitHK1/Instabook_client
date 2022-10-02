import React from "react";
import "./ProfileSide.css";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import FollowersCard from "../FollowerCard/FollowersCard";

const ProfileSide = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard location="homepage" />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
