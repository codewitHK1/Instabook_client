import React, { useEffect } from "react";
import "./FollowersCard.css";
import { useSelector } from "react-redux";

import User from "../User/User";
import { useState } from "react";
import { getAllUser } from "../../Api/UserRequest";

const FollowersCard = () => {
  const [person, setPerson] = useState([]);
  const { user } = useSelector((state) => state.authreducer.authData);
  useEffect(() => {
    const fetchPerson = async () => {
      const { data } = await getAllUser();
      setPerson(data);
    };
    fetchPerson();
  }, []);
  return (
    <div className="FollowersCard">
      <h3>Peoples you may know</h3>
      {person.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />;
        }
      })}
    </div>
  );
};

export default FollowersCard;
