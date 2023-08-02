import React from "react";

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

  return (
    <>
      <button style={buttonStyle}>-</button>
      <span style={spanStyle}>0</span>
      <button style={buttonStyle}>+</button>
    </>
  );
};

export default DummyComponent;
