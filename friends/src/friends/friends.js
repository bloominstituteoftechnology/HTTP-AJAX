import React, { Component } from 'react';
import axios from 'axios';


class Friends extends Component{
    constructor(props){
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount(){
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({friends: response.data}));
            })
            .catch(error => {
                console.error('Server Error', error)
            })
    }

    render(){
        return(
            <div className='friendsList'>
                {this.state.friends.map(friend => (
                    <div><span>{friend.name}</span><span>{friend.age}</span><span>{friend.email}</span></div>
                ))}
            </div>
        )
    }

}

export default Friends;