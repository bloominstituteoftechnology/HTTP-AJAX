import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        {this.state.friends.map(friend => (
          <div key={friend.id}>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>
              Email: <a href={`mailto:${friend.email}`}>{friend.email}</a>
            </p>
          </div>
        ))}
        <form action="submit" method="post">
          <h2>Add a new friend</h2>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="age" placeholder="Age" />
          <input type="text" name="email" placeholder="Email" />
        </form>
      </div>
    );
  }
}

export default App;
