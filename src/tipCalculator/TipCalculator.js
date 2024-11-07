import React, { useState } from "react";
import Reset from "./Reset";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const averagePercentage = (percentage1 + percentage2) / 2;
  const tip = (averagePercentage * bill) / 100;
  const totalAmount = bill + tip;

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />

      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How do you like the service?
      </SelectPercentage>

      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How do your friend like the service?
      </SelectPercentage>
      <Output totalAmount={totalAmount} bill={bill} tip={tip} />
      <Reset />
    </div>
  );
};

export default TipCalculator;
