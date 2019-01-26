import React from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import FriendForm from './FriendForm';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
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
    editFriend = friend => {
        const editFriend = {
            name: friend.name,
            age: friend.age,
            email: friend.email
        }
        axios
            .put(`http://localhost:5000/friends/${friend.id}`, editFriend)
            .then(response => {
                this.setState({friends: response.data})
            })
            .catch(err => {
                console.log(err);
            })
    }
    deleteFriend = id => {
        console.log(id);
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(response => {
                console.log(response);
                console.log(`Your friend has been excommunicated`);
                this.setState({friends: response.data})
            })
            .catch(err => {
                console.log(err);
            })
    };

   
    render() {

        return (
            <div className="friends-list">
                <FriendForm addFriend={this.addFriend}/> 

                {this.state.friends.map(friend => (
                    <div key={friend.id}>
                        <FriendDetails friend={friend} editFriend={this.editFriend} />
                        <Link to={`friends/edit/${friend.id}`}>
                            <button><FaEdit/></button>
                        </Link>
                        <button onClick={() => this.deleteFriend(friend.id)}><FaTrashAlt /></button>  
                    </div>
                ))}
            </div>
        );
    }
    
}

function FriendDetails({ friend }) {
    const { name, age, email } = friend;
    return (
        <div className="friend-card">
            <FriendCard name={name} age={age} email={email} />
        </div>
    )
}
