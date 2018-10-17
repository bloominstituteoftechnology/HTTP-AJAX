import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FriendsList from './components/FriendsList';

class App extends React.Component {
  // add constructor and CDM
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newFriend: {
        age: '',
        name: '',
        email: ''
      }
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the Friends App!
          </p>
          <FriendsList friends = {this.state.friends}/>
        </header>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


