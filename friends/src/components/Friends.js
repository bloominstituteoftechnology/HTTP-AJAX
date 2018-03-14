import React, { Component } from 'react';
import axios from 'axios';
import './Friend.css'
// import { FriendManager } from './AddFriend';

class FriendsList extends Component{
    constructor(){
    super();
    this.state = {
        friends: [],
        // newFriend: {
            key: this.id,
            newName: '',
            newAge: '',
            newEmail: '',
            selected: null
        // }
    };
    
}

addFriend = (event) => {
    event.preventDefault();
    const friends = this.state.friends;
    axios
    .post("http://localhost:5000/friends", {name: this.state.newName, age: this.state.newAge, email: this.state.newEmail})
    .then(response => {{friends.push({name: this.state.newName, age: this.state.newAge, email: this.state.newEmail});
    console.log(response),
    this.setState({
       key: this.id,
       newName: '',
       newAge: '',
       newEmail: '',
       friends: friends
    });
    // axios.get('http://localhost:5000/friends')
    // .post(reponse => {this.setState})
    
        }
        axios.get('http://localhost:5000/friends')
     .then(response => {
         this.setState({ friends: response.data });
     })    
    });
}

deleteFriend = (id) => {
    console.log(id);
    axios
    .delete(`http://localhost:5000/friends/${id}`).then(response => {
    
    axios.get('http://localhost:5000/friends')
     .then(response => {
         this.setState({ friends: response.data });
     })
        }) 
 
        

    // .then(response => {
    // console.log("delete")
    // this.setState({
    //     selected: params.id 
    // });
    // {friends.splice(index, 1)}
    // })
}

editFriend = (id) => {
    axios.get(`localhost:5000/friends/${id}`).then(response => {{
    console.log("edit"),
    this.setState({
       name: '',
       age: '',
       email: '',
    });
    // axios.get('http://localhost:5000/friends')
    // .post(reponse => {this.setState})
    
        }
    //     axios.get('http://localhost:5000/friends')
    //  .then(response => {
    //      this.setState({ friends: response.data });
    //  })    
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
        newAge: Number(event.target.value)
    })
}

handleNewEmail = (event) => {
    this.setState({
        newEmail: event.target.value
    })
}

// handleDelete = (event) => {

// }
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
        <div class="friend__div">
            <div className="friend__header">Friends List</div>
            <ul className="friend__oldfriend">
                {this.state.friends.map((friend, i) => {
                    return (
                        <div>
                            <div>
                            <li key={friend.id} className="friend__list">
                                <div className="friend__name">{friend.name}</div>
                                <div className="friend__age">{friend.age}</div>
                                <div className="friend__email">{friend.email}</div>
                                <div onClick={() => {this.deleteFriend(friend.id)}} className="friend__delete">X</div>
                            </li>
                            </div>
              
                        </div>
                    )
                })}
            </ul>
            <form className="friend__form" onSubmit={this.addFriend} key={this.state.friends.id}>
                <input className="friend__input" type="text" onChange={this.handleNewName} placeholder="-Enter A Name-" value={this.state.newName} />
                <input className="friend__input" type="number" onChange={this.handleNewAge} placeholder="-Enter An Age-" value={this.state.newAge} />
                <input className="friend__input" type="text" onChange={this.handleNewEmail} placeholder="-Enter An Email-" value={this.state.newEmail} />
                <input className="friend__input" type='submit'/>
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
    //  .post(response => {
    //      this.setState({ })
    //  }
     .catch(error => {
         console.log(`${error}`);
     })
 }
}

export { FriendsList };