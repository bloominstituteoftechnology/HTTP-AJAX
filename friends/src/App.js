import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import FriendsList from './Components/FriendsList';


class App extends Component {
  constructor(){
    super();
    this.state= {
      friends:[] 
    };
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then((result)=>{
      // console.log(result);
      this.setState({friends: result.data})
    })

  }


  render() {

    return (
      <div className="App">
        <FriendsList friendsList={this.state.friends}/>
      </div>
    );
  }
}

export default App;
