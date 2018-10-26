import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AddFriend extends Component {
  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>
        <h4>Add Friend</h4>

      </div>
    )
  }
}

export default AddFriend;
