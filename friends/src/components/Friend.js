import React from 'react';
import axios from 'axios';

// import EditFriend from './EditFriend';
import Form from './Form';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditField: false,
      editFriend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  toggleField = () => {
    this.setState({showEditField: !this.state.showEditField});
  }; 
  editFriendHandler= event => {
    this.setState({ [event.target.name]: event.target.value  })
  };
  saveEditFriend = () => {
    axios
      .put('http://localhost:5000/friends/friends/:id', this.state.editFriend)
      .then( response => {
        this.setState(
          { friends: response.data,
          editFriend: {
            name: '',
            age: null,
            email: ''
          }}
        )
      })
      .catch( error => {
        console.error(error)
      })
  }
  render (){
    return (
      <div>
        <p>Name: {this.props.friend.name}</p>
        <p>Age: {this.props.friend.age}</p>
        <p>Email: {this.props.friend.email}</p>
        <button onClick={event => this.props.handleDelete(event, this.props.friend.id)}>Delete</button>
        {this.state.showEditField ? (
          <Form 
            onSubmit={this.saveEditFriend}
            friend={this.props.friend}
            editHandler={this.editFriendHandler} 
          />
          ) : null}
          <button onClick={this.toggleField}>Edit</button>
      </div>
    );
  }
}

export default Friend;