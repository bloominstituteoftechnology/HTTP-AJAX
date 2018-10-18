import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import './App.css';

class App extends React.Component {
  // add constructor and CDM
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: null,
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

  // handleChange method - When user types into the box (*changes something*) then that thing they are changing gets updated on state with what they typed in (value). The [] are an ES6 feature that evaluates that property to a string so we can pop it into state as a string. Arrow notation is necessary to have access to the keyword - this
  handleChange = event => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewFriend = () => {
    const newFriendObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post('http://localhost:5000/friends', newFriendObj)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to the Friends App!</p>

          <FriendsList friends={this.state.friends} />

          <div>
            <form onSubmit={this.addNewFriend}>
              <input onChange={this.handleChange} name="name" placeholder="name" value={this.state.name} type="text" />
              <input onChange={this.handleChange} name="age" placeholder="age" value={this.state.age} type="number" />
              <input
                onChange={this.handleChange}
                name="email"
                placeholder="email"
                value={this.state.email}
                type="email"
              />
            </form>
            <button onClick={this.addNewFriend}>Add New Friend</button>
          </div>
        </header>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
