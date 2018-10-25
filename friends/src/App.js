import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      error: "",
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        this.setState({ error: "Something doesn't feel right." });
        console.log(this.state.error, err);
      });
  }

  targetChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitNewFriend = e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      id: this.state.friends.length + 1
    };
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => {
        this.setState({
            friends: response.data,
            name: "",
            email: "",
            age: ""
          }
        );
      })
      .catch(err => {
        console.log("Error:", err);
      });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log("Error:", err);
      });
  };

  updateFriend = id => {
    const updatedFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age
    };
    axios
      .put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(response => {
        this.setState({
          friends: response.data,
          name: "",
          email: "",
          age: ""
        });
      })
      .catch(err => {
        console.log("Error:", err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>'Sup?</h1>
        <p>Please add more friends. I'm lonely.</p>
        <form onSubmit={this.submitNewFriend}>
          <div>
            <label>Name </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.targetChange}
            />
          </div>
          <div>
            <label>Email </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.targetChange}
            />
          </div>
          <div>
            <label>Age </label>
            <input
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.targetChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <p>
          {" "}
          To Update a Friend's Info: Fill in the boxes above and click "Update"
          on the friend below
        </p>
        <p>--------</p>
        <p>Here are the friends I already have.</p>
        {this.state.friends.map(item => {
          return (
            <div key={item.id}>
              <p>
                {item.name} --> Age: {item.age}{" "}
              </p>
              <p>
                {item.email} {}
              </p>
              <button onClick={() => this.deleteFriend(item.id)}>
                X Delete
              </button>
              <button onClick={() => this.updateFriend(item.id)}>Update</button>
              <p>--------</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
