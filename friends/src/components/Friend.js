import React from 'react';
import '../App.css';
import axios from 'axios';

class Friend extends React.Component {
  state = {
    friend: null
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ friend: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (!this.state.friend) {
      return <div>Loading friend information...</div>;
    }

    return (
      <div className="friend">
        <div className="friendDetail"><b>Name:</b> {this.state.friend.name}</div>
        <div className="friendDetail"><b>Age:</b> {this.state.friend.age}</div>
        <div className="friendDetail"><b>Email:</b> {this.state.friend.email}</div>
      </div>
    );
  }
}

export default Friend;
