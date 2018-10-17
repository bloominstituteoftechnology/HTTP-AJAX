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
      <label>
          Your friend's name:
        <input
          type='text'
          name='name'
          id='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleInput}
        />
      </label>
      <label>
        Your friend's age:
        <input
          type='number'
          name='age'
          id='age'
          placeholder="age"
          value={this.state.age}
          onChange={this.handleInput}
        />
    </label>
    <label>
      Your friend's email:
        <input
          type='email'
          name='email'
          id='email'
          placeholder='email'
          value={this.state.email}
          onChange={this.handleInput}
        />
      </label>
      <button
        type='submit'>
          Add Friend!
        </button>
    </form>
  )}
}
export default NewFriendForm;
