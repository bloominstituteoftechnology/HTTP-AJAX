import React from 'react';

class FriendForm extends React.Component {
  state = {
    friend: {
      name: '',
      age: '',
      email: ''
    }
  };

  changeHandler = e => {
    e.persist();
    let value = e.target.value;
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: value
      }
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewFriend(this.state.friend);
    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }
    });
  };
  render() {
    return (
      <div>
        <h3>Add New Friend</h3>
        <form className='newFriend-wrapper' onSubmit={this.handleSubmit}>
          <input
            onChange={this.changeHandler}
            name='name'
            placeholder='Name'
            value={this.state.name}
            type='text'
          />
          <div className='baseline' />
          <input
            onChange={this.changeHandler}
            name='age'
            placeholder='Age'
            value={this.state.age}
            type='number'
          />
          <div className='baseline' />
          <input
            onChange={this.changeHandler}
            name='email'
            placeholder='Email'
            value={this.state.email}
            type='email'
          />
          <div className='baseline' />
          <button className='md-button'>Add New Friend</button>
        </form>
      </div>
    );
  }
}
export default FriendForm;
