import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friends from './Components/Friends/Friends';
import FriendsInput from './Components/Friends/FriendsInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }, () => console.log(this.state.friends)))
      .catch(err => { throw new Error(err) });
  }
  handleUpdatelist = (friends) => {
    this.setState({
      friends,
    })
  }
  render() {
    return (
      <div className="App">
        <FriendsInput updatelist={this.handleUpdatelist} />
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
