import React, { Component } from 'react';
import axios from 'axios';


class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            name: '',
            age: '',
            email: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState({ friends: response.data });
            })
            .catch(error => {
                console.log('error');
            })
    }

    getNextFriend = () => {
        let list = [...this.state.friends];
        const nextFriend = list.pop().id + 2;
        return nextFriend;
    }

    handleSubmit = () => {
        const nextFriend = this.getNextFriend();
        const newFriend = {id: nextFriend, name: this.state.name, age: this.state.age, email: this.state.email};
        let newFriendsList = [...this.state.friends, newFriend];

        this.setState({ friends: newFriendsList});
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <ul className='friend-grid'>
                    {this.state.friends.map(friend => {
                        return (
                            <li key={friend.id} className='friend'>
                                <div className='friend-name'>{friend.name}</div>
                                <div className='friend-age'>{friend.age}</div>
                                <div className='friend-email'>{friend.email}</div>
                            </li>
                        )
                    })}

                    <li key="liKey" classname='friend'>
                        <form>
                            <div className='friend-name'>Name: 
                                <input value={this.state.name} onChange={this.handleChange} name='name' type='text' placeholder='name' />
                            </div>

                            <div className='friend-age'>Age: 
                                <input value={this.state.age} onChange={this.handleChange} name='age' type='text' placeholder='age' />
                            </div>

                            <div className='friend-email'>Email: 
                                <input value={this.state.email} onChange={this.handleChange} name='email' type='text' placeholder='email' />
                            </div>

                            <input onClick={this.handleSubmit} type='button' value='Save' />
                        </form>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Friends;