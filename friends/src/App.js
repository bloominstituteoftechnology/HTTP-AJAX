import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Friends from './Components/Friends';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [{}],
      newFriend: [],
    }
  }


  addToList(e) {
    this.setState({
      newFriend: e.target.vaule
    })
  }

  submitToList (e) {
    e.preventDefault();
    this.setState({
      friends: [...this.state.friends, newFriend]
    })
  }






    componentDidMount() {
      Axios
        .get("//localhost:5000/friends")
        .then(Response => {
          console.log(Response);
          this.setState({ friends: Response.data});
        })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Friends friends={this.state.friends}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
