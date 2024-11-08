import React from "react";

const FormSplitBill = ({ selectedFriend }) => {
  return (
    <form className='form-split-bill'>
      <h2>Split bill with {selectedFriend.name}</h2>
      <label>Bill Value</label>
      <input type='text' />
      <label>Your expenses</label>
      <input type='text' />
      <label>{selectedFriend.name}'s expenses</label>
      <input type='text' disabled />
      <label>Who dey pay bill?</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>
    </form>
  );
};

export default FormSplitBill;
