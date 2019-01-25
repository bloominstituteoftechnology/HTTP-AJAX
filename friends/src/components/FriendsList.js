import React from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import FriendForm from './FriendForm';
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
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }
    addFriend = friend => {

        const newFriend = {
            name: friend.name,
            age: friend.age,
            email: friend.email
        }
        axios
            .post('http://localhost:5000/friends', newFriend)
            .then(response => {
                this.setState({
                    friends: response.data
                })
            })
            .catch(err =>{
                console.log(err);
            })
    }

    render() {

        return (
            <div className="friends-list">
                <FriendForm addFriend={this.addFriend}/> 

                {this.state.friends.map(friend => (
                    <Link key={friend.id} to={`friends/${friend.id}`}>
                        <FriendDetails friend={friend} />
                    </Link>
                ))}
            </div>
        );
    }
    
}

function FriendDetails({ friend }) {
    const { name, age, email } = friend;
    return (
        <div className="friend-card">
            <FriendCard name={name} age={age} email={email}/>
        </div>
    )
}
