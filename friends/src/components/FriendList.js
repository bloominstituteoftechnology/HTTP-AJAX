import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend'
import AddFriend from './AddFriend.js'
import FriendCard from './FriendCard';
import { Link } from 'react-router-dom';


class FriendList extends Component {
    constructor(){
        super()
        this.state ={
            friends: []
        }
    }

    componentDidMount() {
        axios
          .get("http://localhost:5000/friends")
          .then(response => {
                // console.log("response:", response);
                this.setState({friends: response.data})
          })
          .catch( err => console.log("ERROR!!!"))
      }
    
    formSubmit = (friend) => {
        let newFriend = this.state.friends;
        friend.id = this.state.friends.length + 1;
        // console.log(newFriend)
        // console.log(friend)
        // console.log(this.state.friends)
        newFriend.push(friend)
        this.setState({ friend:newFriend })
    }


    render(){
        return (
            <div className="App">

                {this.state.friends.map (friend => {
                    return(
                        <div>
                            <Link to={`/friends/${friend.id}`}>

                                <FriendCard
                                    key = {friend.id}
                                    id = {friend.id}
                                    name = {friend.name}
                                    age = {friend.age}
                                    email = {friend.email}/>
                        
                            </Link>
                        </div>
                    ) 
                })}
            
            <AddFriend handler ={this.formSubmit}/>

            </div>
        )
    }
}

export default FriendList