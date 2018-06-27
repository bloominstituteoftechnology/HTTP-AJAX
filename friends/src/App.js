import React, { Component } from 'react';
import './App.css';
import FriendList from './Components/FriendList';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends : []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response =>{
        console.log(response)
        console.log("DATA",response.data)
        this.setState({ friends : response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to our Friends List</h1>
        </header>
        <FriendList friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
