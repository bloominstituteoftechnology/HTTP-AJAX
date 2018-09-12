// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

const Friend = (props) => {
    return(
        <div>
            <p>Name: { props.friend.name }</p>
            <p>Age: { props.friend.age }</p>
            <p>Email: { props.friend.email }</p>
        </div>
    );
}

Friend.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
    })
}

export default Friend;
