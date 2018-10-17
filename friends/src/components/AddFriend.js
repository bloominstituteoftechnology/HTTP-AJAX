import React from 'react';
import Form from './Form';


class AddFriend extends React.Component {
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

  handleAddSubmit = event => {
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
    <div className='add-friend'>
      <p>Add a friend</p>
      <Form name={this.state.name} age={this.state.age} email={this.state.email} handleInput={this.handleInput} handleSubmit={this.handleAddSubmit}
      />
    </div>
  )}
}
export default AddFriend;
