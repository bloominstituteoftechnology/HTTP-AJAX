import React, { Component } from "react";
import './FriendsForm.css'
class FriendsForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "Bondor",
      age: "22",
      email: "bondor@lambda.edu"
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addNewFriend(this.state);
    //this.props.history.push()
    this.setState({

      name: '',
      age: '',
      email: ''

    });
  }


  render() {
    return (
      <div className="FriendsForm">

        <form
        onSubmit={this.submitHandler}>
          <input
            type="text"
            onChange={this.handleChange}
            name={"name"}
            value={this.state.name}
            
          />
          <input
            type="integer"
            onChange={this.handleChange}
            name={"age"}
            value={this.state.age}
           

          />
          <input
            type="text"
            onChange={this.handleChange}
            name={"email"}
            value={this.state.email}
            

          />
          <button>Click Me!</button>
        </form>
      </div>
    );
  }
}

export default FriendsForm;
