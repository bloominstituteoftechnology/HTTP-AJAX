import React from 'react';

const EditFriends = props => {
    return(
        <div>

            <form>
            <input
                 type = "text"     
                 name = "name"    
                 onChange = {props.editHandler}          
                 value = {props.friend.name}
                 placeholder = {props.friend.name}
            /> <br></br>
             <input 
                  type = "number"
                  name = "age"
                 onChange = {props.editHandler}
                  value = {props.friend.age}
                  placeholder = {props.friend.age}
             /> <br></br>
             <input 
                  type = "text"
                  name = "email"
               onChange = {props.editHandler}
               value = {props.friend.email}
               placeholder = {props.friend.email}
             /> <br></br>
             <button onClick = {props.submitEdits}>
                 Edit
            </button>
            </form>

        </div>
    )
}

export default EditFriends;