import React from 'react';
import Form from './Form';


class AddFriend extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      avatar: 'dog',
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
      this.props.addNewFriend(this.state.name, this.state.age, this.state.email, this.state.avatar);
      this.setState({
        name: '',
        avatar: '',
        age: '',
        email: '',
      })
      this.props.history.goBack();

    } else {
      alert('You seem to be missing some information');
    }
  }

  backButton = event => {
    this.props.history.goBack()
  }


  render() {
  return (
    <div className='add-friend'>
      <div className='back-button' onClick={this.backButton}>
        <i className="fas fa-arrow-left"/>Back
      </div>
      <p>Add a friend</p>
      <Form name={this.state.name} age={this.state.age} email={this.state.email}
      avatar={this.state.avatar}
      handleInput={this.handleInput} handleSubmit={this.handleAddSubmit}
      />
    </div>
  )}
}
export default AddFriend;
