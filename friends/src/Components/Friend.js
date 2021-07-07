import React from 'react'; 

const Friend = (props) => {
    return (
        <div className = "friend">
            <h3>{props.name}</h3>
            <p><strong>Age:</strong> {props.age}</p>
            <p><strong>Email:</strong> {props.email}</p>
        </div>
    )
}

export default Friend; 
