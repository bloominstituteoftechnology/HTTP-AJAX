import React from 'react';


class NewFriendForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.age && this.state.email) {
      this.props.addNewFriend(this.state.name, this.state.age, this.state.email);
      this.setState({
        name: '',
        age: '',
        email: '',
      })
    } else {
      alert('You seem to be missing some information');
    }
  }
  render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <p>Hi i'm the form</p>
      <input
        type='text'
        name='name'
        id='name'
        placeholder='Friend name'
        value={this.state.name}
        onChange={this.handleInput}
      />
      <input
        type='number'
        name='age'
        id='age'
        value={this.state.age}
        onChange={this.handleInput}
      />
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Friend email'
        value={this.state.email}
        onChange={this.handleInput}
      />
      <button
        type='submit'>
          Add Friend!
        </button>
    </form>
  )}
}
export default NewFriendForm;
