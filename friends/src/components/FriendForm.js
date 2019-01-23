import React, { Component } from 'react';

const FriendForm = props => {
  return (
    <div className="friend-form-container">
      <h2 className="friend-form-title">Add a new friend</h2>
      <form className="friend-form">
        <input type="text" name="name" placeholder="Name"/>
        <input type="number" name="age" placeholder="Age"/>
        <input type="text" name="email" placeholder="Email"/>
      </form>
    </div>
  )
}

export default FriendForm;