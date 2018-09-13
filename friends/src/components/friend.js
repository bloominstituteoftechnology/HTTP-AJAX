import React from 'react';
import PropTypes from 'prop-types';

import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/edit.png';

function Friend(props) {
    return (
        <div>
            <div>
                <h1>{props.friend.name}</h1>
                <img src={editIcon} alt='edit' onClick={ () => props.handleEdit(props.friend) } />
                <img src={deleteIcon} alt='delete' onClick={ () => props.deleteFriend(props.friend.id) } />
            </div>
            <p>{`Age: ${props.friend.age}`}</p>
            <p><a href={`mailto:${props.friend.email}`}>{props.friend.email}</a></p>
        </div>
    );
}

Friend.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired,
    handleEdit: PropTypes.func.isRequired,
    deleteFriend: PropTypes.func.isRequired
};

export default Friend;
