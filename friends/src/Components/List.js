import React, { Component } from "react";
import { Link } from 'react-router-dom';

class List extends Component {
  render() {
    return (
      <>
        {this.props.state.friends.map(friend => (
          <div key={friend.name}>
            {`Name: ${friend.name}`} <br /> {`Age: ${friend.age}`}
            <br />
            {friend.email}
            <br />
            <br />
          </div>
        ))}

        <Link to={'/form'}>Add a friend!</Link>
      </>
    );
  }
}

export default List;
