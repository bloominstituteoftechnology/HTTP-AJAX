import React from "react";
import axios from "axios";

class FriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      age: ""
    };
  }
  changeHandler = e => {
    let targetName = e.target.name;

    this.setState({ [targetName]: e.target.value });
  };
  addFriend = e => {
    
    const newFriend = this.state
    axios.post(`http://localhost:5000/friends`, newFriend).then(() =>
      this.setState({
        name: "",
        email: "",
        age: ""
      })
    );
  };
  render() {
    return (
      <form onSubmit={this.addFriend}>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <input
          name="email"
          type="email"
          placeholder="email@website.com"
          value={this.state.email}
          onChange={this.changeHandler}
        />
        <input
          name="age"
          type="number"
          placeholder="age"
          value={this.state.age}
          onChange={this.changeHandler}
        />
        <button type='submit' style={{display:'none'}}>Submit</button>
      </form>
    ); 
  }
}

export default FriendForm;
