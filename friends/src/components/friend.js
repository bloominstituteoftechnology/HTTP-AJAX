import React, { Component } from 'react';


class Friend extends Component {

  render() { 
    const { name, age , email } = this.props.friend
    return ( 
      <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{email}</h3>
      </>
    );
  }
}
 
export default Friend;