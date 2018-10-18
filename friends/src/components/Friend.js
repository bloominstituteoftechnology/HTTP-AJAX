import React from 'react';
import Form from './Form';
import FriendCard from './FriendCard';

class Friend extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
      avatar: this.props.avatar,
      name: this.props.name,
      age: this.props.age,
      email: this.props.email,
      editing: false,
    }
  }


  handleDelete = event => {
    this.props.deleteFriend(this.state.id)
  }

  handleEdit = event => {
    this.setState({
      editing: !this.state.editing,
    })
  }

    handleInput = event => {
      this.setState({
        [event.target.name]: event.target.value,
      })
    }

  handleEditSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.age && this.state.email) {
      const editedFriend = {
        id: this.state.id,
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      };
      this.props.editFriend(editedFriend);
      this.setState({
        editing: false,
      })
    } else {
      alert('You seem to be missing some information');
    }
  }

  render() {
    return(
      <div className='friend-container'>
      <FriendCard
        handleDelete={this.handleDelete}
        avatar={this.state.avatar}
        name={this.state.name}
        age={this.state.age}
        email={this.state.email}
        id={this.state.id}
        handleEdit={this.handleEdit}
      />
        <div className='edit-form'>
        {this.state.editing &&
        <Form
        handleSubmit={this.handleEditSubmit}
        handleInput={this.handleInput}
        name={this.state.name}
        age={this.state.age}
        email={this.state.email} />}
      </div>
      </div>

    )
  }
}

export default Friend;
