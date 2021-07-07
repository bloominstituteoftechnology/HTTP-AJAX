import React from 'react';
import './display.css';

const Display = props => {
    console.log(props);
    return (
        <div>
            <div>{props.friends.map(c => <div key={c.id} className='friend__container'>
            <h1>{c.name}</h1>
            <h4><a href={'mailto:' + c.email}>{c.email}</a></h4>
            <h4>{c.age}</h4>
            </div>)}</div>


        </div>

    )
}

export default Display;