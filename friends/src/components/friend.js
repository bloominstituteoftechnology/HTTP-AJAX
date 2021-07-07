import React from 'react';
import { Link } from 'react-router-dom';

let Friend = (props) => {
    return (
        <Link to={`/${props.person.id}`}>
            <div className='person-card'>
                <h1>Name: <p>{props.person.name}</p></h1>
                <h1>Age: <p>{props.person.age}</p></h1>
                <h1>Email: <p>{props.person.email}</p></h1>
            </div>
        </Link>
    );
}

export default Friend;