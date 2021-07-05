import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Friends from './Components/friends';
import styled from 'styled-components';
import ModalComponent from './Components/modalClass';

const AppContainer = styled.div `
max-width: 500px;
width:100%;
display: flex;
margin: 0 auto;
margin-top: 60px;

`



class App extends Component {
  constructor(props){
    super(props);
    this.state={
       friendsData: [],
           name: '',
           age: null,
           email: '',
    }
}

componentDidMount = () => {
axios
.get('http://localhost:5000/friends')
.then(response => {
   this.setState({friendsData: response.data})
   console.log(this.state.friendsData)
})
}
  
inputChangeHandler=(e)=>{
  console.log(e.target.value)
  this.setState({ [e.target.name]: e.target.value });
}
addSubmitHandler=(e)=>{
    const{ name, age, email} = this.state;
    const friend = {
        name,
        age,
        email
    }
    axios
    .post('http://localhost:5000/friends', friend).then(friends=>{
        this.setState({
          friendsData: friends.data,
          name: '',
          age: '',
          email: '',
        })
    })
}
deleteSubmitHandler=(id)=>{
axios.delete(`http://localhost:5000/friends/${id}`)
  .then(response =>{
    this.setState({
      friendsData: response.data
    })
  })
}
editSubmitHandler=(id)=>{
  const{ name, age, email } = this.state;
  const friend = {
    name,
    age,
    email
  }
  axios
  .put(`http://localhost:5000/friends/${id}`, friend)
  .then( friend =>{
    this.setState({
      friendsData: friend.data,
      name: '',
      age: '',
      email: ''
    })
  })
}

  render() {
    const { friendsData, name, age, email} = this.state;
    return (
      <AppContainer className="App" >
        <ModalComponent
          inputChange={this.inputChangeHandler}
          name={name}
          age={age}
          email={email}
          click={this.addSubmitHandler}
          mainBtnName='Add Friend'
          modalTitle='GeT tHe DeEtS!'
          innerBtnName='Add my Dude!'
        />
        <Route exact path='/' render={props =>
         <Friends 
        friendsData={friendsData}
        deleteFriend={this.deleteSubmitHandler}
        inputChange={this.inputChangeHandler}
        name={name}
        age={age}
        email={email}
        click={this.editSubmitHandler}
        />} />
      </AppContainer>
    );
  }
}

export default App;
