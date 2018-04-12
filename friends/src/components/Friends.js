import React, { Component } from 'react';
// import '.Friends.css';
import axios from 'axios';

export default class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
        };
    }

    // componentDidMount() {
    //     axios
    //         .get(`http://localhost:5000/friends/`)
    //         .then(response => {
    //             // console.log(response.data);
    //             this.setState({ friends: response.data });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    // handleTextInput = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };

    // saveNoteData = () => {
    //     const note = { title: this.state.title, textBody: this.state.textBody };
    //     axios
    //         .post(`http://localhost:5000/friends/`, note)
    //         .then(savedNote => {
    //             console.log(savedNote);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    //     this.setState({ title: '', textBody: '' });
    // };

    // render() {
    //     return (
    //         <div className="Friends">
    //         <ul className="FriendsList">
    //         {this.state.friends.map(friend => {
    //             return(
    //             <li key={friend.id} className="friend">
    //                 <div className="friend-name">{friend.name} </div>
    //                 <div className="friend-age">{friend.age} </div>
    //                 <div className="friend-email">{friend.email} </div>
    //             </li>
    //             );
    //         })}
    //         </ul>
    //         </div>
                // {/* <input
                //     type="text"
                //     onChange={this.handleTextInpurt}
                //     placeholder="textBody"
                //     name="textBody"
                //     value={this.state.textBody}
                // />
                // <button onClick={this.saveNoteData}>Save Note</button> */}
    //     );
    // }
}

// export default Friends;