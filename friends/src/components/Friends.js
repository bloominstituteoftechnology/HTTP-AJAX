import React from "react";

export default function Friend({ index, friend }) {
  return (
    <li className="friend">
      <p>{`Friend ${index + 1}`}</p>
      <p>{`Name: ${friend.name}`}</p>
      <p>{`Age: ${friend.age}`}</p>
      <p>{`Email: ${friend.email}`}</p>
    </li>
  );
}
