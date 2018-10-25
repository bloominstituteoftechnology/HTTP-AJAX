import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then( response => this.setState({friends: response.data}))
      .catch( err => console.log(err))
    // console.log(this.state.friends);
  }

  

  render() {
    return (
      <div className="App">
      <form>
        <h3>Add New friend:</h3>
        <input placeholder='name'></input>
        <input placeholder='age'></input>
        <input placeholder='email'></input>
        <button>Submit</button>
      </form>
        {this.state.friends.map( (eachFriend) => {
          return (
            <div key={eachFriend.id} className='friend-box'>
              <div>Name: {eachFriend.name}</div>
              <div>Age: {eachFriend.age}</div>
              <div>Email: {eachFriend.email}</div>
              <form>
                <p>Update friend:</p>
                <input placeholder='name'></input>
                <input placeholder='age'></input>
                <input placeholder='email'></input>
                <button>Submit</button>
              </form>
              <button>DELETE FRIEND</button>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
