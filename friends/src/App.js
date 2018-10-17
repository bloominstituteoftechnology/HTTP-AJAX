import React, { Component } from 'react';

import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      friends : [],
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
    //     this.setState({ items: data });
  }

  render() {
    return (
      <div className="App">
      {this.state.friends.map ( (friend) => {
        return (<p>{friend.name}</p>)
      })}
      
      </div>
    );
  }
}

export default App;
