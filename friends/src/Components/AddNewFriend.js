import React, { Component } from 'react';


    const AddNewFriend = props => {

        return(

          <div className="addNewFriend">
          Add New Friend
            <form onSubmit={props.addFriend} className="add-card_form">
                <label>
                    Name : 
                    <input type="text" onChange={props.onInputChange} name="name"
                 value={props.newFriend.name} placeholder="name" />
                 </label>

                  <label>
                Age :
                <input type="text" onChange={props.onInputChange} name="age"
                 value={props.newFriend.age} placeholder="age" />
                </label>
                
                <label>
                    Email : 
                    <input type="text" onChange={props.onInputChange} name="email"
                 value={props.newFriend.email} placeholder="email" />
                </label>
                
              
                <button onClick={props.addFriend} >Add Friend</button>
            </form>


            </div>
        );
      }
    
    export default AddNewFriend;