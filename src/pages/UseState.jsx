import React, { useState } from "react";

export default () => {
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

  // Pass state initial value as a function to useState, 
  // so the function is only called on the initial render.
  const [count, setCount] = useState(() => 0);

  // Pass a function to the setter of useState,
  // so the function is only called on the initial render.
  const handleIncrement = () => {
    setCount((previousCount) =>  previousCount + 1);
  };

  // Pass a function to the setter of useState,
  // so the function is only called on the initial render.
  const handleDecrement = () => {
    setCount((previousCount) =>  previousCount - 1);
  };

  return (
    <>
      <button style={buttonStyle} onClick={handleDecrement}>-</button>
      <span style={spanStyle}>{count}</span>
      <button style={buttonStyle} onClick={handleIncrement}>+</button>
    </>
  );
};

