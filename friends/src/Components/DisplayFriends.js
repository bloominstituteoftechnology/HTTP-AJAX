import React, { Component } from 'react';


    const DisplayFriends = props => {

        return(

          <div className="displayFriends">
       
          {(props.friends)
          ?  props.friends.map( friend => {
            return (
                <div className="friendCard">
                  <p key={friend.id} className='name'>{friend.name}</p>
                  <p>age : {friend.age}</p>
                  <p>email : {friend.email}</p>
                </div>    
            )
        })
          : 'Loading...' }


            </div>
        );
      }
    
    export default DisplayFriends;