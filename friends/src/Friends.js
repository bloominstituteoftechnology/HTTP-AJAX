import React, {Component} from "react";
import { defaultCipherList } from "constants";
import axios from 'axios';

class Friends extends Component {
    state = {
        friends: []
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

    render() {
        console.log(this.state.friends)
        return (
            // <div></div>
            <div>
                {this.state.friends.map(friend => {
                    return (
                        <div key={friend.id}>{friend.name}</div>
                    )
                })}
            </div>
            
        )
    }

}


export default Friends;