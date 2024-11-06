import React from "react";

const Stats = ({ items }) => {
  const numPacked = items.filter((item) => item.packed).length;
  console.log(numPacked);
  return (
    <footer className='stats'>
      {items.length === 0
        ? "You have not selected anything"
        : items.length === 1
        ? "You have 1 item on your list"
        : `You have ${items.length} items on your list`}
      <h4>You have parked {numPacked} items</h4>
    </footer>
  );
};

export default Stats;
