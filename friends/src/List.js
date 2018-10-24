import React, { Component } from 'react';
import axios from 'axios';


const List = (props) => {
    return (
      <ul>
        {props.friends.map(friend => <li>{friend.name}</li>)}
      </ul>
    )
}

export default List;