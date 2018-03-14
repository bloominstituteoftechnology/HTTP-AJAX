import  React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'

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
        <Button onClick={this.handleDelete} type="submit" color="danger">Delete Friend</Button>
        <Link to="/">
          <p>Return to Friends List</p>
        </Link>
      </div>
    );
  }

  handleDelete = event => {
    console.log("Im in delete");
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log(res.data)
          .catch(console.error(error))
      })
  } 
}

export default Friend;
