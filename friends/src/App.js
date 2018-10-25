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
onSubmitHandler=(e)=>{
    e.prevent.default();
    const{ name, age, email} = this.state;
    const friend = {
        name,
        age,
        email
    }
    axios.post('http://localhost:5000/friends', ...this.state).then(friends=>{
        this.setState({friendsData: friends.data})
    })
}
  render() {
    const { friendsData, name, modal} = this.state;
    return (
      <AppContainer className="App" friends={friendsData}>
        <AddFriend 
          friendsData={friendsData}
          inputChange={this.inputChangeHandler}
          toggle={this.toggle}
          modal={modal}
          name={name}
          age={this.state.age}
          email={this.state.email}
        />
        <Route exact path='/' render={props => <Friends friendsData={friendsData}/>} />
      </AppContainer>
    );
  }
}

export default App;
