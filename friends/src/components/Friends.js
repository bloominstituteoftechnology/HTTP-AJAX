import React from 'react'
import { Browser as Router, Link, NavLink, Route, Component } from 'react-router-dom'
import axios from 'axios'


class Friends extends React.Component {
    constructor(){
        super();
        this.state = {
            friends: []

        }
    }

    componentDidMount(){
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() =>({friends: response.data}))
            })
            .catch(error => {
                console.error('Server Error', error)
            })

    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Friends ;