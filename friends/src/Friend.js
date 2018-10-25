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

        <span>
          <p
            className="update"
            id={this.props.id}
            onClick={this.props.updateFriend}
          >
            U
          </p>
          <p
            className="delete"
            id={this.props.id}
            onClick={this.props.deleteFriend}
          >
            X
          </p>
        </span>
      </StyledFriendsList>
    );
  }
}

export default Friend;
