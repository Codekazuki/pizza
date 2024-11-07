import React from "react";

const SelectPercentage = ({ children, percentage, onSelect }) => {
  return (
    <div>
      <label htmlFor=''>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value='0'>Terrible (0%)</option>
        <option value='10'>Fair (10%)</option>
        <option value='15'> Perfect (15%)</option>
        <option value='20'> Best Ever (20%)</option>
      </select>
    </div>
  );
};

export default SelectPercentage;
