import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Friend from './Friend';

const Friends = (props) => {
    return (
        <div>
            {props.friends.map( friend => )}
        </div>
    )
}

export default Friends;