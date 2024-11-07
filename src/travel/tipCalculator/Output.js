import React from "react";

const Output = ({ bill, tip, totalAmount }) => {
  return (
    <div>
      <h3>
        you paid {totalAmount} <br />
        your bill is {bill} <br />
        your tip is:{tip}
      </h3>
    </div>
  );
};

export default Output;
