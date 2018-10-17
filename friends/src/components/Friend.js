import React from 'react';
import '../App.css';


const Friend = (props) => {
    console.log(props.friend)
    return (
        <div >
            
            {props.friend.map(friend => {
                return (
                      <div className = "friend-card">
                          <h3>Name  :  {friend.name}</h3>
                          <p> Age  : {friend.age}</p>
                          <p> Email : {friend.email}</p>
                      </div>
                     )
                })
            }
        </div>
    );
}

export default Friend;