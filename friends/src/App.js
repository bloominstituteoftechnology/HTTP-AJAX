import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DisplayFriends from './Components/Friends';
import axios from 'axios';

const urlLinks = {
  home: '/'
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='App'>
        <Route
          exact
          path={urlLinks.home}
          render={() => <DisplayFriends friends={this.state.friends} />}
        />
      </div>
    );
  }
}

export default App;
