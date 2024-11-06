import React from "react";

const Stats = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className='stats'>
      {numItems === 0
        ? "You have not packed anything"
        : numItems === 1
        ? "You have 1 item on your list"
        : `You have ${numItems} items on your list`}
      <h4>
        {numPacked === 0
          ? ""
          : `You have parked ${numPacked} items which is ${percent} %`}
      </h4>
    </footer>
  );
};

export default Stats;
