import React from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  addNewFriend = newFriend => {
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>React Friends</h1>
          <Link className='friends' exact to='/new-friend'>
            FRIENDS
          </Link>
          <Route
            path='/new-friend'
            render={props => (
              <FriendForm {...props} addNewFriend={this.addNewFriend} />
            )}
          />
          <FriendsList
            friends={this.state.friends}
            deleteFriend={this.deleteFriend}
          />
        </header>
      </div>
    );
  }
}

export default App;
