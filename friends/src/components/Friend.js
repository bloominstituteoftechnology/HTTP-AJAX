import React, { Component } from "react";
import { axios } from "axios";

export default class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: null
    };
  }

  componentDidMount = () => {
    console.log(this.props);
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        console.log(res);
        this.setState({
          friend: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    // const props =

    return (
      <div>
        <h2>
          {this.props.name}
          <span
            onClick={() =>
              this.props.deleteItem(this.props.match.params.friend.id)
            }
          >
            X
          </span>
        </h2>
        <p>{this.props.age}</p>
        <p>{this.props.email}</p>
      </div>
    );
  }
}
