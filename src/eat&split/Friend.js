import React from "react";
import Button from "./Button";

const Friend = ({ friends }) => {
  return (
    <li>
      <img src={friends.image} alt='' />
      <h3>{friends.name}</h3>
      {friends.balance === 0 && <p> You and {friends.name} are even </p>}
      {friends.balance > 0 && (
        <p className='green'>
          {friends.name} owes you #{friends.balance}{" "}
        </p>
      )}
      {friends.balance < 0 && (
        <p className='red'>
          {" "}
          You owe {friends.name} #{Math.abs(friends.balance)}
        </p>
      )}
      <Button>Select</Button>
    </li>
  );
};

export default Friend;
