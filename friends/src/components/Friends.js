import React from "react";
import "./Friends.css";
import axios from "axios";

export default class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
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
  submit(e) {
    e.preventDefault();
    console.log(e);
  }
  render() {
    return (
      <>
        {this.state.friends &&
          this.state.friends.map(e => {
            return (
              <div key={e.id}>
                {e.name}, {e.age}, {e.email}
              </div>
            );
          })}
        <form action="submit">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Age" />
          <input type="email" placeholder="Email" />
          <button onClick={this.submit} onSubmit={this.submit}>
            Submit
          </button>
        </form>
      </>
    );
  }
}
