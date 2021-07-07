import React, { Component } from 'react';
import {Spring, Transition, animated} from 'react-spring';
import {Link} from 'react-router-dom';


const FriendList = (props) => {

    return (
    <div className="friends-list">
    <Transition keys={props.friends.map(item => item.id)} 
                from={{opacity: 0, transform: 'translateX(-100px)'}}
                enter={{opacity: 1, transform: 'translateX(0px)'}}
                leave={{opacity: 0, transform: 'translateY(100px)'}}>
    {props.friends.map(friend => styles=> (
        
    <animated.div className="friend-card" style={styles}>
    <Link to={`/friends/${friend.id}`}><h1>{friend.name}</h1></Link>
    <p>{friend.age}</p>
    <p>{friend.email}</p>
    </animated.div>

  ) )}
    </Transition>
    </div>

    )
}

export default FriendList;