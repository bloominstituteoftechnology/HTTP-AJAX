import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor() {
      super();
      this.state = {
        friends : []
      }
  }

componentDidMount() {
    console.log("In CDM");
    axios
    .get('http://localhost:5000/friends')
    .then(response => this.setState({ friends : response.data }))
    .catch(error => console.log(error));
}

render() {
    console.log("Rendering", this.state.friends)
    return (
      <div className="App">
        <h1>HTTP....</h1>
        { this.state.friends.map(friend => {
              return (
                      <div>
                          <h1>Name  :  {friend.name}</h1>
                          <p> Age  : {friend.age}</p>
                          <p> Email : {friend.email}</p>
                      </div>
                     )
          })
        }
      </div>
    );
  } //render
} //App component

export default App;
