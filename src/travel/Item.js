const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
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

export default Item;
