import React, { Component } from 'react';
import axios from 'axios';

class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: null
        }
    }
    componentDidMount() {
    axios
      .get('http://localhost:5000/api/HTTP/AJAX')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

    render() {
        console.log(this.friends);
        return (

        )
    }
}

export default Friend;