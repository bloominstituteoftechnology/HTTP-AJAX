import React from 'react';

let FriendForm = props => {
    return (
        <form onSubmit={''}>
            <input name='name' value={props.value}/>
            <input name='age' value={props.value}/>
            <input name='email' value={props.value}/>
        </form>
    )
}

export default FriendForm;