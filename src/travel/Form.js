import React, { useState } from "react";

const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { quantity, description, packed: false, date: Date.now() };
    setQuantity(1);
    setDescription("");
  };
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you to pack?</h3>
      <select
        name='quantity'
        id='quantity'
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='item.....'
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
