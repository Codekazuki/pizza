import React from "react";
const initialItems = [
  { id: 1, description: "passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 3, packed: false },
  { id: 3, description: "Ball", quantity: 1, packed: false },
];

const PackingList = () => {
  return (
    <div className='list'>
      <ul>
        {initialItems.map((item) => {
          return <Item item={item} />;
        })}
      </ul>
    </div>
  );
};

export default PackingList;

const Item = ({ item }) => {
  return (
    <li>
      <span>
        {" "}
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};
