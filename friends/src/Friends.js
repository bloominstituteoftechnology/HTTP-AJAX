

import React from 'react'
import './App.css'


const Friends = (props) => {
    console.log(props)
  return (
    <div className = "box1">
      {props.friends.map((newfriend =>
      <div className = "friend">
          
          <h1>{newfriend.name}</h1>
          <p> Age: {newfriend.age}</p>
          <p> Email:{newfriend.email}</p>
          
      </div>
        ))}
    </div>
  )
}
export default Friends