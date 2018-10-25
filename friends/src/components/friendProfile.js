import React from "react";

import FriendCard from "./friendCard";

// import friendsData from "./friends_data";

export default class FriendProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler = e => {
    e.preventDefault();
    this.props.history.push(`/friends/${this.props.match.params.id}/details`);
  };

  render() {

      const friend = this.props.friends.filter(item => {
        return item.id === parseInt(this.props.match.params.id);

    })[0];

    return (
      <div>
        <FriendCard {...friend} />
      </div>
    );
  }
}
