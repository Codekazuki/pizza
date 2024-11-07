import React from "react";
import Reset from "./Reset";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";

const TipCalculator = () => {
  return (
    <div>
      <BillInput />
      <SelectPercentage>How do you like the service?</SelectPercentage>
      <SelectPercentage>How do your friend like the service?</SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
};

export default TipCalculator;
