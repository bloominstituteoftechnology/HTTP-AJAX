import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: null
        };
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        this.fetchFriend(id);
        console.log('Friend ' + id);
    }

    fetchFriend = id => {
        axios.get(`http://localhost:5000/friends`)
        .then(response => {
            this.setState(() => ({friend: response.data[id-1]}));
            console.log(this.state);
        })
        .catch(error => {
            console.error(error);
        });
    };

    render() {
        if (!this.state.friend) {
            return <div>Loading friend information...</div>;
          }
        const { name, age, email } = this.state.friend;
        return (
            <div>
                <Link to={`/friends/${this.state.friend.id}`} className='friend-card'>
                    <h2>{name}</h2>
                </Link>
                <p className='age'>
                    Age: <em>{age}</em>
                </p>
                <p className='age'>
                    Email: <a href={`mailto:${email}`}>{email}</a>
                </p>
              </div>
        )
    }

}