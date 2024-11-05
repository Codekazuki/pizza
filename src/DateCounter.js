import React, { useState } from "react";

const DateCounter = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const handleStepIncrease = () => {
    setStep((s) => s + 1);
  };

  return (
    <div>
      <div>
        <button onClick={handleStepIncrease}>-</button>
        <span>step :{step}</span>
        <button>+</button>
      </div>
      <div>
        <button>-</button>
        <span>count:{count}</span>
        <button>+</button>
      </div>
      <p>message</p>
    </div>
  );
};

export default DateCounter;
