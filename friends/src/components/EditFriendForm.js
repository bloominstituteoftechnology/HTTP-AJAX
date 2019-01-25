import React from 'react';

class EditFriendForm extends React.Component  {
  constructor(props){
    super(props);
  }

  putMessage = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    console.log(id)
    this.props.editFriend(this.props.friendToEdit, id)
  }
  
  render() {
    return (
      <div className="friend-form-container">
        <h2 className="friend-form-title">Edit a friend</h2>
        <form className="friend-form">
          <input 
            type="text" name="name" 
            placeholder="Name" 
            onChange={this.props.handleEdit} 
            />
          <input 
            type="number" 
            name="age" 
            placeholder="Age"
            onChange={this.props.handleEdit} />
          <input 
            type="text" 
            name="email" 
            placeholder="Email"
            onChange={this.props.handleEdit} />
          <input 
            type="text" 
            name="img" 
            placeholder="Image Source"
            onChange={this.props.handleEdit} />
          <button onClick={this.putMessage}>Submit</button>
        </form>
      </div>
    )
  }
}

export default EditFriendForm;