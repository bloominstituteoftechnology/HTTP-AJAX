import React, { Component } from 'react';
import axios from 'axios';

// import { FriendManager } from './AddFriend';

class FriendsList extends Component{
    constructor(){
    super();
    this.state = {
        friends: [],
        newName: '',
        newAge: '',
        newEmail: ''
    };
    
}

addFriend = (event) => {
    event.preventDefault();
    const friends = this.state.friends;
    friends.push(this.state.friends);
    this.setState({
       newName: '',
       newAge: '',
       newEmail: '',
       friends: friends
    });
}


// handleChange(event) {
//     this.setState({ [event.target.name] : event.target.value});
// }
handleNewName = (event) => {
    this.setState({
        newName: event.target.value
    });
}

handleNewAge = (event) => {
    this.setState({
        newAge: event.target.value
    })
}

handleNewEmail = (event) => {
    this.setState({
        newEmail: event.target.value
    })
}
// addAge = (event) => {
//     event.preventDefault();
//     const friends = this.state.friends;
//     friends.push(this.state.newAge);
//     this.setState({
//       newAge:'',
//       friends: friends
//     });
// }
// addEmail = (event) => {
//     event.preventDefault();
//     const friends = this.state.friends;
//     friends.push(this.state.newEmail);
//     this.setState({
//       newEmail:'',
//       friends: friends
//     });
// }


render() {
    return (
        <div>
            <div className="friend__header">Friends List</div>
            <ul className="friend__oldfriend">
                {this.state.friends.map((friend) => {
                    return (
                        <div>
                            <div>
                            <li key={friend.id} className="friend__list">
                                <div className="friend__name">{friend.name}</div>
                                <div className="friend__age">{friend.age}</div>
                                <div className="friend__email">{friend.email}</div>
                            </li>
                            </div>
                        </div>
                    )
                })}
            </ul>
            <form onSubmit={this.addFriend}>
                <input type="text" onChange={this.handleNewName} placeholder="-Enter A Name-" value={this.state.newName} />
                <input type="number" onChange={this.handleNewAge} placeholder="-Enter An Age-" value={this.state.newAge} />
                <input type="text" onChange={this.handleNewEmail} placeholder="-Enter An Email-" value={this.state.newEmail} />
                <input type='submit'/>
            </form>
        </div>
    )
 }



 componentDidMount() {
    //  const friends = null;
     axios.get('http://localhost:5000/friends')
     .then(response => {
         this.setState({ friends: response.data });
     })
     .catch(error => {
         console.log(`${error}`);
     })
 }
}

export { FriendsList };