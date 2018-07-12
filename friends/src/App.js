import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state={
      friendsData:[],
      friends:""
    };
  }

  handleData = data => this.setState ({friendsData:data});
  
  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
        .then(response => {
          this.setState({ friendsData: response.data})
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <FriendsList
          handleData={this.handleData}
          friends={this.state.friendsData}
        />
      </div>
    );
  }
}

export default App;
