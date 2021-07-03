import React, { Component } from 'react';
import reactDOm from 'react-dom';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import FriendList from './components/FriendList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends : []
    }
  }



componentDidMount () {
  axios
  .get('http://localhost:5000/friends')
  .then(({data}) => {
    this.setState({friends:data})
  .catch(console.log);
  });

}





  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1>
            Friends
            {this.state.doggos.map(friends => (
              // props.name, props.age, props.email
        ))}
          </h1>

        </header>
      </div>
    );
  }
}

export default App;
