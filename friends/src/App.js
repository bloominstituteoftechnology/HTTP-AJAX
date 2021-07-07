import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import NewFriendForm from "./components/NewFriendForm";
import FriendDisplay from "./components/FriendDisplay";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: this.getBlankFriend(),
      editMode: false,
      editId: null
    };
  }

  getBlankFriend() {
    return {
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  formChangeHandler = ev => {
    this.setState({ newFriend: {
      ...this.state.newFriend,
      [ev.target.name]: ev.target.value
    }});
  }

  addNewFriend = ev => {
    ev.preventDefault();
    this.setState({ newFriend: {
      ...this.state.newFriend,
      age: Number(this.state.newFriend.age)
    }});
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response => this.setState({ 
        friends: response.data,
        newFriend: this.getBlankFriend()
      }))
      .catch(error => console.log(error));
  }

  finishEdit = ev => {
    ev.preventDefault();
    axios
      .put(
        `http://localhost:5000/friends/${this.state.editId}`,
        this.state.newFriend
      )
      .then(response => {
        this.setState({
          friends: response.data,
          newFriend: this.getBlankFriend(),
          editMode: false,
          editId: null
        });
      })
      .catch(error => console.log(error));
  }

  deleteFriend = (ev, id) => {
    ev.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => console.log(error));
  }

  toggleEdit = (ev, id) => {
    ev.preventDefault();
    // If not editing, enter editing mode:
    if (!this.state.editMode) {
      const friendInfo = this.state.friends.find(obj => obj.id === id);
      this.setState({
        editMode: true,
        editId: id,
        newFriend: {...friendInfo}
      });
    // If active edit button clicked again, turn off editing mode:
    } else if (id === this.state.editId) {
      this.setState({
        editMode: false,
        editId: null,
        newFriend: this.getBlankFriend()
      });
    // Switch to editing a new friend-card:
    } else {
      const friendInfo = this.state.friends.find(obj => obj.id === id);
      this.setState({
        editId: id,
        newFriend: {...friendInfo}
      });
    }
  }

  render() {
    if (!this.state.friends.length) {
      return (<h2>Loading ...</h2>);
    }
    return (
      <div className="App">
        <FriendDisplay
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
          toggleEdit={this.toggleEdit}
          editId={this.state.editId}
        />
        <NewFriendForm 
          changeHandler={this.formChangeHandler}
          newFriend={this.state.newFriend}
          addNewFriend={this.addNewFriend}
          finishEdit={this.finishEdit}
          editMode={this.state.editMode}
        />
      </div>
    );
  }
}

export default App;
