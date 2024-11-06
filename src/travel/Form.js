import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you to pack?</h3>
      <select name='' id=''>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type='text' placeholder='item.....' />
      <button>Add</button>
    </form>
  );
};

export default Form;
