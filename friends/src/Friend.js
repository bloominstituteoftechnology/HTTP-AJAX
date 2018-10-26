import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            Edit
            {/* <FontAwesomeIcon icon="pencil-alt" /> */}
          </p>
          <p
            className="delete"
            id={this.props.id}
            onClick={this.props.deleteFriend}
          >
            X{/* <FontAwesomeIcon icon="trash-alt" /> */}
          </p>
        </span>
      </StyledFriendsList>
    );
  }
}

export default Friend;
