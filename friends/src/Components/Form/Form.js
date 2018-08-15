import React from 'react';

const Form = props => {
    return (
        <div>
         <form>
            <label for="name">Name:</label>
            <input type="text" name="name" value={props.friend.name} onChange={props.value}/>
            <label for="age">Age:</label>
            <input type="number" name="age" value={props.friend.age} onChange={props.value}/>
            <label for="email">E-Mail:</label>
            <input type="email" name="email" value={props.friend.email} onChange={props.value}/>
            </form>
        <div>
            <button onClick={props.addFriend}>Add Friend</button>
        </div>
        </div>
    )};

export default Form;