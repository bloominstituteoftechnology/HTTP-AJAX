import React, { Component } from 'react';
import axios from 'axios';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      loading: true
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({
          friends: response.data,
          loading: false
        }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    } else if (!this.state.loading) {
      return (
        <div>
          <FriendList friends={this.state.friends}/>
          <FriendForm friends={this.state.friends}/>
        </div>
    )}}
  }

export default App;





  

  