import React from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
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

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>React Friends</h1>
          <FriendsList friends={this.state.friends} />
        </header>
      </div>
    );
  }
}

export default App;
