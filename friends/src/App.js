import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MyForm from './components/MyForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response)
        this.setState({ 
          data: response.data
        });
      })
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({
        name: event.target.value
    })
}

  click = event => {
    event.preventDefault();

    const myData = {
        name: this.state.name
    }
    console.log("yeahhh")
    axios
    .post('http://localhost:5000/friends', {myData})
    .then(response => {
      console.log(response)
    //   this.setState({ 
    //     data: response.data
    //   });
    })
    .catch(err => console.log(err));
}

  // updateData = event => {
  //   this.setState({
  //     data: 
  //   })
  // }

  render() {
    return (
      <div className="App">
        {this.state.data.map(item => (
        <li>{item.name}</li>
        ))}

        <MyForm 
          data={this.state.data}
          updateData={this.updateData}
          click={this.click}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
