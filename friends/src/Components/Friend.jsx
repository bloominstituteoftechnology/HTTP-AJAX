import React from 'react';

class Friend extends React.Component {
  render() { 
    const { name, email, age } = this.props;
    return (
      <div className="friend" style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <div className="name">{name}</div>
        <div className="email">{email}</div>
        <div className="age">{age}</div>
      </div>
    );
  }
}
 
export default Friend;