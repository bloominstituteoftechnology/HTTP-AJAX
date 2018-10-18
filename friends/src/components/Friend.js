import React from 'react';
import '../App.css';
import Form from './Form.js'


const Friend = (props) => {
    console.log(props.friend)

    return (
        <div>
            <h1>Friends List</h1>
            {props.friend.map((friend, index) => {
                return (
                      <div className = "friend-card">
                        <div class = "close-div" onClick={() => props.deleteHandler(friend.id)}>✕</div>                      
                          <h3>Name  :  {friend.name}</h3>
                          <p> Age  : {friend.age}</p>
                          <p> Email : {friend.email}</p>
                          {/*<div className = "wrapper-div">
                                <div>Edit</div>
                                <div>Delete</div> 
                </div>*/}
                      </div>
                    )
                })
            }
         
        </div>
    );
}

export default Friend;

