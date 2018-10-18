import React, { Component } from 'react';
import {Spring, Transition, config, animated} from 'react-spring';
import {Link} from 'react-router-dom';


const FriendCard = (props) => {

    return (
        <Spring native
        from={{ opacity: 0, transform: 'translateY(100px)' }}
        to={{ opacity: 1, transform: 'translateY(0px)' }}
        config={config.molasses} 
        keys={props.friend.id}>
    { (styles) => (     
    <animated.div className="friend-card" style={styles}>
    
    <h1>{props.friend.name}</h1>
    <p>{props.friend.age}</p>
    <p>{props.friend.email}</p>

    {props.friendPage ? <div className='delete-button' onClick={props.delete}>DELETE</div> : null}

    </animated.div>
    )}
    </Spring>

    )
}

export default FriendCard;