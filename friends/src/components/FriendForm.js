import React, { Component } from 'react';
import FormInput from './FormInput';

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: props.friends,
      nameInput: "",
      ageInput: 0,
      emailInput: ""
    };
  }

  nameInputHandler = e => {
    this.setState({ nameInput: e.target.value });
  };
  ageInputHandler = e => {
    this.setState({ ageInput: e.target.value });
  };
  emailInputHandler = e => {
    this.setState({ emailInput: e.target.value });
  };

  addNewFriend = e => {
    e.preventDefault();
    const friends = this.state.friends.slice();
    friends.push({ name: this.state.nameInput, age: this.state.ageInput, email:this.state.emailInput });
    this.setState({ friends, nameInput: "", ageInput: "", emailInput: "" });
  }

 
  render() {
    return (
      <div>
        <FormInput 
          add={this.addNewFriend}
          nameInput={this.state.nameInput}
          ageInput={this.state.ageInput}
          emailInput={this.state.emailInput}
          changeName={this.nameInputHandler}
          changeAge={this.ageInputHandler}
          changeEmail={this.emailInputHandler}
        />
      </div>
    );
  }
}

export default FriendForm;



