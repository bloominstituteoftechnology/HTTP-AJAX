import React from 'react';
import FriendCard from './FriendCard';
import NewFriendForm from './NewFriendForm';

import axios from 'axios';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {},
      id: ''
    }
  }

  componentDidMount() {
    this.setState({ id: this.props.match.params.id });
    this.getFriend(this.state.id);
  }

  getFriend = id => {
    axios.get(`http://localhost:5000/friends`)
      .then(response => {
        let friend = response.data.find(data => data.id === Number(this.state.id));
        this.setState({ friend: friend })
      })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div>
        <NewFriendForm update updateFriend={this.props.updateFriend} id={this.state.id} />
        <FriendCard friend={this.state.friend} />
      </div>
    )
  }
}

export default Friend;