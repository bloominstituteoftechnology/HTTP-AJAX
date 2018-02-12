import React, { Component } from 'react';

function Friend(props) {
    return(
      <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>{props.email}</li>
        <li>{props.id}</li>
      </ul>
    )
}

export default Friend;