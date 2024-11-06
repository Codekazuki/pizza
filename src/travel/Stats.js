import React from "react";

const Stats = ({ items }) => {
  return (
    <footer className='stats'>
      {items.length === 0
        ? "You have not selected anything"
        : items.length === 1
        ? "You have selected 1 item"
        : `You have selected ${items.length} items`}
      <h4>{items.packed ? "Item is packed" : "nothing parked"}</h4>
    </footer>
  );
};

export default Stats;
