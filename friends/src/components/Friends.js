import React from "react";
import "./Friends.css";
import axios from "axios";

export default class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: "",
      id: null
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  }
  submit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };
  delete = (e, ids) => {
    this.setState({ id: ids });
    axios
      .delete(`http://localhost:5000/friends/${ids}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  };
  name = e => {
    this.setState({
      name: e.target.value
    });
  };
  age = e => {
    if (typeof e.target.value !== "number") {
      this.setState({
        age: e.target.value
      });
    }
  };
  email = e => {
    this.setState({
      email: e.target.value
    });
  };
  render() {
    return (
      <>
        {this.state.friends &&
          this.state.friends.map(e => {
            return (
              <div key={e.id} onClick={x => this.delete(x, e.id)}>
                {e.name}, {e.age}, {e.email}
              </div>
            );
          })}
        <form action="submit">
          <input
            type="text"
            onChange={this.name}
            value={this.state.name}
            placeholder="Name"
          />
          <input
            type="number"
            onChange={this.age}
            value={this.state.age}
            placeholder="Age"
          />
          <input
            type="email"
            onChange={this.email}
            value={this.state.email}
            placeholder="Email"
          />
          <button onClick={this.submit} onSubmit={this.submit}>
            Submit
          </button>
        </form>
      </>
    );
  }
}
