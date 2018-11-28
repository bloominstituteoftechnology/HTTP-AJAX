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
      data: []
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

  render() {
    return (
      <Wrapper>
        
        <Form />

        {this.state.data.map( item => (
          <Friend data={item} key={item.id} />
        ))}
        
      </Wrapper>
    );
  }
}

export default App;
