import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import List from "./List";

const url = "http://localhost:5000/friends";

const InputForm = props => {
  return (
    <div className="form-input">
      <form onSubmit={this.addNewFriend}>
        <input
          type="text"
          onChange={props.handleChange}
          value={props.value.name}
          name="name"
          placeholder="Name"
        />
        <input
          type="Number"
          onChange={props.handleChange}
          value={props.value.age}
          name="age"
          placeholder="Age"
        />
        <input
          type="email"
          onChange={props.handleChange}
          value={props.value.email}
          name="email"
          placeholder="E-mail"
        />
        <button onClick={props.addNewFriend}>Add New Friend</button>
      </form>
    </div>
  );
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      friend: [],
      name: "",
      age: null,
      email: ""
    };
  }
  componentDidMount() {
    axios
      .get(url)
      .then(response => {
        console.log(response);
        this.setState({
          friend: response.data
        });
      })
      .catch(err => console.log(err));
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  addNewFriend = () => {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post(url, newFriend)
      .then(response => {
        this.setState({
          friend: response.date
        });
      })
      .catch(err => console.log(err));
  };

  editFriend = (id) => {
    const updatedFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios
      .put(`${url}/${id}`, updatedFriend)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };
  deleteFriend = id => {
    axios
      .delete(`${url}/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <div className="friend-list">
          <List 
          list={this.state.friend} 
          deleteFriend={this.deleteFriend} 
          editFriend={this.editFriend}
          />
        </div>
        <InputForm
          handleChange={this.handleChange}
          value={this.state.friend}
          addNewFriend={this.addNewFriend}
          editFriend={this.editFriend}
        />
      </div>
    );
  }
}

export default App;
