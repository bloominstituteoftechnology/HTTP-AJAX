import React from 'react';
import PropTypes from 'prop-types';
import './FriendPage.css';

const FriendPage = props => {
    const id = props.match.params.id;
    const friend = props.friends.find(friend => `${friend.id}` === id);

    function handleDelete() {
        props.handleDeleteFriend(friend.id)
        props.history.push('/friendslist');
    }

    return(
        <div className="friendpage-card">
                <div>
                <img className="card-img" src={`https://placeimg.com/640/480/${id}/sepia`} alt="Card image cap" />
                    <h2>{friend.name}</h2>
                    <p>ID: {friend.id}</p>
                    <p>AGE: {friend.age}</p>
                    <p>EMAIL: {friend.email}</p>
                    {/* <h3 style={{cursor: "pointer"}} onClick={() => props.handleDeleteFriend(friend.id)}>X</h3> */}
                    <h3 style={{cursor: "pointer"}} onClick={handleDelete}>X</h3>
                    <h3 style={{cursor: "pointer"}} onClick={(event) => props.goToUpdateFriendForm(event, friend.id)}> Update</h3>
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
    goToUpdateFriendForm: PropTypes.func,
};


export default FriendPage;


