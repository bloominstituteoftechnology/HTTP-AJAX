import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import FriendsList from './components/FriendsList';
import FriendCard from './components/FriendCard';
import AddFriend from './components/AddFriend';
import UpdateFriendCard from './components/UpdateFriendCard';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 880px;
  cursor: default;
`;

const TopNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: mediumslateblue;
  border-radius: 0 0 10px 10px;

  h1{
    width: 25%;
    margin: 20px 0;
    text-align: center;
    color: white;
    font-size: 3.2rem;
  }

  a{
    width: 10%;
    text-align: center;
    color: white;
    background-color: mediumslateblue;
    font-size: 1.8rem;
    text-decoration: none;
    padding: 5px;
    margin: 0 20px;
    border: 2px solid white;
    border-radius: 8px;

    &:hover{
      color: mediumslateblue;
      background-color: white;
    }
  }
`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(response=>{
      this.setState({
        friends: response.data
      })
    })
    .catch(error=>{
      console.log(error);
    })
  }

  addFriend = (name, age, email)=>{
    const friend = {
      name: name,
      age: parseInt(age),
      email: email
    }

    const tempArray = this.state.friends;
    tempArray.push(friend);

    axios.post('http://localhost:5000/friends', friend)
    .then((response)=>{
      this.setState({
        friends: response.data
      })
    })
    .catch((error)=>{
      console.log("Error:", error);
    })
  }

  deleteFriend = (id)=>{
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(response=>{
      this.setState({
        friends: response.data
      })
    })
    .catch(error=>{
      console.log("Error:", error);
    })
  }

  updateFriend = (id, friend)=>{
    console.log(id, friend);
    axios.put(`http://localhost:5000/friends/${id}`, friend)
    .then(response=>{
      this.setState({
        friends: response.data
      })
    })
    .catch(error=>{
      console.log(error);
    })
  }

  parseFriend = (id)=>{
    const test = this.state.friends.find(friend=>{
      return `${friend.id}` === id;
    });
    return test;
  }

  render() {
    return (
      <AppContainer>
        <TopNavBar>
          <Link to="/">Home</Link>
          <h1>My Friends</h1>
          {/* TODO: Ask Jacob about this routing paradox */}
          <Link to="/add/friend">Add Friend</Link>
        </TopNavBar>
        <Route path="/add/friend" render={()=><AddFriend addFriend={this.addFriend}/>}/>
        <Route exact path="/" render={(props)=><FriendsList friends={this.state.friends}/>}/>
        <Route exact path="/:id" render={(props)=><FriendCard friend={this.parseFriend(props.match.params.id)} deleteFriend={this.deleteFriend} updatedelete/>}/>
        <Route path="/:id/update" render={(props)=><UpdateFriendCard friend={this.parseFriend(props.match.params.id)} updateFriend={this.updateFriend}/>}/>
      </AppContainer>
    );
  }
}

export default App;
