import React, { Component } from 'react';
import axios from 'axios';

export default class Friends extends Component {
    constructor(){
        super();
        this.state = {
            friends: []
        }
    }
    componentDidMount() {
        axios
          .get('http://localhost:5000/friends')
          .then(response => {
            this.setState(() => ({ friends: response.data }));
          })
          .catch(error => {
            console.error('Server Error', error);
          });
    }

    render(){
        return(
            <div>
                <h1>Muh Frans!</h1>
                {this.state.friends.map(data => 
                <div>
                    <h2>{data.name}</h2>
                    <p><span className="fr-sub-hdr">Age: </span><span>{data.age}</span></p>
                    <p><span className="fr-sub-hdr">Email: </span><span>{data.email}</span></p>
                </div>
                )}
            </div>
        )
    }
}