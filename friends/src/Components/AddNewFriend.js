import React, { Component } from 'react';


    const AddNewFriend = props => {

        return(

          <div className="addNewFriend">
          Add New Friend
            <form>
                <input type="text" onChange={props.onInputChange} name="name"
                 value={props.newFriend.name} placeholder="name" />
                <input type="text" onChange={props.onInputChange} name="age"
                 value={props.newFriend.age} placeholder="age" />
                <input type="text" onChange={props.onInputChange} name="email"
                 value={props.newFriend.email} placeholder="email" />
                <button onClick={props.addFriend} >Add Friend</button>
            </form>


            </div>
        );
      }
    
    export default AddNewFriend;