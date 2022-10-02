import React from "react";
import "./LogoSearch.css";
import Logo from "../../img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const LogoSearch = () => {
  return (
    <div className="logoSearch">
      <Link to="../home">
        <img src={Logo} alt="" />
      </Link>
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
