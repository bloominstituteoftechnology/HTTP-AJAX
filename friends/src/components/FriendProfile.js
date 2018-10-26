import React from 'react';
import { Route, Link } from 'react-router-dom';

import Friend from './friend';

export default props => {
    const friend = props.friend.filter(item => {
        return item.id === props.match.params.id;
    });
    return (
        <div>
            <Friend {...friend} />
        </div>
    )
}