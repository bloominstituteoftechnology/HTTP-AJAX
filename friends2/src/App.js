import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';
import FriendsList from './FriendsList';
import Form from './Form';
import Friend from './Friend'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }
  
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then( response => {
        this.setState({friends: response.data})
      })
      .catch(err => {
        console.log(err);
      });
  }

  addNewFriend = () => {
    axios.post('http://localhost:5000/friends',{
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    })
    .then(response => {
      this.setState({friends: response.data})
    })
    .catch(err => {console.log(err)})
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {
    return (
      <div className="App">
      <Container>
        <Link to='/'>Home</Link>
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
            <Link to={`/friends/${friend.id}`}> 
              <Route
                exact
                path="/" 
                render={(props) => 
                                  
                                    <FriendsList 
                                      name={friend.name} 
                                      age={friend.age} 
                                      email={friend.email} 
                                      id={friend.id} /> } /> 
              </Link>
              )})}
              <Route exact path="/friends/:id" render={(props) => <Friend {...props} friends={this.state.friends} />} />
            </Container>

            <Route exact path="/" render={(props) => <Form {...props}
                                                        name={this.state.name} 
                                                        age={this.state.age} 
                                                        email={this.state.email} 
                                                        inputHandler={this.inputHandler} 
                                                        addNewFriend={this.addNewFriend} />} />
            

              
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