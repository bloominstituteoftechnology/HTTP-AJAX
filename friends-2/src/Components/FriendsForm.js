import React from "react";
import "./friends.css"
const FriendsForm = props => {
    return (
        <div>
        <input type="text" 
       placeholder="name" 
       name="name" 
       value={props.name}
       onChange={props.handleTextInput}
       />
       <input type="text" 
       placeholder="age" 
       name="age" 
       value={props.age}
       onChange={props.handleTextInput}
       />
       <input type="text" 
       placeholder="email" 
       name="email" 
       value={props.email}
       onChange={props.handleTextInput}
       />
       <button onClick={props.saveNoteData}>Save Friend</button>
       <button onClick={props.updateNoteData}>Update Friend</button>
       <button onClick={props.updateDeleteData}>Abolish Friend</button>
       </div>
    )
}

export default FriendsForm;