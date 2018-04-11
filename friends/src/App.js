import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Friends from './components/Friends';
import FriendCard from './components/FriendCard';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = friend => {
    const savedList = this.state.savedList;
    savedList.push(friend);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <Route exact path="/" component={Friends} />
        <Route path="/components/:id" component={FriendCard} />
      </div>
    );
  }
}
