import React, { Component } from "react";
import axios from "axios";

//Class
class DisplayFriends extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      id: 0,
      name: "",
      age: 0,
      email: ""
    };

    this.handleName = this.handleName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSub = this.handleSub.bind(this);
  }

  //handle form inputs *always pass an event!*
  //*FIRST ATTEMPT* setting a temp key name to passed value
  handleName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSub(event) {
    event.preventDefault();
    // axios
    //   .post("http://localhost:5000/friends", {
    //     id: 0,
    //     name: "testNameFromHandleSub",
    //     age: 0,
    //     email: "testNameFromHandleSub"
    //   })
    //   .then(function(response) {
    //     console.log(response + "from handleSub");
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    const tempObj = {
      id: 0,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.setState({
      friends: this.state.friends.push(tempObj)
    });

    console.log(this.state.friends);
  }

  componentWillMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({
          friends: response.data
        });
        console.log(this.state.friends);
      })
      .catch(error => {
        console.log(`Error getting friends: ${error}`);
      });
  }

  render() {
    console.log(typeof this.state.friends);
    return (
      <div>
        <ul>
          {this.state.friends.map(obj => {
            return (
              <li>
                <div>{obj.name}</div>
              </li>
            );
          })}
        </ul>

        <form onSubmit={this.handleSub}>
          <label>
            Enter friend name:
            <input
              type="text"
              value={this.state.name}
              placeholder="Enter friend name"
              onChange={this.handleName}
            />
          </label>
          <label>
            Enter friend age:
            <input
              type="text"
              value={this.state.age}
              placeholder="Enter friend age"
              onChange={this.handleAge}
            />
          </label>
          <label>
            Enter friend name:
            <input
              type="text"
              value={this.state.email}
              placeholder="Enter friend email"
              onChange={this.handleEmail}
            />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

//Class constructor

//Class methods (componentDidMount, etc)

//Class render

export default DisplayFriends;
