import React from 'react';
import NewFriendForm from './newFriendForm';
import Friends from './friends';

const FriendsList = props => {
    return (
        <div>
            <h1>My Friends</h1>
            <div className='all-friends'>
                {props.friends.map(friend => {
                    return <Friends key={friend.id} friend={friend} editFriendHandle={props.editFriendHandle} deleteFriendHandle={props.deleteFriendHandle} />

                })}
            </div>
            <NewFriendForm addChangeHandler={props.changeHandler}
                newAddFriend={props.addFriend}

            />
        </div>
    )
}







export default FriendsList; 