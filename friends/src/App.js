import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGhost,
  faPencilAlt,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

import FriendsList from './FriendsList';
// import './App.css';

library.add(faGhost);
library.add(faPencilAlt);
library.add(faTrashAlt);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FriendsList />
        </header>
      </div>
    );
  }
}

export default App;
