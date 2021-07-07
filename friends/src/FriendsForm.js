import React, { Component } from 'react';
import axios from 'axios';

class FriendsForm extends Component {
	constructor(props) {
    super(props);
    
    this.state = {
      name: "",
      age: "",
      email: ""
    }
	}

  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addFriend = () => {
    const friend = { 
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email 
    };

    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(friend => {
        this.props.updateFriends();
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ name: '', age: '', email: '' });
  } 

	render() {
		return (
			<div>
				<div>
          Name:<input 
          name={"name"}
          value={this.state.name}
          onChange={this.handleTextInput}
          />
				</div>
				<div>
          Age:<input 
          name={"age"}
          value={this.state.age}
          onChange={this.handleTextInput}
          />
				</div>
				<div>
          Email:<input 
          name={"email"}
          value={this.state.email}
          onChange={this.handleTextInput}
          />
				</div>
        <button onClick={this.addFriend}>Submit</button>
			</div>
		);
	}
}

export default FriendsForm;
