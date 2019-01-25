import React, { Component } from 'react'
import App from '../App'

const Friend = props => {
    return (
      <div className="friend-wrapper">
        {props.friends.map(friend => (
         <div className="friend-card">
           <h2 className="friend-name" key={friend.id}>Name: {friend.name}</h2>
           <p>Age: {friend.age}</p>
           <p>Email: {friend.email}</p>
           <button onClick={e => props.deleteItem(e, friend.id)} className="form-button">
        Delete
      </button>
          </div>))         
        }
      </div>
    )
  }


export default Friend
