import React from "react";
import Friend from "./Friend";

const FriendsList = ({ friend, onSelection, selectedFriend }) => {
  return (
    <ul>
      {friend.map((friend) => {
        return (
          <Friend
            friend={friend}
            onSelection={onSelection}
            key={friend.id}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
};

export default FriendsList;
