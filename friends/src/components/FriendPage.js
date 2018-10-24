import React from 'react';
import PropTypes from 'prop-types';

const FriendPage = props => {
    const id = props.match.params.id;
    const friend = props.friends.find(friend => `${friend.id}` === id);

    return(
        <div>
            <h1> Friend Page </h1>
                <div>
                    <h1>{friend.name}</h1>
                    <p>ID: {friend.id}</p>
                    <p>AGE: {friend.age}</p>
                    <p>EMAIL: {friend.email}</p>
                </div>
               
        </div>
    )
}

FriendPage.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
    })
}

export default FriendPage;