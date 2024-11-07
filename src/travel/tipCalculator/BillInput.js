import React from "react";

const BillInput = ({ bill, setBill }) => {
  return (
    <div>
      <label htmlFor=''>How much was the bill?</label>
      <input
        type='text'
        placeholder='bill value'
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
};

export default BillInput;
