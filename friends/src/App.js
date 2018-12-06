import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FriendList from './component/FriendList';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendList />
      </div>
    )
  }
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//
//     }
//   }
//   componentDidMount() {
//     axios
//       .get('https://localhost:5000/')
//       .then(response => console.log(response))
//       .catch(err => console.log(err));
//   }
//   render() {
//     return (
//       <div className="App">
//         <Route exact path="/" />
//       </div>
//     );
//   }
// }

export default App;
