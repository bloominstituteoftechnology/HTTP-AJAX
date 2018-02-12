import React, { Component } from 'react';

function Friend(props) {
    return(
      <li>
        <div>{props.friend.name}</div>
        <div>{props.friend.age}</div>
        <div>{props.friend.email}</div>
      </li>
    )
}

export default Friend;