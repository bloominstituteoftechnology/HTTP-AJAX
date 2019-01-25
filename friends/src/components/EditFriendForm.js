import React from 'react';

class EditFriendForm extends React.Component  {
  constructor(props){
    super(props);
    // this.state = {
    //   editFriend: {
    //     name: '',
    //     age: null,
    //     email: ''
    //   }
    // }
  }

  // handleEdit = event => {
  //   this.setState({
  //     editFriend: {
  //       ...this.state.editFriend,
  //       [event.target.name] : event.target.value
  //     }
  //   })
  // }

  putMessage = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    console.log(id)
    this.props.editFriend( this.props.friendToEdit, id)
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
            // value={this.state.editFriend.name} 
            />
          <input 
            type="number" 
            name="age" 
            placeholder="Age"
            // value={this.state.editFriend.age} 
            onChange={this.props.handleEdit} />
          <input 
            type="text" 
            name="email" 
            placeholder="Email"
            // value={this.state.editFriend.email} 
            onChange={this.props.handleEdit} />
          <button onClick={this.putMessage}>Submit</button>
        </form>
      </div>
    )
  }
}

export default EditFriendForm;