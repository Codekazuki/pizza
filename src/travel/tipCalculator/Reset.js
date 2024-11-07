import React from "react";

const Reset = ({ children }) => {
  return <Button backgroundColor='red'>helloo</Button>;
};

export default Reset;

const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};
