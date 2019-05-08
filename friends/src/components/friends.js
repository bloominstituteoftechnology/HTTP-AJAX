import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Friends extends React.Component {

    constructor() {
        super();
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
        .get('http://127.0.0.1:5000/friends')
        .then(res => {
            console.log(res);
            this.setState(() => ({ friends: res.data }))
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
          <div>
          <h1>friends placeholder</h1>
          </div>
        )};

};

export default Friends;
