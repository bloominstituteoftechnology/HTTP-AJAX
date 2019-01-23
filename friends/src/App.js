import React from 'react';
import axios from 'axios'

import Friends from './component/Friends/Friends'
import NewFriend from './component/Friends/NewFriend'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      friends: '',
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends') 
        .then(res => this.setState({friends: res.data}))
        .catch(err => console.log(err))
  }

  submitFriend = e => {
    e.preventDefault();
    this.setState({
      friends: [
        ...this.state.friends,
        {
          name: e.target.name.value,
          email: e.target.email.value,
          age: e.target.age.value
        }
      ]
    })
    axios.post('http://localhost:5000/friends', {
        name: e.target.name.value,
        email: e.target.email.value,
        age: e.target.age.value
    })
  }

  render() {
    return (
      <div className="App">
      <NewFriend  submitFriend={this.submitFriend}/>
      {this.state.friends ? <Friends friendsList={this.state.friends}/> : <h2>loading...</h2>}
      </div>
    );
  }
}

export default App;
