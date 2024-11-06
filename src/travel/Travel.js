import React, { useState } from "react";
import "./travel.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const Travel = () => {
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const [items, setItems] = useState([]);
  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
};

export default Travel;
