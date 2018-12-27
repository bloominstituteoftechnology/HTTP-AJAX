import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import FriendInput from './components/FriendInput';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
    };
  }
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }, () => console.log(this.state.friends)))
      .catch(err => { throw new Error(err) });
  }
  handleUpdateList = (friends) => {
    this.setState({
      friends,
    })
  }
  render() {
    return (
      <div className="App">
        <FriendInput updateList={this.handleUpdateList} />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
