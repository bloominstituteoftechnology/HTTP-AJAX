import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class AddFriend extends Component {
  render() {
    return (
      <div>
          <h1> Add Friend </h1>
          <Link to={`/`}> <Button> Friends List </Button> </Link>
      </div>
    );
  }
}

export default AddFriend;