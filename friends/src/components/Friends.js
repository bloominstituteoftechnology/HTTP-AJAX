import React from "react";
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
  render() {
    return (
      <div>
        {this.state.friends &&
          this.state.friends.map(e => {
            return <div>{JSON.stringify(e)}</div>;
          })}
      </div>
    );
  }
}
