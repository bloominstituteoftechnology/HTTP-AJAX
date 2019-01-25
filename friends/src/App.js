import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import PostForm from './components/PostForm';
import UpdateForm from './components/UpdateForm';
import axios from 'axios';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InputFormContainer = styled.div`
  border: 1px solid blue;
  max-width: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  };

  postToServer = info => {
    axios
    .post('http://localhost:5000/friends', info)
      .then(response => {
        this.setState({
          friends: [
            ...this.state.friends,
            info
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateToServer = (info, id) => {
    axios
    .put(`http://localhost:5000/friends/${id}`, info)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFromServer = id => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <AppContainer>
        <FriendsList friends={this.state.friends} deleteFromServer={this.deleteFromServer}/>
        <InputFormContainer>
          <PostForm postToServer={this.postToServer}/>
          <UpdateForm updateToServer={this.updateToServer} friends={this.state.friends}/>
        </InputFormContainer>
      </AppContainer>
    );
  }
}

export default App;
