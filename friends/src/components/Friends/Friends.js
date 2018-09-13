import React from 'react';
import AddFriendButton from './AddFriendButton';
import Proptypes from "prop-types";

function Friends(props) {
  
     return (
       <div>
          <div className="Friends">
            {props.friends.map(friends =>  <div className="friend" id={friends.id} >
            <strong>Name:</strong> {friends.name}<br></br>  
            <strong>Age:</strong> {friends.age}<br></br>  
            <strong>Email:</strong> {friends.email} </div>)} 
          </div>
          <div className="addFriend" ><AddFriendButton addFriend={props.addFriend} friend={props.friends} handleChange={props.handleChange} newFriend={props.newFriend} /></div>
        </div>
    );
  
}

Friends.Proptypes = {
  friends: Proptypes.shape({
    id: Proptypes.number,
    name: Proptypes.string,
    age: Proptypes.number,
    email: Proptypes.string,
  }),
  newFriend: Proptypes.func,
  handleChange:Proptypes.func,
  addFriend: Proptypes.func,
}


export default Friends;