import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    const getList = 'http://localhost:5000/friends';

    axios.get(getList).then((response) => {
      this.setState(() => ({ friends: response.data }))
    }).catch((error) =>  {
      console.log('ERROR', error);
    })
    
  }
  
  render() {
    return <div>
        <div className="friend-title">Lambda Friends</div>
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>;
          })}
        </ul>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Age:
            <input type="text" name="age" />
          </label>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>;
  }
}

export default App;
