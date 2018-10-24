import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
    //     this.setState({ items: data });
  }

  // getItemById = id => {
  //   axios
  //     .get(`http://localhost:3333/itemById/${id}`)
  //     .then(response => this.setState({ activeItem: response.data }));
  // };



  render() {
    
    return (
      <div className="App">
        {this.state.friends.map(friend => {
          return(

            <div>
              <div>{friend.id}</div>
              <div>{friend.name}</div>
              <div>{friend.age}</div>
              <div>{friend.email}</div>              
            </div>

          );
        })}
      </div>
    );
  }
}

export default App;
