import React from 'react';

const FriendForm = (props) => {
        return (
            <form onSubmit={props.addFriend}>
                <input 
                    type="text" 
                    onChange={props.changeHandler} 
                    placeholder="name" 
                    value={props.friend.name}
                    name="name"
                />
                <input 
                    type="number" 
                    onChange={props.changeHandler} 
                    placeholder="age" 
                    value={props.friend.age}
                    name="age"
                />
                <input 
                    type="text" 
                    onChange={props.changeHandler} 
                    placeholder="email" 
                    value={props.friend.email}
                    name="email"
                />
                <button type="submit">Add Friend!</button>
            </form>
            )
}

export default FriendForm;