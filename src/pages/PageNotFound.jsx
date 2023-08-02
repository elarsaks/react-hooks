import React from "react";

const NotFound = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    color: "#333",
  };

  const headingStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#FFFFFF",
  };

  const paragraphStyle = {
    fontSize: "24px",
    textAlign: "center",
    color: "#FFFFFF",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404 - Not Found</h1>
      <p style={paragraphStyle}>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
