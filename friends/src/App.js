import React, { Component } from 'react';
import Friends from './Components/Friends';
const axios = require('axios');
class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
    }
  }
  componentDidMount() {
    console.log('component did mount!')
    axios
      .get('http://localhost:5000/friends')
        .then((response) => {
          console.log('Axios response received', response.data)
          this.setState({ friendsData: response.data })

        })
        .catch((err) => {
          console.log('WARNING: error!', err)
        })
  }

  render() {
    console.log('Rendering')
    console.log('Updated state:', this.state.data)
    return (
      <div className="App">
        <Friends friendsData={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
