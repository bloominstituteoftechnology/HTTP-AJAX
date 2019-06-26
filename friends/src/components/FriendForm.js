import React from 'react';

const FriendForm = (props) => {
        return (
            <form>
                <input 
                    type="text" 
                    onChange={props.changeHandler} 
                    placeholder="name" 
                    value={props.friend.name}
                />
                <input 
                    type="text" 
                    onChange={props.changeHandler} 
                    placeholder="age" 
                    value={props.friend.age}
                />
                <input 
                    type="text" 
                    onChange={props.changeHandler} 
                    placeholder="email" 
                    value={props.friend.email}
                />
                <button onClick={props.addFriend}>Add Friend!</button>
            </form>
            )
}

export default FriendForm;