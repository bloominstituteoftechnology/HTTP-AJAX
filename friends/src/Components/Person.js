import React from 'react';
import './Person.css';

function Person(props){
    return(
        <div className="personCard">
            <h2>{props.name}</h2>
            <div className='info'>
                <h1 className="age">{props.age} years old</h1>
                <h1 className="email">{props.address}</h1>
            </div>
        </div>
    )
}
export default Person;