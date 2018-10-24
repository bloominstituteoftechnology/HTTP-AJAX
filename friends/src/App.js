import React from 'react';
import './App.css';
import axios from 'axios';
import Friends from './components/friends'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response)
        this.setState({ friends: response.data })
      })

  }

  render() {
    return (
      <div >
        <Friends data={this.state.friends} />
      </div>
    );
  }
}

export default App;
