import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friend: null,
            match: props.match,
            url: props.url,
        };
    }

    componentDidMount() {
        const id = this.state.match.params.id;
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
                    {this.state.friend.name}<br />
                    {this.state.friend.age}<br />
                    {this.state.friend.email}<br />
                    <Link to="/friends" className="home-button">Home</Link>
                </div>
            </div>
        );
    }
}

export default Friend;