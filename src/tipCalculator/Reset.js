import React from "react";

const Reset = ({ children }) => {
  return (
    <Button backgroundColor='red' color='yellow'>
      helloo <span>✅</span>
    </Button>
  );
};

export default Reset;

const Button = ({ children, backgroundColor, color }) => {
  return <button style={{ backgroundColor, color }}>{children}</button>;
};
