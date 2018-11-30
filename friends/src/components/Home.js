import React from "react";

export default function Home(props) {
  return (
    <div>
      <h1>Friends List</h1>
      <button onClick={() => props.history.replace("/friendslist")}>
        Go&nbsp;To Your&nbsp;List
      </button>
    </div>
  );
}
