import React from 'react';
import Axios from 'axios';
    
class FriendCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            friend: null,
        }
    }

    componentDidMount(){
      this.fetchFriend(this.props.match.params.id)
    }

    fetchFriend = id => {
        Axios
        .get(`http://localhost:5000/friends/${id}`)
        .then(response => {
            console.log("friendIdFetch:", response);
            this.setState({friend: response.data})
        })
    }

    render() { 
        return ( 
          <div></div>
        );
    }
}

export default FriendCard;
