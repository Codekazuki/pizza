import React from "react";
import "./steps.css";

const messages = ["Learn React", "Apply for Jobs", "Invest your new income"];

const Steps = () => {
  const handleNext = () => {
    console.log("next");
  };
  const handlePrevious = () => {
    console.log("previous");
  };
  let step = 1;
  return (
    <div className='steps'>
      <div className='numbers'>
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className='message'>
        {" "}
        Step {step}: {messages[0]}
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
  );
};

export default Steps;
