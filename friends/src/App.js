import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ListFriends from './Components/ListFriends';
import AddFriend from './Components/AddFriend';


class App extends Component {
  constructor() {
    super();
    this.state = {
    friends:[],
    };
   }

  render() {
    console.log(this.state);
    return (
      <div className="App">
      <div className='addBox'>Add Friends!<AddFriend state={this.state}/></div>
      <div className='cardDisplay'>
        <ListFriends friends={this.state.friends}/>
      </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.og , this.state);
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data});
        console.log('THIS IS YOUR OG STATE: ', this.state);
      })
      .catch(error => {
        console.log('EROOORRRRR');
      })
  }
}


export default App;
