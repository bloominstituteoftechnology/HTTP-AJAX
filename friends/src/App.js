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
                name: '',
                age: 0,
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

    addFriend = e => {
        e.preventDefault();

        let friends = this.state.friends,
            friend = this.state.friend;

        //optimistic UI
        friends.push(friend);
        this.setState({friends: friends});

        axios.post('http://localhost:5000/friends', friend)
            .then(function (response) {
                //if post failed revert back, this makes for a snappier UX
                const ind = response.data.findIndex(f => f.name === friend.name);
                if (ind === -1) {
                    friends.slice(ind, 1);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        const {friends} = this.state;

        return (
            <div className="App flex-column">
                <form onSubmit={e => this.addFriend(e)}>
                    <input placeholder="name" onChange={e => this.setState({friend: {...this.state.friend, ...{name: e.target.value}}})} />
                    <input placeholder="age" onChange={e => this.setState({friend: {...this.state.friend, ...{age: e.target.value}}})} />
                    <input placeholder="email" type="email" onChange={e => this.setState({friend: {...this.state.friend, ...{email: e.target.value}}})} />
                    <button type='submit'>ADD FRIEND</button>
                </form>

                {!!friends.length && friends.map(friend => (
                    <span>{friend.name}, {friend.age}, {friend.email}</span>
                ))}
            </div>
        );
    }
}

export default App;
