// importing libraries
import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Container, Header, Loader } from 'semantic-ui-react';

// importing components
import NavBar from './components/NavBar';
import FriendList from './components/FriendList';
import InputForm from './components/InputForm';

class App extends React.Component {
  state = {
    friends: [],
    searchTerm: '',
  }

  componentDidMount() {
    // get friends data from server
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
    // add a friend and retrieve new data from server
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
    // delete a friend and retrieve new data from server
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

  updateFriend = (friend, id) => {
    // update a friend and retrieve new data from server
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
    // filter friends based on searchTerm
    const filteredFriend = this.state.friends.filter(
      friend => friend.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <Container style={{paddingBottom: '50px'}}>

        {/* App header */}
        <Header textAlign='center' as='h1' style={{margin: '24px'}}>
          Lambda's Friends
        </Header>

        {/* navigation */}
        <NavBar
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
        />

        {/* route to home */}
        <Route path='/' render={ props => {
          return (
              this.state.friends.length ?
              <FriendList
                {...props}
                deleteFriend={this.deleteFriend}
                updateFriend={this.updateFriend}
                friends={filteredFriend}
              /> :
              <Loader active inline='centered'>
                Loading ...
              </Loader>
          )
        }} />

        {/* route to update a friend */}
        <Route path='/update/:id' render={ props => (
          <InputForm 
            {...props}
            update
            handleSubmit={this.updateFriend} 
          />
        )} />

        {/* route to add a friend */}
        <Route path='/add' render={ props => (
          <InputForm
            {...props}
            handleSubmit={this.addFriend}
          />
        )} />

      </Container>
    );
  }
}

export default App;