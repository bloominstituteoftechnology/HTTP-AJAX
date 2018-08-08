import React, { Component } from 'react';

const Friend = (props) => {

    console.log(props);
    

    return (
        <div>
            <div>{props.ross.name}</div>
            <div>{props.ross.age}</div>
            <div>{props.ross.email}</div>
        </div>
    )
}

export default Friend;