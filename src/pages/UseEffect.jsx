import React, { useState, useEffect } from "react";

export default () => {
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
          className={
            resourceType === "posts" ? "active-button-style" : "button-style"
          }
        >
          Posts
        </button>

        <button
          onClick={() => setResourceType("users")}
          className={
            resourceType === "users" ? "active-button-style" : "button-style"
          }
        >
          Users
        </button>

        <button
          onClick={() => setResourceType("comments")}
          className={
            resourceType === "comments" ? "active-button-style" : "button-style"
          }
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
