import React from "react";

const SelectPercentage = ({ children }) => {
  return (
    <div>
      <label htmlFor=''>{children}</label>
      <select>
        <option value='0'>0%</option>
        <option value='10'>10%</option>
        <option value='15'>15%</option>
        <option value='20'>20%</option>
      </select>
    </div>
  );
};

export default SelectPercentage;
