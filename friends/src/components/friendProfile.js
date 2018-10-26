import React from "react";

import FriendCard from "./friendCard";

// import friendsData from "./friends_data";

export default class FriendProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };

  }
  updateHandler = (id) => {
    this.props.updateFriend(id, this.state.name, this.state.age, this.state.email);


  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });


  };
  render() {
    const friend = this.props.friends.filter(item => {
      return item.id === parseInt(this.props.match.params.id);
    })[0];

    return (
      <div>
        <FriendCard
          {...friend}
          deleteFriend={this.props.deleteFriend}
          updateHandler={this.updateHandler}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
