import React from 'react';
import axios from 'axios';
import FriendCard from './friendCard';

class FriendList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/friends')
            .then(response => {
                this.setState({
                    friends: response.data
                })
            })
            .catch(err => {
                console.log("Error: ", err);
            })
        
    }

    render(){
        return <div>
            <h3>FriendList</h3>
            {
                this.state.friends.length > 0 ? this.state.friends.map( friend => (
                    <FriendCard friend={friend} />
                ))
                : 
                <h1>Loading</h1>
            }
        </div>
    }


}

export default FriendList;