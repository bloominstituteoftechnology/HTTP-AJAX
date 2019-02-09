import React, {Component} from 'react';

const FriendForm = (props) => {
    return (
        <div>
            <form onSubmit={props.edit ? (props.edit(props.id)) : (props.addFriend)}>
                <input type="text" name="name" placeholder="name" value={props.name} onChange={props.typed}/>
                <input type="text" name="age" placeholder="age" value={props.age} onChange={props.typed}/>
                <input type="text" name="email" placeholder="email" value={props.email}
                       onChange={props.typed}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default FriendForm;
