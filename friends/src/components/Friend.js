import React from 'react';

import EditFriend from './EditFriend';
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
  }
  render (){
    return (
      <div>
        <p>Name: {this.props.friend.name}</p>
        <p>Age: {this.props.friend.age}</p>
        <p>Email: {this.props.friend.email}</p>
        {this.state.showEditField ? (
          <Form 
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