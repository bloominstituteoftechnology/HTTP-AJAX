import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Friends from './Components/friends';
import styled from 'styled-components';
import AddFriend from './Components/addFriendForm';

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
           modal: false,
    }
    this.toggle = this.toggle.bind(this);
}

componentDidMount = () => {
axios
.get('http://localhost:5000/friends')
.then(response => {
   this.setState({friendsData: response.data})
   console.log(this.state.friendsData)
})
}
  

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

inputChangeHandler=(e)=>{
  console.log(e.target.value)
  this.setState({ [e.target.name]: e.target.value });
}
addSubmitHandler=(e)=>{
    e.preventDefault();
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
          modal: !this.state.modal
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
  render() {
    const { friendsData, name, modal, age, email} = this.state;
    return (
      <AppContainer className="App" friends={friendsData}>
        <AddFriend 
          className='addBtn'
          friendsData={friendsData}
          inputChange={this.inputChangeHandler}
          toggle={this.toggle}
          modal={modal}
          name={name}
          age={age}
          email={email}
          click={this.addSubmitHandler}
          
        />
        <Route exact path='/' render={props => <Friends friendsData={friendsData} deleteHOE={this.deleteSubmitHandler}/>} />
      </AppContainer>
    );
  }
}

export default App;
