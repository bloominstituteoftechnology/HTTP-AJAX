import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import { Button, FormGroup, Form, Input, Tooltip, Row, Col, Container } from 'reactstrap';

import { FriendsList } from './components/FriendsList';

const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 50px;
`

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      tooltipOpen: false,
      name: "",
      age: "",
      email: ""
    }
  }

  toggleToolTip = () => {
    this.setState({
    tooltipOpen: !this.state.tooltipOpen
    });
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
                    <Row>      
                        <Col xs="4">
                            <FormContainer>
                                <Form>
                                    <FormGroup>
                                        <Input placeholder="Insert Friend's Name" onChange={this.changeHandler} name="name" value={this.state.name}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input placeholder="How old is he/she?" onChange={this.changeHandler} name="age" value={this.state.age}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input placeholder="Friend's Email" type="email" onChange={this.changeHandler} name="email"  value={this.state.email}></Input>
                                    </FormGroup>  
                                    <Button id="newfriend" color="primary" onClick={this.addNewFriend} >New Friend</Button>
                                    <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="newfriend" toggle={this.toggleToolTip}>
                                        Save New Friend!
                                    </Tooltip>
                                </Form> 
                            </FormContainer>
                            
                        </Col>
                        <Col xs="8">
                            <FriendsList friends={this.state.friendsList} updateFriendInfo={this.updateFriendInfo} deleteFriend={this.deleteFriend} />
                        </Col>
                    </Row>  
                </Container>  
            </div>  
  }
}