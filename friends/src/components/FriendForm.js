import React, { Component } from 'react';

const FriendForm = props => {
  return (
    <form>
      <input type="text" name="name" />
      <input type="number" name="number" />
      <input type="text" name="email" />
    </form>
  )
}

export default FriendForm;