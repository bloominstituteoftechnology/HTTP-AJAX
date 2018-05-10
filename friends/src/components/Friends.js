import React, { Component } from 'react';
import axios from 'axios';
import './Friends.css';


export default class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axios
            .get('http://localhost:5000/friends/')
            .then(response => {
               this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    deleteFriend(friendID) {
        // alert(friendID);
        axios.delete(`http://localhost:5000/friends/${friendID}`)
            .then(response => {
                this.getFriends();
            })
            .catch(err => {
                console.log(err); 
            })
    }

    render() {
        // console.log(this.state.friends)
        return (
            <div>
                {this.state.friends.map(friend => (
                    // <FriendDetails key={friend.id} friend={friend} />
                    
                    <div className="container" key={friend.id} friend={friend}>
                        <div className="friend-card">
                            <h2>{ friend.name }</h2>
                            <h3>{ friend.age }</h3>
                            <h3>{ friend.email }</h3>
                            <button onClick={() => this.deleteFriend(friend.id) }>
                                Delete Friend
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}


// function FriendDetails({ friend }) {
//     const { name, age, email, id } = friend;
//     console.log(id)

//     function deleteFriend(friendID) {
//         alert(friendID);
//         axios.delete(`http://localhost:5000/friends/${friendID}`)
//         // .then(response => {
//         //     axios
//         //     .get('http://localhost:5000/friends/')
//         //     .then(response => {
//         //        friend.setState(() => ({ friends: response.data }));
//         //     })
//         //     .catch(error => {
//         //         console.error('Server Error', error);
//         //     });
//         // })
//         // .catch(err => {
//         //     console.log(err); 
//         // })
//     }

   

//     return(
//         <div className="container">
//             <div className="friend-card">
//                 <h2>{ name }</h2>
//                 <h3>{ age }</h3>
//                 <h3>{ email }</h3>
//                 <button onClick={() => deleteFriend(id) }>
//                     Delete Friend
//                 </button>
//             </div>
//         </div>
//     )
// }