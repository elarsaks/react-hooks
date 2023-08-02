import React, { useState, useEffect } from "react";

export default () => {
  const buttonStyle = {
    margin: "20px",
    border: "2px solid #61DAFB",
    color: "white",
    backgroundColor: "#282c34",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
  };

  const activeButtonStyle = {
    ...buttonStyle,
    border: "2px solid orange", // Change the border color to orange for the active button
  };

  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    // useEffect can return a function that will be called when the component unmounts.
    return () => {
      // This is a good place to clean up any subscriptions or timers.

      console.log("Resource type changed.");
    };

    // The second argument of useEffect is an array of dependencies.
  }, [resourceType]); // Only run the effect if resourceType changes.

  return (
    <>
      <div>
        <button
          onClick={() => setResourceType("posts")}
          style={resourceType === "posts" ? activeButtonStyle : buttonStyle}
        >
          Posts
        </button>

        <button
          onClick={() => setResourceType("users")}
          style={resourceType === "users" ? activeButtonStyle : buttonStyle}
        >
          Users
        </button>

        <button
          onClick={() => setResourceType("comments")}
          style={resourceType === "comments" ? activeButtonStyle : buttonStyle}
        >
          Comments
        </button>
      </div>

      {items.map((item) => {
        if (resourceType === "posts") {
          return <p key={item.id}>{JSON.stringify(item.title)}</p>;
        } else {
          return <p key={item.id}>{JSON.stringify(item.name)}</p>;
        }
      })}
    </>
  );
};
