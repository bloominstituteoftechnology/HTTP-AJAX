import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends: []
        }
    }
    componentDidMount() {
        axios
        .get('http://localhost:5000/friends')
        .then(response => this.setState({ friends: response.data}))
        .catch(error => console.log("ERRORRRRR", error))
    }

    render() {
        return (
            this.state.friends.map(friend => {
                return <p>{friend.name}</p>
            })
        )
    }

}


export default FriendsList;