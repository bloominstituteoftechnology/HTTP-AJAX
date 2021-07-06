import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import axios from 'axios';


import FriendForm from './FriendForm'

const Columns = styled.div`
  border: 2px solid lightgray;
  display: flex;
  flex-direction: row;
  align-text: left;
  padding-left: 15px;
`;

const Data = styled.div`
  text-align: left;
  margin-right: 3em;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      }
    }
  

componentDidMount = () => {
  axios.get('http://localhost:5000/friends')
  .then(response => {
    this.setState({ friends: response.data })
  })
  .catch(err => {console.log(err)})
}

addNewFriend = (e, friend) => {
  e.preventDefault();
  axios.post('http://localhost:5000/friends', friend)
  .then(response => this.setState({
    friends: response.data
  }))
  .catch(err => console.log(err))
}



  render() {
    return (
      <div className="App">
        <h1 className="form-header">Friend List</h1>
        <Columns>
          <Data>
            <h1>Name</h1>
            {this.state.friends.map(friend => (
                  <h2>{friend.name}</h2>
                  
            ))}
          </Data>
          
          <Data>
            <h1>Age</h1>
            {this.state.friends.map(friend => (
              <h2>{friend.age}</h2>
            ))}
          </Data>

          <Data>
            <h1>Email</h1>
            {this.state.friends.map(friend => (
              <h2>{friend.email}</h2>
            ))}
          </Data>

        </Columns>
        
          
    
        
        <FriendForm addNewFriend={this.addNewFriend}/>
      </div>
    );
  }
}

export default App;
