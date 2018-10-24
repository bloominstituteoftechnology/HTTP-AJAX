import React from 'react';
import { StyledFriendsList } from './Styled';

class Friend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledFriendsList>
        {/* <p>{this.props.id}</p> */}
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.props.email}</p>
        <span id={this.props.id} onClick={this.props.deleteFriend}>
          X
        </span>
      </StyledFriendsList>
    );
  }
}

export default Friend;
