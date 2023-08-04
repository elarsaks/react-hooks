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
      // Rendered JSX
      <h1 className={util["header-1"]}>- useEffect -</h1>
      <div>
        <Button
          active={resourceType === "posts"}
          handleClick={() => setResourceType("posts")} // Update 'resourceType' to 'posts' on button click
          text="Posts"
        />

        <Button
          active={resourceType === "users"}
          handleClick={() => setResourceType("users")} // Update 'resourceType' to 'users' on button click
          text="Users"
        />

        <Button
          active={resourceType === "comments"}
          handleClick={() => setResourceType("comments")} // Update 'resourceType' to 'comments' on button click
          text="Comments"
        />
      </div>
      // Render a paragraph for each fetched item
      {items.map((item) => {
        if (resourceType === "posts") {
          return <p key={item.id}>{JSON.stringify(item.title)}</p>; // If the resource type is 'posts', render the item's title
        } else {
          return <p key={item.id}>{JSON.stringify(item.name)}</p>; // If the resource type is 'users' or 'comments', render the item's name
        }
      })}
    </>
  );
};
