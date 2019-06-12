import React from 'react';

const Friend = (props) => {
return (
    <div>
    <h2>{props.name}</h2>
    <p> {props.age}</p>
    <p>{props.email}</p>
    </div>
    
    )
}
export default Friend;