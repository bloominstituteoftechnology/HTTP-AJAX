import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const FriendsListStyled=styled.div`
display:flex;
flex-direction:column;
width:40%;
height:20rem;
justify-content:space-between;
margin:auto;
`


class App extends Component {
  constructor(){
    super();
    this.state={
      friends:[]
    }

  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => (this.setState({friends: response.data})) )
      .then(response =>console.log(this.state.friends))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
      <FriendsListStyled>
      {this.state.friends.map(
        (friend)=>{return <div>name:{friend.name} age: {friend.age} email: {friend.email}
        </div>}
      )}
      </FriendsListStyled>
      

      </div>
    );
  }
}

export default App;
