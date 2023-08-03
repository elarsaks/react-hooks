import React, { useState, useEffect } from "react";
import styles from "../styles/Info.module.css";
import info from "../styles/Info.module.css";
import util from "../styles/Util.module.css";

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
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
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
            resourceType === "posts" ? util["active-button"] : util["button"]
          }
        >
          Posts
        </button>

        <button
          onClick={() => setResourceType("users")}
          className={
            resourceType === "users" ? util["active-button"] : util["button"]
          }
        >
          Users
        </button>

        <button
          onClick={() => setResourceType("comments")}
          className={
            resourceType === "comments" ? util["active-button"] : util["button"]
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
