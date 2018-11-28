import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Friend from './components/Friend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({friends: res.data});
      })
      .catch(err => console.log('err', err));
  }

  render() {
    return (
      <div className="App">
        <h1>My {this.state.friends.length} Friends</h1>
        {this.state.friends.map(f => (
          <Friend key={f.id} friend={f} />
        ))}
      </div>
    );
  }
}

export default App;
