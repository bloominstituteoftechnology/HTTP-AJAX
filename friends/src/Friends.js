import React from 'react';
import Friend from './Friend'
import './App.css'

const Friends = (props) => {
    return (
        <div className='friends_container'>
            {props.friends.map((friend, index) => {
            return (
                <Friend key={index} id={friend.id} name={friend.name} email={friend.email} age={friend.age} delete={props.delete} update={props.update} />
            )})}
        </div>
    )
}

export default Friends; 