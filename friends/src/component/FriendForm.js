import React from 'react';

const FriendForm = props => {
    console.log(props);
    return (
    <div>
        <input
        type= 'text'
        onChange={this.handleTextInput}
        placeholder= 'Name'
        name= 'name'
        value= {props.friend.name}
        />
        <input
        type= 'text'
        onChange={this.handleTextInput}
        placeholder= 'Age'
        name= 'age'
        value= {props.friend.age}
        />
        <input
        type= 'text'
        onChange= {this.handleTextInput}
        placeholder= 'Email'
        name= 'email'
        value= {props.friend.email}
        />
        <button onClick={this.saveNoteData}>Make A Friend </button>
    </div>
    )
}

export default FriendForm;