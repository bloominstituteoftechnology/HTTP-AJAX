import axios from 'axios';
import React from 'react';

export default class FriendList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            name: '',
            age: '',
            email: ''
        }
    }

    addNewFriend = e => {
        e.preventDefault();
        if (this.state.name && this.state.age && this.state.email) {
            const newFriend = {
                id: this.state.friends.length + 1,
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
            }
            this.setState({ friends: [...this.state.friends, newFriend]})
        }
    }
    changeHandler = e => this.setState({[e.target.name]: e.target.value});


    componentDidMount() {
        axios.get('http://localhost:5000/friends')
            .then(response => { this.setState({ friends: response.data }) })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Friends</h1>
                {this.state.friends.map(x => {
                    return (
                        <div key={x.id}>
                            <h2>{x.name}</h2>
                            <h4>Age: {x.age}</h4>
                            <h4>Email: {x.email}</h4>
                        </div>
                        
                    )
                })}
                <form>
                    <input placeholder="name" onChange={this.changeHandler} name="name" value={this.state.name}></input>
                    <input placeholder="age" onChange={this.changeHandler} name="age" value={this.state.age}></input>
                    <input placeholder="email" type="email" onChange={this.changeHandler} name="email"  value={this.state.email}></input>
                    <button onClick={this.addNewFriend}>Add Me</button>
                </form>
            </div>
        );
    }
}