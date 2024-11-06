import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onClearList, onToggleItem }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.desscription.localCompare(b.desscription));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => {
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
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'> Sort by input order</option>
          <option value='description'> Sort by description</option>
          <option value='packed'> Sort by packed</option>
        </select>
      </div>
      {items.length > 0 ? (
        <button onClick={() => onClearList()}>ClearList</button>
      ) : (
        <h4>Start parking your stuff o</h4>
      )}
    </div>
  );
};

export default PackingList;
