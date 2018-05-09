import React, {Component} from "react";
import { defaultCipherList } from "constants";
import axios from 'axios';

class Friends extends Component {
    state = {
        friends: [],
        name: '',
        age: '',
        email: ''
    }

    componentDidMount() {
        axios.get("http://localhost:5000/friends")
            .then(response => {
                this.setState({friends: response.data})
            })
            .catch(err => {
                console.log(err)
            }) 
    }

    handleTextInput = event => {
        this.setState({
          [event.target.name]: event.target.value,
          [event.target.age]: event.target.value,
          [event.target.email]: event.target.value
        });
    }

    render() {
        console.log(this.state.friends)
        return <div>
            <div>
              {this.state.friends.map(friend => {
                return <div key={friend.id}>{friend.name}</div>;
              })}
            </div>
            <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleTextInput}/>
            <input type="text" placeholder="Age" name="age" value={this.state.age} onChange={this.handleTextInput}/>
            <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleTextInput}/>
            <button onClick={this.saveFriendsData}>Save Friend</button>
          </div>;
    }

}


export default Friends;