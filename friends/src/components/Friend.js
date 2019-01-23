import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';

export default class Friend extends Component {
    constructor(props){
        super(props);
        this.state = {
            friend: null
        };
    }
    
    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchFriend(id)
    }
    
    fetchFriend = id => {
        axios
        .get(`http://localhost:5000/friends/${id}`)
        .then(response => {
            this.setState( () => ({ friend: response.data }));
            // console.log(this.state.friend)
        })
        
        .catch(error => {
            console.error(error);
        })
    }
    
    
    render(){
        // console.log(this.props)
        return (
            <div className="App">
                    <FriendCard friend={this.state.friend}/>
            </div>
        )
    }
}
