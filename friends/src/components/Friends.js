import React from 'react';
import Friend from './Friend';

const Friends = props => {
    console.log('from Friend', props)
    return (
        <div>
            {props.data.map((item, index) => (
                <Friend
                data={item}
                key={index}
                />
            ))}
        </div>
    );
};

export default Friends;

 