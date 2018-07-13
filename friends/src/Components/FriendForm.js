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
                    onChange = {props.handleNewFriendData}
                    value = {props.friendData.name}
                    name = "name"
                />
                <br />
                AGE:
                <input 
                    type = "text" 
                    placeholder = "age" 
                    onChange = {props.handleNewFriendData}
                    value = {props.friendData.age}
                    name = "age"
                />
                    
                <br />
                EMAIL:
                <input 
                    type = "text" 
                    placeholder = "email" 
                    onChange = {props.handleNewFriendData}
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