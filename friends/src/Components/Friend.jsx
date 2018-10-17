import React from 'react';

class Friend extends React.Component {
  handleButtonClick = (event) => {
    const { id, deleteFriend } = this.props;
    deleteFriend(event, id)
  }
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
        <button onClick={this.handleButtonClick}>X</button>
      </div>
    );
  }
}
 
export default Friend;