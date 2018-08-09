import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard'


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

    

    handleDelete = id => 
        axios
            .delete('http://localhost:5000/friends',{id})
            .then(res => {
                console.log(res);
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            })

    render(){
        return(
            <div>                
               
                <h1>Muh Frans!</h1>
                <FriendCard friends = {this.state.friends} />                  
            </div>
        )
    }
}