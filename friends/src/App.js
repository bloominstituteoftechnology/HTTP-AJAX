import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import xCircle from "./x-circle.svg";
import xCircleWhite from "./x-circle white.svg"
import save from "./save.svg";

const blankFormValues = {
  name: "",
  age: "",
  email: ""
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friendToUpdate: null,
      newFriend: {
        name: "",
        age: "",
        email: ""
      },
      isUpdating: false,
      formOpen: false
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response =>
        this.setState({ friends: response.data, newFriend: blankFormValues, formOpen: false })
      )
      .catch(error => console.log(error));
  };

  handleUpdate = id => {
    const friendToUpdate = this.state.friends.find(friend => friend.id === id);
    this.setState({
      friendToUpdate,
      newFriend: friendToUpdate,
      isUpdating: true,
      formOpen: true
    });
  };

  handleSubmitUpdate = event => {
    event.preventDefault();
    axios
      .put(
        `http://localhost:5000/friends/${this.state.friendToUpdate.id}`,
        this.state.newFriend
      )
      .then(response =>
        this.setState({
          friends: response.data,
          newFriend: blankFormValues,
          isUpdating: false,
          formOpen: false,
        })
      )
      .catch(error => console.log(error));
  };

  handleDelete = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  };

  handleCancel = event => {
    event.preventDefault();
    this.setState({
      isUpdating: false,
      newFriend: blankFormValues,
      formOpen: false
    });
  };

  openForm = event => {
    event.preventDefault();
    this.setState({ formOpen: true });
  };

  render() {
    return (
      <div className="App">        
        <h1>Friends</h1>
        <div className="friends-list">
          {this.state.friends.map(friend => (
            <div className="friend-card" key={friend.id}>
              <h2>{friend.name}</h2>
              <p>Age: {friend.age}</p>
              <p>
                Email: <a href={`mailto:${friend.email}`}>{friend.email}</a>
              </p>
              <div className="update-delete">
                <span
                  className="update-link"
                  onClick={() => this.handleUpdate(friend.id)}
                >
                  Update
                </span>
                <img
                  className="cancel-button"
                  src={xCircle}
                  alt="delete"
                  onClick={() => this.handleDelete(friend.id)}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          className={`form-container ${
            this.state.isUpdating ? "updating" : ""
          }`}
          style={
            this.state.formOpen ? { display: "flex" } : { display: "none" }
          }
        >
          <form className={this.state.isUpdating ? "updating-form" : null}>
            <h2>
              {this.state.isUpdating ? "Update a Friend" : "Submit New Friend"}
            </h2>
            <input
              type="text"
              value={this.state.newFriend.name}
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              value={this.state.newFriend.age}
              name="age"
              placeholder="Age"
              onChange={this.handleChange}
            />
            <input
              type="text"
              value={this.state.newFriend.email}
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <div className="save-cancel">
            <img
              src={save}
              alt="save"
              onClick={
                this.state.isUpdating
                  ? this.handleSubmitUpdate
                  : this.handleSubmit
              }
            />
            <img
              className="cancel-button"
              src={xCircleWhite}
              onClick={this.handleCancel}
            />
            </div>
          </form>
        </div>
        <div className="open-form">
          <button onClick={this.openForm}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
