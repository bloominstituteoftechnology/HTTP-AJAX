import React from 'react';

import { StyledFriendsList } from './Styled';

class FriendListHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledFriendsList>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.props.email}</p>
      </StyledFriendsList>
    );
  }
}

export default FriendListHeader;
