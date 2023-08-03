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
      <h1>useEffect</h1>
      <h2 className="info-style border-bottom">
        <span>"useEffect"</span> is a React hook that allows you to perform side
        effects in
        <span> functional components</span>, such as fetching data, subscribing
        to events, or manually changing the <span> DOM</span>, after every
        render or when specific dependencies change.
      </h2>
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
