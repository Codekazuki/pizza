import React from "react";

const FormSplitBill = () => {
  return (
    <form className='form-split-bill'>
      <h2>Split bill with X</h2>
      <label>Bill Value</label>
      <input type='text' />
      <label>Your expenses</label>
      <input type='text' />
      <label>X's expenses</label>
      <input type='text' disabled />
      <label>Who dey pay bill?</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>X</option>
      </select>
    </form>
  );
};

export default FormSplitBill;
