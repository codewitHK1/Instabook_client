import React from "react";

import LogoSearch from "../LogoSearch/LogoSearch";
import FollowerCard from "../FollowerCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowerCard />
    </div>
  );
};

export default ProfileLeft;
