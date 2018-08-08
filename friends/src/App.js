import React, { Component } from 'react';
import FriendList from './component/Friend/FriendList';
import './App.css';
import axios from 'axios';

const url = 'http://localhost:5000/friends';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        friends: [],
        loading: true
    }
  }
  componentDidMount(){
      axios
          .get(url)
          .then(person => {
              this.setState({friends: person.data, loading: false})
          })
          .catch(err => console.log('Server Error', err));
  }
  render(){
      return(
          <div>
              <FriendList friends={this.state.friends} />
          </div>
      )
    }
}

export default App;
