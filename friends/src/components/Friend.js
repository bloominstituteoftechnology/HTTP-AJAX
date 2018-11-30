import React from 'react';
import { Route, Link, Switch } from "react-router-dom";

const Friend = props => {
    console.log('from Friend', props)
    return (
        <div>
            <div>
                <Link to={`/card/${props.data.name}`}>{props.data.name} </Link>
            </div>
            <div>
                {props.data.age}    
            </div>
            <div>
                {props.data.email}
            </div>
        </div>
    );
};

export default Friend;