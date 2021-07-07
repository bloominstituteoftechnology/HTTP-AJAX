import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from "./components/FriendsList";
import AddForm from "./components/AddForm";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: "",
      updateName: "",
      updateAge: "",
      updateEmail: ""
    }

  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }));
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

 handleSubmit = (e) => {
    e.preventDefault();
    let newFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age
    }
    axios.post("http://localhost:5000/friends", newFriend)
      .then(response => {
        let newFriendArray = response.data.slice();
        this.setState({
          friends: newFriendArray,
          name: "",
          age: 0,
          email: ""
        });
      });
  }

  handleUpdate(e) {
    e.preventDefault();
    let newUpdate = {
      name: this.state.updateName,
      age: this.state.updateAge,
      email: this.state.updateEmail
    }
    axios.put(`http://localhost:5000/friends/${e.target.name}`, newUpdate)
      .then(response => {
        console.log(response);
        let newArray = response.data.slice();
        this.setState({friends: newArray});
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleDelete(e) {
    e.preventDefault();
    e.target.parentElement.style.display = "none";
    axios.delete(`http://localhost:5000/friends/${e.target.name}`)
      .then(response => {
        console.log(response.data)
        let newArray = response.data.slice();
        this.setState({name: newArray});
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h1> home</h1>
        <AddForm
        input={this.handleInput.bind(this)}
        submit={this.handleSubmit.bind(this)}
        name={this.state.name}
        age={this.state.age}
        email={this.state.email}
        />
        <FriendsList
        input={this.handleInput.bind(this)}
        friends={this.state.friends}
        update={this.handleUpdate.bind(this)}
        updateName={this.state.updateName}
        updateAge={this.state.updateAge}
        updateEmail={this.state.updateEmail}
        delete={this.handleDelete}
        />

      </div>
    )

  }
}