import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import AddFriendForm from './AddFriendForm';
import styled from 'styled-components';

class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then((response) => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch((error) => {
        console.error('Server Error', error);
      });
  }

  render() {
    console.log(this.state.friends);
    return (
      <List>
        {this.state.friends.map((friend) => (
          <FriendCard friend={friend} key={friend.id} />
        ))}
        <AddFriendForm />
      </List>
    );
  }
}

export default FriendsList;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
