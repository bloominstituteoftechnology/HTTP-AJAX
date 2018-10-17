import React from 'react';
import {Button} from './Styled-components.js'
import '../App.css';
import Form from './Form.js'


const Friend = (props) => {
    console.log(props.friend)
    return (
        <div >
            <Button onClick = {props.handleFormEvent} > 
                Home 
            </Button>
            <Button onClick = {props.handleFormEvent} >
                Add Friend 
            </Button>
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