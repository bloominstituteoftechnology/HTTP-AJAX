import React from 'react';
// import axios from 'axios';
import Friend from './Friend';
// import NewFriendForm from './NewFriendForm';

const FriendsList = props => {
        return (
            <div>
                {props.friends.map(friend => {
                    return (
                        <div key={friend.id}>
                        <Friend
                            friend={friend}
                        />
                        <form onChange={props.handleFormChange}>
                            <input type="text" placeholder="Update Friend's Name" name="friendName" />
                            <input type="number" placeholder="Update Friend's Age" name="friendAge" />
                            <input type="text" placeholder="Update Friend's Email" name="friendEmail" />
                            <button type="submit" onClick={() => props.updateFriend(friend.id)}>Submit</button>
                        </form>
                            <button type="submit" onClick={() => props.deleteFriend(friend.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }


export default FriendsList;