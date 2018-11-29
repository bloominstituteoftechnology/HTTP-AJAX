import React from 'react';
import FriendCard from './FriendCard';

const FriendList = props => {
    return(
        <div className='friends-list'>
            {props.friends.map(friend => (
               <FriendCard 
                    key={friend.id} 
                    data={friend}
                    shouldEdit={props.shouldEdit}
                    updateFriend={props.updateFriend}
                    deleteFriend={props.deleteFriend}
                    handleChange={props.handleChange}
                    nameText={props.nameText}
                    ageText={props.ageText}
                    emailText={props.emailText}
                />
            ))}
        </div>
    );
}

export default FriendList;