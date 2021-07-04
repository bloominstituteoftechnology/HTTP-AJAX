import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import FriendsList from './FriendsList';
import Form from './Form';
import Friend from './Friend';
import Header from './Header';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  };

  //getting data from API and setting state
  
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then( response => {
        this.setState({friends: response.data})
      })
      .catch(err => {
        console.log(err);
      });
  };

  //Add friend Handler, getting passed down to Form.js

  addNewFriend = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends',{
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    })
    .then(response => {
      this.setState({
        friends: response.data,
        name: '',
        age: '',
        email: ''
      })
    })
    .catch(err => {console.log(err)})
  };

  //Update friend handler, getting passed to Friend.js

  updateHandler = (id, name, age, email) => {
    axios.put(`http://localhost:5000/friends/${id}`, {
      id: id,
      name: name,
      age: age,
      email: email
    })
    .then( response => {
        this.setState({
          friends: response.data,
          name: '',
          age: '',
          email: ''
        })
        console.log(response.data)
    })
    .catch(err => console.log(err))
};

  //Delete friend handler, getting passed to FriendList.js

  deleteHandler = (id) => {
    return () => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then( response => {
      this.setState({ friends: response.data })
    })
    .catch(err => console.log(err))
    }
  }

  //input handler, for the main page form, getting passed to Form.js (different form used on FriendProfile)

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {
    return (
      <div className="App">
      <Container>
        <Link to='/'>Home</Link>
        <Header />
        {this.state.friends.map((friend) => {
          return (
              <Route exact path="/" render={(props) => 
                                      <FriendsList 
                                        name={friend.name} 
                                        age={friend.age} 
                                        email={friend.email} 
                                        id={friend.id} 
                                        deleteHandler={this.deleteHandler} /> } /> 
              )})}

              <Route exact path="/friends/:id" render={(props) => <Friend 
                                                                    {...props} 
                                                                    friends={this.state.friends}
                                                                    updateHandler={this.updateHandler}
                                                                   />} />
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
    width: 25%;
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