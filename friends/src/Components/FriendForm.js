import React from 'react';

const FriendsList = props => {
  // console.log(friends[0].name)
  return (
    <div>
       <form  onSubmit={ e => props.addFriend(e)} className="ui form">
          <div className="field">
            <label>Name</label>
            <input onChange={ e => props.handleInputChange(e)}  value={props.inputName} type="text" name="inputName" placeholder="Enter name" />
          </div>
          <div className="field">
            <label>Age</label>
            <input onChange={e => props.handleInputChange(e)}  value={props.inputAge} type="text" name="inputAge" placeholder="Enter age" />
          </div>
          <div className="field">
            <label>Email</label>
            <input onChange={e => props.handleInputChange(e)} value={props.inputEmail} type="text" name="inputEmail" placeholder="Enter email" />
          </div>
          <button className="ui button" type="submit">Add Friend</button>
        </form>
    </div>
  );
}

export default FriendsList;