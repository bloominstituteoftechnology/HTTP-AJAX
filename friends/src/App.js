import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ReactDOM from "react-dom";

class App extends Component {


    constructor() {
        super();
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                console.log(response);
                this.setState({ friends: response.data })
            })
            .catch( err => console.log("Whoopsie you got an error:", err));
    }
    render() {
        return (
            <div className="App">
                <h1>Shayaan Works on HTTP-AJAX</h1>
            </div>
        );
    }
}

export default App;
