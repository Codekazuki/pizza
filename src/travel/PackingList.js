import React from "react";

const PackingList = ({ items, onDeleteItem, onClearList }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => {
          return <Item key={item.id} onDeleteItem={onDeleteItem} item={item} />;
        })}
      </ul>
      <button onClick={() => onClearList()}>ClearList</button>
    </div>
  );
};

export default PackingList;

const Item = ({ item, onDeleteItem }) => {
  return (
    <li>
      <span
        style={
          item.packed ? { textDecoration: "line-through", color: "green" } : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};
