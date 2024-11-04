import React, { useState } from "react";
import "./steps.css";

const messages = [
  "Learn React",
  "Apply for Jobs💻",
  "Invest your new income🤑",
];

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };
  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className='close' onClick={handleToggle}>
        {isOpen ? "CLOSE" : "OPEN STEPS"}
      </button>
      {isOpen && (
        <div
          className={`${
            step === 2 ? " steps step2" : step === 3 ? "steps step3" : "steps"
          }`}
        >
          <div className='numbers'>
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className='message'>
            {" "}
            Step {step}: {messages[step - 1]}
          </p>
          <div className='buttons'>
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "white" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Steps;
