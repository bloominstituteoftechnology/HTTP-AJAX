import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Friend from "./components/Friend";
import styled from 'styled-components';
import Form from './components/Form';

const Wrapper = styled.div`
  width: 250px;
  margin: 0 auto;
`


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      inputName: '',
      inputAge: 21,
      inputEmail: ''
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(responce => {
        console.log(responce);
        this.setState({ data: responce.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addFriend = ev => {
    ev.preventDefault();
    console.log('OH HAAAAAAIIIII!!!!!!')
    this.setState({
      data: [
        ...this.state.data,
        { name: this.state.inputName, 
          id: this.state.data.length+1, 
          age: this.state.inputAge,
          email: this.state.inputEmail }
      ],
      inputName: '',
      inputAge: 21,
      inputEmail: ''
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Wrapper>
        
        <Form 
          addFriend={this.addFriend} 
          handleChange={this.handleChange}
          inputName={this.state.inputName}
          inputAge={this.state.inputAge}
          inputEmail={this.state.inputEmail}  
        />

        {this.state.data.map( item => (
          <Friend data={item} key={item.id} />
        ))}
        
      </Wrapper>
    );
  }
}

export default App;
