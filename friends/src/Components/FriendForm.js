import React from "react";





const FriendForm =  props => {
    return (
        <div>
            <div style={{fontWeight: 'bold'}} > FRIEND FORM</div>
            <form>
                NAME:
                <input 
                    type = "text" 
                    placeholder = "friend name" 
                    onChange = {props.handleNewFriendName}
                    value = {props.friendData.name}
                    name = "name"
                />
                <br />
                AGE:
                <input 
                    type = "number" 
                    placeholder = "age" 
                    onChange = {props.handleNewFriendAge}
                    value = {props.friendData.age}
                    name = "age"
                />
                    
                <br />
                EMAIL:
                <input 
                    type = "text" 
                    placeholder = "email" 
                    onChange = {props.handleNewFriendEmail}
                    value = {props.friendData.email}
                    name = "email"
                />
            </form>
            <button onClick = {props.addNewFriendData}> 
                Add New Friend
            </button>
        </div>
    )
}



export default FriendForm;