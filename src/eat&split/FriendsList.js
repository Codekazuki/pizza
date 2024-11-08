import React from "react";
import Friend from "./Friend";

const FriendsList = ({ friend, onSelection }) => {
  return (
    <ul>
      {friend.map((friend) => {
        return (
          <Friend friend={friend} onSelection={onSelection} key={friend.id} />
        );
      })}
    </ul>
  );
};

export default FriendsList;
