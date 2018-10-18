import React from 'react';

const UpdateFriends = props => {
    return(
        <div>

            <form>
            <input
                 type = "text"     
                 name = "name"    
                 onChange = {props.updateHandler}          
                 placeholder = {props.friend.name}
            /> <br></br>
             <input 
                  type = "number"
                  name = "age"
                 onChange = {props.updateHandler}
                  placeholder = {props.friend.age}
             /> <br></br>
             <input 
                  type = "text"
                  name = "email"
               onChange = {props.updateHandler}
               placeholder = {props.friend.email}
             /> <br></br>
             <button onClick = {props.submitUpdate}>
                 Submit Update
            </button>
            </form>

        </div>
    )
}

export default UpdateFriends;