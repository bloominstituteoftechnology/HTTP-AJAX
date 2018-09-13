import React from 'react';
import Friend from './Friend';
import './Friends.css';

function Friends(props) {
    return (
      <div>
        <h1>Friends List</h1>
        <form className="centered-form">
          <h2>Add a friend</h2>
          <label>
            <input type="text" name="name" placeholder="Enter name here..." />
          </label>
          <label>
            <input type="text" name="age" placeholder="Enter age here..." />
          </label>
          <label>
            <input type="text" name="email" placeholder="Enter email here..." />
          </label>
          <input type="submit" value="Submit" className="submit" />
      </form>
        {props.friends.map(friend => <Friend key={friend.name} friend={friend} />)} 
      </div>

    );
};
 export default Friends; 