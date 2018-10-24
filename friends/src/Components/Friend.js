import React from 'react';
import './Friends.css';


// Takes in props:
// - key: 0 
// - name: "" 
// - age: 0
// - email: ""
const Friend = (props) => {
    return (
        <div className='friend'>
            <div className='friendName'>{props.name}</div>
            <div className='friendAge'>{props.age}</div>
            <div className='friendEmail'>{props.email}</div>
        </div>
    );
};

export default Friend;