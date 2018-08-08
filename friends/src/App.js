import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './Components/FriendsList';

const url = 'http://localhost:5000/friends';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { data: [], loading: true }
  }

  componentDidMount(){
    axios.get(url)
      .then(response => {
        this.setState( {data: response.data, loading: false} )
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.data} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
