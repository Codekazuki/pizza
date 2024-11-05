import React, { useState } from "react";

const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const handleStepIncrease = () => {
    setStep((s) => s + 1);
  };
  const handleStepDecrease = () => {
    setStep((s) => s - 1);
  };
  const handleCountDecrease = () => {
    setCount((c) => c - step);
  };
  const handleCountIncrease = () => {
    setCount((c) => c + step);
  };
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={handleStepDecrease}>-</button>
        <span>step :{step}</span>
        <button onClick={handleStepIncrease}>+</button>
      </div>
      <div>
        <button onClick={handleCountDecrease}>-</button>
        <span>count:{count}</span>
        <button onClick={handleCountIncrease}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from now is `
            : `${Math.abs(count)} days ago was`}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
};

export default DateCounter;
