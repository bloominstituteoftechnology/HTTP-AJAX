import React from 'react';
import {Link} from 'react-router-dom';

let Friend = props => {
    console.log(props.editMode)
    return(
        // returning the friend data in a div. See styles in CSS file.
        <div className="friend">
            <h2>Friend #{props.friend.id}: {props.friend.name}</h2>
            
            {/* This X icon will DELETE */}
            {props.editMode !== false ? null : <div className="close" onClick={() => props.deleteHandler(props.friend.id)}>✕</div>}

            {/* This edit button will start the PUT process, refer to comments in App.js */}
            {props.editMode !== false ? null : <Link to="/add" className="edit" onClick={() => props.editHandler(props.friend, props.friend.id)}>EDIT</Link>}
            
            <p>{props.friend.pronoun} is {props.friend.age} years old.</p>
            <p>Email: {props.friend.email}</p>
            <p>{props.friend.pronoun} likes {props.friend.likes}.</p>
        </div>
    )
}

export default Friend;