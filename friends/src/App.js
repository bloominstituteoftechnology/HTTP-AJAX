import React, { Component } from 'react';
import axios from 'axios';
import CardList from './components/Cards/CardList';
import './App.css';
import Styled from 'styled-components';
import CardForm from './components/Cards/CardForm';
import { Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

const Container = Styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        email: '',
        age: '',
      }
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data})
      })
      .catch(error => {
        console.error('Server Error', error);
      })
  }

  handleInput = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value,
        date: Date.now(),
      }
    })
  }

  handleAddNewFriend = e => {
    axios.post('http://localhost:5000/friends', this.state.friend)
      .then(response => this.setState({ friends: response.data, friend: this.state.friend}))
  }

  handleDeleteFriend = friendId => {
    return axios.delete(`http://localhost:5000/friends/${friendId}`)
      .then(response => this.setState({ friends: response.data}))
      .catch(error => { console.error('Server Error', error)});
  }

  render() {
    return (
      <Container>
        <Navigation />
        <Route exact path="/" render={props => <CardForm handleInput={this.handleInput} handleSubmit={this.handleAddNewFriend} />} />
        <Route exact path="/friends" render={props => <CardList data={this.state.friends} handleDelete={this.handleDeleteFriend} />} />
        
      </Container>
    );
  }
}

export default App;
