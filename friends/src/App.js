import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
       friends:[]
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
         .then(response => {
             console.log(response.data);
             this.setState({
                 friends:response.data
             });
         })
         .catch( error => {
             console.log("Error:", error);
         })
  }

  render() {
    return (
      <div className="App">
         <Form className="form" friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
