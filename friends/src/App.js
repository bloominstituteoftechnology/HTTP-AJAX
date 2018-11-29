import React from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import { Container, Header, Menu, Loader } from 'semantic-ui-react';

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends React.Component {
  state = {
    friends: [],
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
    return (
      <Container style={{paddingBottom: '50px'}}>
        <Header textAlign='center' as='h1' style={{margin: '24px'}}>
          Lambda's Friends
        </Header>
        <Menu pointing>
          <NavLink className="item" exact to='/'>
            Home
          </NavLink>
          <NavLink className="item" to='/form'>
            Add Friend
          </NavLink>
        </Menu>

        <Route exact path='/' />

        <Route path='/form' render={ props => (
          <FriendForm
            {...props}
            addFriend={this.addFriend}
          />
        )} />

        {
          this.state.friends.length ?
          <FriendList
            deleteFriend={this.deleteFriend}
            updateFriend={this.updateFriend}
            friends={this.state.friends}
          /> :
          <Loader active inline='centered'>
            Loading ...
          </Loader>
        }

      </Container>
    );
  }
}

export default App;