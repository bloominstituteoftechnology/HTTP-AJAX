import React from 'react';
import Friends from '../src/components/Friends'
import { Route } from 'react-router-dom'
import './App.css';

const App = props => {

    return (
      <div className="App">
        <Route exact path="/" component={Friends} />
      </div>
    );
  }

export default App;
