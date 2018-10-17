import React from 'react';
import NewFriendForm from './newFriendForm';

const FriendsList = props => {
    return (
        <div>
            <h1>My Friends</h1>

            {props.friends.map(friend => {
                return (
                    <div key={friend.id}>
                        < div>
                            <h2>Name: {friend.name}</h2>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>


                    </div>

                )
            })}
            <NewFriendForm addChangeHandler={props.changeHandler}
                newAddFriend={props.addFriend}
                friend={props.friends.name}
            />
        </div>
    )
}







export default FriendsList; 