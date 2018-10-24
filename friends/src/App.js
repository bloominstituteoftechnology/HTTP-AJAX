import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: [],
            friend: {
                id: '',
                name: '',
                age: '',
                email: ''
            }
        }
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/friends/`)
            .then(response => {
                this.setState({friends: response.data});
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    createFriend = friend => {

        let friends = this.state.friends;

        //optimistic UI
        friends.push(friend);
        this.setState({friends: friends});

        axios.post('http://localhost:5000/friends', friend)
            .then(response => {
                //if post failed revert back, this makes for a snappier UX
                const ind = response.data.findIndex(f => f.name === friend.name);
                if (ind === -1) {
                    friends.slice(ind, 1);
                    this.setState({friends: friends});
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    updateFriend = friend => {
        axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
            .then(response => {
                this.setState({
                    friends: response.data, friend: {
                        name: '',
                        age: '',
                        email: ''
                    }
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    handleSubmit = e => {
        e.preventDefault();

        let friend = this.state.friend;

        if (friend.id) {
            this.updateFriend(friend);
        } else {
            this.createFriend(friend);
        }

    };

    deleteFriend = id => {
        axios.delete(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState({friends: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    };


    render() {
        const {friends, friend} = this.state;

        return (
            <div className="App flex-column">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input placeholder="name"
                           value={friend.name}
                           onChange={e => this.setState({friend: {...this.state.friend, ...{name: e.target.value}}})}/>
                    <input placeholder="age"
                           value={friend.age}
                           onChange={e => this.setState({friend: {...this.state.friend, ...{age: e.target.value}}})}/>
                    <input placeholder="email" type="email"
                           value={friend.email}
                           onChange={e => this.setState({friend: {...this.state.friend, ...{email: e.target.value}}})}/>
                    <button type='submit'>ADD FRIEND</button>
                </form>

                {!!friends.length && friends.map(friend => (
                    <span className="friend"
                          onClick={() => this.setState({
                              friend: {
                                  id: friend.id,
                                  name: friend.name,
                                  age: friend.age,
                                  email: friend.email
                              }
                          })}
                          onDoubleClick={() => this.deleteFriend(friend.id)}>{friend.name}, {friend.age}, {friend.email}</span>
                ))}
            </div>
        );
    }
}

export default App;
