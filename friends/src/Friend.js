import React from 'react';
import PropTypes from 'prop-types';


function Friend(props) {
    return (
        <div>
            <h1>Current Friends</h1>
            <ul>
            {props.friends.map(friend => 
               <li key={friend.id}>
                    Name: {friend.name} | Age: {friend.age} | Email: {friend.email}
                </li>
            )}
            </ul>
        </div>
    )
}

Friend.propTypes = {
    friend: PropTypes.shape({
        age: PropTypes.number.isRequired,
        name: PropTypes.string,
        email: PropTypes.string
    })
}

export default Friend;