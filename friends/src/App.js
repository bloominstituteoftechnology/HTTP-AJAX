import React from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList/FriendsList.js'
import FriendsForm from './FriendsForm/FriendsForm.js'
import Friend from './FriendsList/Friend.js'
import { Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err))
  }

  //add friend by taking up response information from FriendForm component

  addFriendToList = (response) => {
    this.setState({
      friends: response
    })
  }

  //remove friend by taking up response information from FriendForm component

  deleteFriendFromList = (response) => {
    this.setState({
      friends: response
    })
  }

  //update friend by taking up response information from Friend component

  updateFriendList = (response) => {
    this.setState({
      friends: response
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Who are your friends?</h1>
        <Route
          exact
          path='/friends'
          render={props => 
            <FriendsList 
              {...props}
              friends={this.state.friends}
              updateFriendList={this.updateFriendList}
              deleteFriendFromList={this.deleteFriendFromList}
            />
          }
        />
        {/* <FriendsList 
          friends={this.state.friends}
          updateFriendList={this.updateFriendList}
          deleteFriendFromList={this.deleteFriendFromList}
        /> */}
        {/* <Route
          path='/friends/:id' 
          render={props => 
            <Friend 
              {...props} 
            />
          }
        /> */}
        <FriendsForm addFriendToList={this.addFriendToList}/>
      </div>
    );
  }
}

export default App;
