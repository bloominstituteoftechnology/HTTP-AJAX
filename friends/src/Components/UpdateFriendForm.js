import React, { Component } from 'react';


    const UpdateFriendForm = props => {

        return(

          <div className="updateFriend">
     
            <form className="update-friend-form">
                <label>
                    Name : 
                    <input type="text" onChange={props.onInputChange} name="name"
                 value={props.updateFriend.name} placeholder={props.updateFriend.name} />
                 </label>

                  <label>
                Age :
                <input type="number" onChange={props.onInputChange} name="age"
                 value={props.updateFriend.age} placeholder={props.updateFriend.age} />
                </label>
                
                <label>
                    Email : 
                    <input type="text" onChange={props.onInputChange} name="email"
                 value={props.updateFriend.email} placeholder={props.updateFriend.email} />
                </label>
                
                <button onClick={props.submitUpdate} >Update</button>
            </form>


            </div>
        );
      }
    
    export default UpdateFriendForm;