import React from 'react';
import FriendCard from './FriendCard';

import axios from 'axios';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {}
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.getFriend(id);
  }

  getFriend = id => {
    axios.get(`http://localhost:5000/friends`)
      .then(response => {
        let friend = response.data.find(data => data.id === Number(id));
        this.setState({ friend: friend })
        // console.log(friend);
      })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div>
        <FriendCard friend={this.state.friend} />
      </div>
    )
  }
}

export default Friend;