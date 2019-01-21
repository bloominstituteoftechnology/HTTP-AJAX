import React from 'react';

class FriendsForm extends React.Component {
  state = {
    friend: {
      name: '',
      age: '',
      email:''
    }
  }

  addFriend = event => {

  }

  changeHandler = event => {
    
  }

  render() {
    return (
      <from>
        <input
          name="name"
          onChange={this.changeHandler}
          placeholder="Name"
          type="text"
          value={this.state.friend.name}
        />
        <input 
          name="age"
          onChange={this.changeHandler}
          placeholder="Age"
          type="text"
          value={this.state.friend.age}  
        />
        <input 
          name="email"
          onChange={this.changeHandler}
          placeholder="Email"
          type="text"
          value={this.state.friend.email}
        />
        <button onClick={this.addFriend} type="submit">Add Friend</button>
      </from>
    );
  }
}

export default FriendsForm;