import React from 'react';
// import axios from 'axios';

function IndividualFriend (props ) {
    return <div className='individual-friend'>
        <h3>ID: {props.id}</h3>
        <span>|</span>
        <h3>Name: {props.name}</h3>
        <span>|</span>
        <h3>Age: {props.age}</h3>
        <span>|</span>
        <h3>Email: {props.email}</h3>
    </div>
}

export default IndividualFriend;