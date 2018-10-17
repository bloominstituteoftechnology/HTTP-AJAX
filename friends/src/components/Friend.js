import React from 'react';
import Form from './Form'

class Friend extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
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
      <div className='friend-card'>
        <div onClick={this.handleDelete}
        className='delete-button'>
          <i className="fas fa-trash-alt" />
        </div>
        <i className="fas fa-user-circle"/>
        <p>hi i'm your friend {this.state.name}</p>
        <p>age: {this.state.age}</p>
        <p>email: {this.state.email}</p>
        <div onClick={this.handleEdit} className='edit-button'>
          <i className="fas fa-edit"/>
        </div>
        </div>
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
