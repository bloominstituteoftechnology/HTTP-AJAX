import React, { Component } from 'react';
import axios from 'axios';

export default class Friends extends Component {
    constructor(props) {
      super(props);
      this.state = {
        friends: null
      };
    }

    componentDidMount() {
        axios
        .get(`http://localhost:5000/friends`)
        .then(response => {
            this.setState({ friends: response.data });
        })
        .catch(err => {
            console.log(err);
        });
    }

    saveFriend = () => {
        
    }
}