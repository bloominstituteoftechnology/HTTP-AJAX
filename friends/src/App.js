import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Table } from "reactstrap";
// import {Route} from 'react-router-dom'

const url = "http://localhost:5000/friends";

const Friends = props => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.friends.map((friend, index) => (
          <tr key={index}>
            <th scope="row">{++index}</th>
            <td>{friend.name}</td>
            <td>{friend.age}</td>
            <td>{friend.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const addAFriendForm = props => {
  return (
    <form>
      <p>Hi Friendy!</p>
      <input name="Name" onChange={props.enterFriend} value={props.value.Name} placeholder="Name"/>
      <input name="Age" onChange={props.enterFriend} value={props.value.Age} placeholder="Age"/>
      <input name="Email" onChange={props.enterFriend} value={props.value.Email} placeholder="Email"/>

    </form>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      Name: "",
      Age: [],
      Email: ""
    };
  }

  componentDidMount() {
    axios
      .get(url)
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(err => {
        console.error("Server Error");
      });
  }

  enterFriend = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello Friends</h1>
        </header>
        <Friends friends={this.state.friends} />
        <addAFriendForm enterFriend={this.enterFriend} />
      </div>
    );
  }
}

export default App;
