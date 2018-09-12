// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

// Styles
import './Friend.css';

const Friend = (props) => {
    return(
        <div className = 'friend'>
            <p>Name: { props.friend.name }</p>
            <p>Age: { props.friend.age }</p>
            <p>Email: { props.friend.email }</p>
            <p>Favorite color: { props.friend.color }</p>
        </div>
    );
}

Friend.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
        color: PropTypes.string
    })
}

export default Friend;
