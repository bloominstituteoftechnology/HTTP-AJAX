import  React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Friend extends Component {
  constructor() {
    super();
    this.state = {
      friend: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:5000/friends/${id}`)
      .then(response => this.setState(() => ({ friend: response.data })))
      .catch(error => {
        console.error('Friend request caused an error: ',error);
      });
  }

  render() {
    if (!this.state.friend) {
      return <div>No friend exist...</div>;
    }

    const { name, age, email } = this.state.friend;
    return (
      <div className="friend-card">
        <h2>{name}</h2>
        <div className="friend-age">
          Age: <em>{age}</em>
        </div>
        <div className="friend-email">
          E-Mail: <strong>{email}</strong>
        </div>

        <Link to="/">
          <p>Return to Friends List</p>
        </Link>
      </div>
    );
  }
}

export default Friend;
