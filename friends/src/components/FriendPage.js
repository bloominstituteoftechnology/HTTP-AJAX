import React from 'react';
import PropTypes from 'prop-types';

const FriendPage = props => {
    const id = props.match.params.id;
    const friend = props.friends.find(friend => `${friend.id}` === id);

    function handleDelete() {
        props.handleDeleteFriend(friend.id)
        props.history.push('/friendslist');
    }

    return(
        <div>
            <h1> Friend Page </h1>
                <div>
                    <h1>{friend.name}</h1>
                    <p>ID: {friend.id}</p>
                    <p>AGE: {friend.age}</p>
                    <p>EMAIL: {friend.email}</p>
                    {/* <h3 style={{cursor: "pointer"}} onClick={() => props.handleDeleteFriend(friend.id)}>X</h3> */}
                    <h3 style={{cursor: "pointer"}} onClick={handleDelete}>X</h3>
                </div>
               
        </div>
    )
}

FriendPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }),
    handleDeleteFriend: PropTypes.func,
};

// FriendPage.propTypes = {
//     friend: PropTypes.shape({
//         name: PropTypes.string,
//         age: PropTypes.number,
//         email: PropTypes.string,
//     }),
//     handleDeleteFriend: PropTypes.func,
// }

export default FriendPage;