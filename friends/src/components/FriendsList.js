import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import { Link } from 'react-router-dom';

export default class FriendList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: []
        }
    }
    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState({friends: response.data})
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }
    render() {
        console.log(this.state.friends)
        return (
            <div className="friends-list">
                <ul>
                    {this.state.friends.map(friend => (
                        <Link key={friend.id} to={'/friends'}>
                            <Friend friend={friend} name={friend.name} email={friend.email} age={friend.age}/>
                        </Link>
                    ))}
                </ul>
            </div>
        )
    }
    
}
