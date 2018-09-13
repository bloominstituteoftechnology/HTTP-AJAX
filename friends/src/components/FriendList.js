import React, {Component} from 'react';
import axios from 'axios'
import Friend from './Friend'
import PropTypes from 'prop-types';

class FriendList extends Component{
    constructor(props){
        super(props);
        this.state = {
            friends: [],
        };
    }

    componentDidMount(){
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState({friends: response.data})
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                This should be a FriendList.
                {this.state.friends.map(friend=><Friend friend={friend} key={friend.id}/>)}
            </div>
        );
    }
}

FriendList.propTypes = {
    friend: PropTypes.object,
};

export default FriendList;