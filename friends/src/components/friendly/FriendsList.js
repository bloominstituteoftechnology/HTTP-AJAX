import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            myFriends:[]
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/friends')
            .then(response => {
            this.setState(() => ({ myFriends: response.data }));
            })
            .catch(error => {
            console.error('Server Error', error);
        });
    }
    
    render() {
        return (
            <div></div>
        );
    }
}

export default FriendsList;