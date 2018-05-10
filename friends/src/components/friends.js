import React, { Component } from 'react';
import Axios from 'axios';

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friend: null
    }
  }
  componentDidMount() {
    
    fetch('https://swapi.co/api/people/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ friends: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div>
        <h1>London</h1>
      </div>
    )
  }
}