import React from 'react';

// Takes in props:
// - key: 0 
// - name: "" 
// - age: 0
// - email: ""
const Friend = (props) => {
    return (
        <div className='Friend'>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.email}</div>
        </div>
    );
};

export default Friend;