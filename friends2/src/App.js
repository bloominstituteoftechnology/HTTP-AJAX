import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';
import FriendsList from './FriendsList';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      friends: [],
    }
  }
  
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then( response => {
        this.setState({friends: response.data})
        console.log(this.state.friends)
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <div className="App">
      <Container>
        <FriendHeader>
                  <HeaderDiv>
                      <p>Name</p>
                  </HeaderDiv>
                  <HeaderDiv>
                      <p>Age</p>
                  </HeaderDiv>
                  <HeaderDiv>
                      <p>Email Address</p>
                  </HeaderDiv>
              </FriendHeader>
        {this.state.friends.map((friend) => {
          return (
              <Route 
                path="/" 
                render={(props) => <FriendsList 
                                      name={friend.name} 
                                      age={friend.age} 
                                      email={friend.email} 
                                      id={friend.id} /> } /> 
              )})}
            </Container>
      </div>
    );
  }
}


export default App;

const Container = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    
`
const HeaderDiv = styled.div`
    width: 33.3%;
    display: flex;
    justify-content: center;
    color: white;
`;

const FriendHeader = styled.div`
    width: 800px;
    display: flex;
    justify-content: center;
    background-color: black;
`