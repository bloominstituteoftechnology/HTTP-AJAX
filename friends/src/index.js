import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  // add constructor and CDM
  constructor() {
    super();
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
    //     this.setState({ items: data });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the Friends App!
          </p>
        </header>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


