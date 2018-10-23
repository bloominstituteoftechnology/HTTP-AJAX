import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';



class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [];
    }

  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data});

        console.log(friends);
      })

      .catch(e => console.log(e));
  }




  render() {
    return (
      <div className="App">





      </div>
    );
  }
}

export default App;
