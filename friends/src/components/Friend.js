import React from 'react';
import FriendCard from './FriendCard';
import FriendForm from './FriendForm';

import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <FriendForm 
          update 
          updateFriend={this.props.updateFriend}
          history={this.props.history}
          id={this.state.id}
          friend={this.state.friend}
        />
        <FriendCard friend={this.state.friend} />
        <Link to="/friends">
          <button>Back to List</button>
        </Link>
      </div>
    )
  }
}

export default Friend;