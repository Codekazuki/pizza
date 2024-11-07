import React from "react";
import Friend from "./Friend";

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friends) => {
        return <Friend friends={friends} />;
      })}
    </ul>
  );
};

export default FriendsList;
