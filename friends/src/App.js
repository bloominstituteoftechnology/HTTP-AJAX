import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import { Button, FormGroup, Form, Input } from 'reactstrap';

import { FriendsList } from './components/FriendsList';

const Container= styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    >form {
      width: 80%;
    }    
`


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      name: "",
      age: "",
      email: ""
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => this.setState({friendsList: [...response.data]}))
    .catch(err => console.error(err))
  }

  addNewFriend = e => {
    e.preventDefault();
    if(this.state.name && this.state.age && this.state.email) {
        const friend = {
        id: this.state.friendsList.length + 1,
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      }
      axios.post('http://localhost:5000/friends', friend)
        .then(response => this.setState({
        friendsList: [...response.data],
        name: "",age:"",email:""
        })
      ).catch(err => console.error(err))
    }        
  }

  updateFriendInfo = (id, friend) => axios.put(`http://localhost:5000/friends/${id}`, friend)
  .then(response => this.setState({friendsList: [...response.data]}))
  .catch(err => console.error(err))

  deleteFriend = id => axios.delete(`http://localhost:5000/friends/${id}`)
  .then(response => this.setState({friendsList: [...response.data]}))
  .catch(err => console.error(err))
  
  changeHandler = e => this.setState({[e.target.name]: e.target.value});

  render() {
    return  <div className="App">
                <Container>
                    <FriendsList friends={this.state.friendsList} updateFriendInfo={this.updateFriendInfo} deleteFriend={this.deleteFriend} />
                    <Form>
                        <FormGroup>
                            <Input placeholder="Name" onChange={this.changeHandler} name="name" value={this.state.name}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="Age" onChange={this.changeHandler} name="age" value={this.state.age}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="Email" type="email" onChange={this.changeHandler} name="email"  value={this.state.email}></Input>
                        </FormGroup>  
                        <Button color="primary" onClick={this.addNewFriend} disabled={!this.state.name||!this.state.age||!this.state.email ? true : false} >New Friend</Button>
                    </Form>  
                </Container>  
            </div>  
  }
}