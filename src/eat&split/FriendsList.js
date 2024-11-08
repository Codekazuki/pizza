import React from "react";
import Friend from "./Friend";

const FriendsList = ({ friend }) => {
  return (
    <ul>
      {friend.map((friend) => {
        return <Friend friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};

export default FriendsList;
