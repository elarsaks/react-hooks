import React, { useState } from "react";

const DummyComponent = () => {
  const buttonStyle = {
    margin: '20px', 
    border: '2px solid #61DAFB', 
    color: 'white',  
    backgroundColor: '#282c34',
    borderRadius: '5px',
    padding: '10px 20px',  
    fontSize: '18px',  
  };

  const spanStyle = {
    margin: '20px',  
    fontSize: '24px',  
    fontWeight: 'bold',
    color: 'white',  
    borderRadius: '5px',
    border: '2px solid #61DAFB',  
    padding: '10px 20px',  
  };

  // Add state for the number
  const [count, setCount] = useState(0);

  // Function to handle the increment button click
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle the decrement button click
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button style={buttonStyle} onClick={handleDecrement}>-</button>
      <span style={spanStyle}>{count}</span>
      <button style={buttonStyle} onClick={handleIncrement}>+</button>
    </>
  );
};

export default DummyComponent;
