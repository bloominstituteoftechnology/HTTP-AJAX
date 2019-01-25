import React from 'react';
import PropTypes from 'prop-types';
import FriendForm from './FriendForm';
//map over friendts to create list
const FriendsList = props => {
    return (
        <div>
            {props.friends.map(friend => {
                return <div key={friend.email}>{friend.name} </div>
            })}
            <FriendForm n
            ewFriend={props.newFriend} 
            textHandler={props.textHandler} 
            addFriend={props.addFriend} />
        </div>
    );
}

FriendsList.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
}
export default FriendsList; 