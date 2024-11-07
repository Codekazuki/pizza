import React from "react";

const Output = ({ bill, tip, totalAmount }) => {
  return (
    <div>
      <h3>
        Your bill is {bill} <br />
        You decided to tip :{tip} <br />
        You would pay {totalAmount}
      </h3>
    </div>
  );
};

export default Output;
