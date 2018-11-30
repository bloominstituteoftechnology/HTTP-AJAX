import React from 'react';

const FriendsList = props => {
  console.log(props.isUpdate, 'updating')

  const button = props.isUpdate ? 'update Friend' : 'Add Friend';
  const submit = props.isUpdate ? 'updateFriend' : 'addFriend';
  console.log(submit)
  return (
    <div>
       <form  onSubmit={ e => props.addFriend(e, this.props.match.params.id)} className="ui form">
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
          <button className="ui button" type="submit">{button}</button>
        </form>
    </div>
  );
}

export default FriendsList;