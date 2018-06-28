import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import FriendCard from './FriendCard';
import BrowserHistory from 'react-router-dom';

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friend: null,
            match: props.match,
            url: props.url,
        };
        this.fetchFriend();
    }

    componentDidMount() {
        const id = this.state.match.params.id;
        console.log(id);
        this.fetchFriend(id);
    }

    fetchFriend = id => {
        axios
            .get(this.state.url + `/${id}`)
            .then(response => {
                this.setState(() => ({friend: response.data}))
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        if(!this.state.friend) {
            return <div>No friend found</div>
        }
        return (
            <div>
                <div>
                    <FriendCard friend={this.state.friend} />
                </div>
            </div>
        );
    }
}

export default Friend;