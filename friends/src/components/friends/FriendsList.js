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
      inputName: '',
      inputAge: '',
      inputEmail: '',
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

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  resetInput = () => {
    console.log('test reset input');
    this.setState({
      inputName: '',
      inputAge: '',
      inputEmail: '',
    });
  };

  addFriend = (event) => {
    event.preventDefault();
    console.log('addFriend function');
    axios
      .post('http://localhost:5000/friends', {
        name: this.state.inputName,
        age: Number(this.state.inputAge),
        email: this.state.inputEmail,
      })
      .then((response) => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch((error) => {
        console.error('Server Error', error);
      });
    this.resetInput();
  };

  render() {
    console.log(this.state.friends);
    return (
      <List>
        {this.state.friends.map((friend) => (
          <FriendCard friend={friend} key={friend.id} />
        ))}
        <AddFriendForm
          {...this.state}
          handleInput={this.handleInput}
          addFriend={this.addFriend}
        />
      </List>
    );
  }
}

export default FriendsList;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
