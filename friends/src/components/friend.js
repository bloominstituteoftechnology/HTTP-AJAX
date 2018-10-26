import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <div>
            <p>Id: {props.id}</p>
            <Link to={`/friends/${props.id}`}>
                <p>Name: {props.name}</p>
            </Link>
        </div>
    );
};