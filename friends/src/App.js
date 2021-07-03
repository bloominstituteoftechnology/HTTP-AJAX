import React, { Component } from 'react';
import axios from 'axios';
import CardList from './components/Cards/CardList';
import './App.css';
import Styled from 'styled-components';
import CardForm from './components/Cards/CardForm';
import { Route, Link, withRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

const Container = Styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`;

// empty for values
const blankFormValues = {
  name: '',
  email: '',
  age: '',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friend: {
        name: '',
        email: '',
        age: '',
        date: '',
      },
      isUpdating: false,
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  // Fetch the data for friends list
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

  // Handles the input value's data and sets the state
  handleInput = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value,
        date: Date.now(),
      }
    });
  }

  // Adds a new friend to the database
  handleAddNewFriend = e => {
    axios.post('http://localhost:5000/friends', this.state.friend)
      .then(response => this.setState({ friends: response.data, friend: this.state.friend}))
  }

  // Deletes a friend from the database
  handleDeleteFriend = friendId => {
    return axios.delete(`http://localhost:5000/friends/${friendId}`)
      .then(response => this.setState({ friends: response.data}))
      .catch(error => { console.error('Server Error', error)});
  }

  // Go's to the main form to edit a friend
  goToUpdateFriendForm = (event, id) => {
    event.preventDefault();
    const friendToUpdate = this.state.friends.find(friend => friend.id === id);
    this.setState({ isUpdating: true, friend: friendToUpdate }, () => this.props.history.push('/'))
  }

  // Go's back to the friend form after editing a friend
  handleUpdateFriend = friendId => {
    axios.put(`http://localhost:5000/friends/${friendId}`, this.state.friend)
      .then(response => {
        this.setState({
          friends: response.data,
          isUpdating: false,
          friend: blankFormValues,
        });
        this.props.history.push(`/friends`);
      });
  }

  render() {
    return (
      <Container>
        <Navigation />
        <Route exact path="/" render={props => 
          <CardForm 
            {...props} 
            friend={this.state.friend} 
            handleInput={this.handleInput} 
            handleSubmit={this.handleAddNewFriend} 
            handleUpdateFriend={this.handleUpdateFriend} 
            isUpdating={this.state.isUpdating} 
          />} 
        />
        <Route exact path="/friends" render={props => 
          <CardList 
            {...props} 
            data={this.state.friends} 
            handleDelete={this.handleDeleteFriend} 
            goToUpdateFriendForm={this.goToUpdateFriendForm} 
          />} 
      />
      </Container>
    );
  }
}

export default withRouter(App);
