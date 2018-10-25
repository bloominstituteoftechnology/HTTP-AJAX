import React from 'react';
import { StyledFriendsList } from './Styled';

class UpdateFriend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledFriendsList>
        {/* <p>{this.props.id}</p> */}
        <form>
          <input type="text" value={this.props.name} />
          <input type="text" value={this.props.age} />
          <input type="text" value={this.props.email} />
          <button>Submit</button>
        </form>
      </StyledFriendsList>
    );
  }
}

export default UpdateFriend;
