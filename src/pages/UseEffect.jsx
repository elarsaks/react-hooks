import React, { useState, useEffect } from "react";
import info from "../styles/Info.module.css";
import util from "../styles/Util.module.css";
import Button from "../components/Button";

export default () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    return () => {
      console.log("Resource type changed.");
    };
  }, [resourceType]);

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
