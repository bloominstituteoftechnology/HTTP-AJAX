import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <Link to={`/friends/${props.id}`}>
                <p>Name: {props.name}</p>
            </Link>
                <p>Age: {props.age}</p>
                <p>Email: {props.email}</p>
        </div>
    )
}
