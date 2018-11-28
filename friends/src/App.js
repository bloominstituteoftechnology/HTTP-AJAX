import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friends from './Friends/Friends';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then( ( response ) =>{
        this.setState(() => ({friends: response.data}));

      })
    .catch(error => {
        console.error('Server Error', error);
    });
  }
  render() {
    
    return (
      <div className="App">
          <div>
            {this.state.friends.map((item)=><Friends friend = {item} />)}
          </div>
      </div>
    );
  }
}

export default App;
