import React from 'react';
import axios from 'axios';

import './Friends.css'

class Friends extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            name: '',
            age: null,
            email: '',
        }
    }

    componentDidMount() {
        axios
          .get('http://localhost:5000/friends')
          .then(response => this.setState({ friends: response.data }))
          .catch(error => console.log(error));
        //     this.setState({ items: data });
      }

    changeHandler = event => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
    }
    
    addNewFriend = event => {
        event.preventDefault();
            let newFriend = {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email,
            }

        axios.post('http://localhost:5000/friends', newFriend)
        .then(response => {
            this.setState({
            friends: response.data,
            name: '',
            })
        })
        .catch(error => console.log(error))
    }

    deleteItem = (event, id) => {
        event.preventDefault();
        axios
          .delete(`http://localhost:5000/friends/${id}`)
          .then(response => {
            this.setState({ friends: response.data });
          })
          .catch(error => console.log(error));
      };

    render() {
        return (
            <div className="friends">
                {this.state.friends.map(friend => (
                    <div className="friendCard" key={friend.name}>
                        <h2>Name: {friend.name}</h2>
                        <h4>Age: {friend.age}</h4>
                        <h4>Email: {friend.email}</h4>
                        <button onClick={event => this.deleteItem(event, friend.id)}>Delete Friend</button>
                    </div>  
                ))}
                <form className="friendForm" onSubmit={this.addNewFriend}>
                    <input required name='name' type="text" placeholder="Your Name" value={this.value} onChange={this.changeHandler}/>
                    <input required name='age' type="number" placeholder="Your Age" value={this.value} onChange={this.changeHandler}/>
                    <input required name='email' type="email" placeholder="Your Email" value={this.value} onChange={this.changeHandler}/>
                    <input className="btn" type="submit" />
                </form>
            </div>
        );
    }
}

export default Friends;