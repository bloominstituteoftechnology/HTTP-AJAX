import React, {Component} from 'react';

import axios from 'axios';
import './Friends.css';
import NewFriendForm from './NewFriendForm.js';


class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            newFriend: {
                newFriendName: '',
                newFriendAge: '',
                newFriendEmail: '',
            }
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState({ friends: response.data });
                
            })
            .catch(err => console.log(err));
    }

    handleNewFriendInput = event => {
        this.setState({ 
            newFriend: {
                ...this.state.newFriend,
                [event.target.name] : event.target.value 
            }
        });
    }

    addNewFriend = event => {
        event.preventDefault();
        console.log(this.state.newFriend);
        axios
            .post('http://localhost:5000/friends', this.state.newFriend )
            .then(response => {
                // const friends = [...this.state.friends];
                // friends.push(this.state.newFriend);
                console.log(response.data);
                this.setState({ 
                    friends: response.data, 
                    newFriend: {
                        ...this.state.newFriend,
                        newFriendName: '', 
                        newFriendAge: '', 
                        newFriendEmail: '',
                    }
                });
            })
            .catch(err => console.log(err));
           
        
    }

    render() {
        return(
           <div className='friends-list'>
               {this.state.friends.map(friend => (
                <div className='friend' key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
               ))}
               <NewFriendForm 
                newFriendName={this.state.newFriendName}
                newFriendAge={this.state.newFriendAge}
                newFriendEmail={this.state.newFriendEmail}
                handleNewFriendInput={this.handleNewFriendInput}
                addNewFriend={this.addNewFriend}
                />
           </div>
            
        );
    }

   
}

export default FriendsList;