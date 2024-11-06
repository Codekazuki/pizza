import React from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onClearList, onToggleItem }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              onDeleteItem={onDeleteItem}
              item={item}
              onToggleItem={onToggleItem}
            />
          );
        })}
      </ul>
      <button onClick={() => onClearList()}>ClearList</button>
    </div>
  );
};

export default PackingList;
