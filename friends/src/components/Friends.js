import React, { Component } from 'react';
import axios from 'axios';

export default class Friend extends Component{
    constructor(props){
        super(props);
        this.state = {
            friends: [],
        }
    }

    render(){
        return (
            <div>
                HELLO!
                {this.state.friends.map(friend => {

                })}
            </div>
        )
    }
}