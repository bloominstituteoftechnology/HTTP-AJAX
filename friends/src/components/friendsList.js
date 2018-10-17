import React from 'react';
import NewFriendForm from './newFriendForm';

const FriendsList = props => {
    return (
        <div>
            <h1>My Friends</h1>
            <div className='all-friends'>
            {props.friends.map(friend => {
                return (
                    <div key={friend.id} className ='friend'>
                        < div>
                            <h2>Name: {friend.name}</h2>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                        <button className='editButton'>Edit</button>
                        <button className='editButton'>Delete</button>
                    </div>

                )
            })}
            </div>
            <NewFriendForm addChangeHandler={props.changeHandler}
                newAddFriend={props.addFriend}
                friend={props.friends.name}
            />
        </div>
    )
}







export default FriendsList; 