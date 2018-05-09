import React, { Component } from 'react';
import axios from 'axios';

const FriendsList = (props) => {
    return (
    <div className='friends-list'>
        { props.people.map(person => (
            <div key={person.id}>
                <p>{person.name}</p>
                <p>{person.age}</p>
                <p>{person.email}</p>                       
            </div>
        ))}
    </div>
    )}     
 
export default FriendsList;