import React from "react";
const initialItems = [
  { id: 1, description: "passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 3, packed: false },
  { id: 3, description: "Ball", quantity: 1, packed: true },
];

const PackingList = ({ items }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default PackingList;

const Item = ({ item }) => {
  return (
    <li>
      <span
        style={
          item.packed ? { textDecoration: "line-through", color: "green" } : {}
        }
      >
        {" "}
        {item.quantity} {item.description}
      </span>
      {item.packed ? <button>❎</button> : <button>❌</button>}
    </li>
  );
};
