import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import FrdItm from './components/FrdItm';
import FrdLst from './components/FrdLst';
import FrdFrm from './components/FrdFrm';


class App extends Component {
  constructor() {
    super();
  }

  render() {
      return (
        <div className="App">
        <Route exact path="/" component={FrdLst} />
        <Route path="/frd/:id" render={props => <FrdItm {...props} />} />
        <Route path="/nwfrd" render={props => <FrdFrm {...props} />} />
        </div>
      );
  }
}

export default App;
