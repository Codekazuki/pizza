import React from "react";
import Item from "./Item";

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
