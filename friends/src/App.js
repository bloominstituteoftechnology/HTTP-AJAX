import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';
import FriendForm from "./components/FriendForm";



class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: []
    }

  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data});

        console.log(friends);
      })

      .catch(error => console.log('ERROR: ', error));
  }




  render() {
    return (
      <div className="App">



        <div>
          <FriendForm




          />

        </div>

      </div>
    );
  }
}

export default App;
