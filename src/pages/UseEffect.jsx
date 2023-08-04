import React, { useState, useEffect } from "react";
import info from "../styles/Info.module.css";
import util from "../styles/Util.module.css";
import Button from "../components/Button";

export default () => {
  // State to store the resource type (default to 'posts')
  const [resourceType, setResourceType] = useState("posts");

  // State to store the fetched items
  const [items, setItems] = useState([]);

  // useEffect to fetch data whenever the 'resourceType' changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`) // Fetch data from the API
      .then((response) => response.json()) // Parse the response to JSON
      .then((json) => setItems(json)); // Update 'items' state with the fetched data

    // Cleanup function called when 'resourceType' changes or the component unmounts
    return () => {
      console.log("Resource type changed.");
    };
  }, [resourceType]); // 'resourceType' is a dependency of this effect

  return (
    <>
      <h1 className={util["header-1"]}>- useEffect -</h1>
      <h2 className={`${info["info"]} ${info["border-bottom"]}`}>
        <span>"useEffect"</span> is a React hook that allows you to perform side
        effects in
        <span> functional components</span>, such as fetching data, subscribing
        to events, or manually changing the <span> DOM</span>, after every
        render or when specific dependencies change.
      </h2>
      <div>
        <Button
          active={resourceType === "posts"}
          handleClick={() => setResourceType("posts")}
          text="Posts"
        />

        <Button
          active={resourceType === "users"}
          handleClick={() => setResourceType("users")}
          text="Users"
        />

        <Button
          active={resourceType === "comments"}
          handleClick={() => setResourceType("comments")}
          text="Comments"
        />
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
