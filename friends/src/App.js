import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Container, Header, Loader } from 'semantic-ui-react';

import NavBar from './components/NavBar';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends React.Component {
  state = {
    friends: [],
    searchTerm: '',
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friends: res.data,
        });
      })
      .catch(err => {
        console.log('ERR');
      });
  }

  handleSearch = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  addFriend = (friend) => {
    axios
      .post(
        'http://localhost:5000/friends'
        , friend)
      .then(res => (
        this.setState({
          friends: res.data,
          name: '',
          age: '',
          email: '',
        })
      ))
      .catch(err => console.log(err))
  }

  deleteFriend = (id) => {
    axios
      .delete(
        `http://localhost:5000/friends/${id}`
        )
      .then(res => {
        this.setState({
          friends: res.data,
        })
      })
      .catch(err => console.log(err))
  }

  updateFriend = (id, friend) => {

    axios
      .put(
        `http://localhost:5000/friends/${id}`,
        friend
      )
      .then(res => {
        this.setState({
          friends: res.data,
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const filteredFriend = this.state.friends.filter(
      friend => friend.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    return (
      <Container style={{paddingBottom: '50px'}}>
        <Header textAlign='center' as='h1' style={{margin: '24px'}}>
          Lambda's Friends
        </Header>
        <NavBar
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
        />

        <Route path='/form' render={ props => (
          <FriendForm
            {...props}
            addFriend={this.addFriend}
          />
        )} />

        <Route path='/' render={ props => {
          return (
              this.state.friends.length ?
              <FriendList
                deleteFriend={this.deleteFriend}
                updateFriend={this.updateFriend}
                friends={filteredFriend}
              /> :
              <Loader active inline='centered'>
                Loading ...
              </Loader>
          )
        }} />

      </Container>
    );
  }
}

export default App;