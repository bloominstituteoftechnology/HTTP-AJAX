import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

import './App.css';
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

const AppContainer = styled.div`
  display: flex;
  //flex-direction: row;
`
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
        error: 'No friends!',
        newFriend: {
          name: '',
            age: '',
            email: ''
        }
    }
  }
  // mounting localhost:5000 to state
  // made Promise that returns data if true otherwise returns error
  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
          console.log(response.data)
          this.setState({
            friends: response.data
          })
        })
        .catch(error => {
            this.setState({ error: error.response })
          console.log(error)
        })
  }
  handleChange = event => {
      this.setState({
          newFriend: {
              ...this.state.newFriend, [event.target.name]: event.target.value
          }
      })
      // this.setState({
      //     [event.target.name]: event.target.value
      // })
  };
  addFriend = () => {
    axios
        .post('http://localhost:5000/friends')
        .then(response => {
            this.setState({
                friends: response.data, newFriend: {
                    name: '',
                    age: '',
                    email: ''
                }
            })
        })
        .catch(error => {
            this.setState({

            })
        })
  }
  removeFriend = () => {

  }
  render() {
    return (
      <AppContainer>
          <AddFriend friends={this.state.friends} handleChange={this.handleChange} addFriend={this.addFriend} />
          <FriendsList friends={this.state.friends} />
      </AppContainer>
    );
  }
}

export default App;
