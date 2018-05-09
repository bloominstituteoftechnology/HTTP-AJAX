import React, { Component } from 'react';
import Friends from './component/Friends';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }
  componentDidMount = () => {
    axios.get("http://localhost:5000/friends")
      .then(res => {
        const friends = res.data;
        this.setState({ friends });
      })
      .catch(err => console.log(err)) // to do: notify user with error message
  }
  render() {
    const { friends }= this.state
    console.log(friends)
    return (
      <div>
        <Friends friends={friends}/>
      </div>
    );
  }
}

export default App;
