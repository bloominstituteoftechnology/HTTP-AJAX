import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    friends: [],
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friends: res.data,
        });
      })
      .catch(err => {
        console.log('ERR');
      });
  }

  render() { 
    return (
      <div>
        Hello From App
      </div>
    );
  }
}

export default App;