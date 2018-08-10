import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {

    render() {
        return(
            <div>
            <h3>HomePage</h3>
            <Link to={`/friends`}>To the List!</Link>
            </div>
        )
    }
};