// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// import { Number } from 'core-js/library/web/timers';
// import Friend from './Friend';

// class FriendList extends Component {
//     constructor() {
//         super();
//         this.state = {
//             friends: [],
//             newFriend: {
//                 name: '',
//                 age: Number,
//                 email: '',
//             }
//         }
//     }


//     componentDidMount() {
//         axios.get('http://localhost:5000/friends')
//             .then(response => this.setState({ friends: response.data }))
//             .catch(error => {
//                 console.error('Server Error', error)
//             });
//     }

//     handleNameChange = event => {
//         const name = event.target.value;
//         this.setState({
//             newFriend: {
//                 name: name,
//                 age: this.state.newFriend.age,
//                 email: this.state.newFriend.email
//             }
//         })
//     }

//     handleAgeChange = event => {
//         const age = event.target.value;
//         this.setState({
//             newFriend: {
//                 name: this.state.newFriend.name,
//                 age: age,
//                 email: this.state.newFriend.email
//             }
//         })
//     }

//     handleEmailChange = event => {
//         const email = event.target.value;
//         this.setState({
//             newFriend: {
//                 name: this.state.newFriend.name,
//                 age: this.state.newFriend.age,
//                 email: email
//             }
//         })
//     }

//     handleSubmit = event => {
//         console.log(this.state);
//         event.preventDefault()
//         axios.post('http://localhost:5000/friends', {
//             name: this.state.newFriend.name,
//             age: this.state.newFriend.age,
//             email: this.state.newFriend.email,
//         })
//             .then((response) => { })
//         this.setState({
//             newFriend: {
//                 name: '',
//                 age: '',
//                 email: ''
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <div className="friend-title">Lambda Friends</div>
//                 <ul className="friend-grid">
//                     {this.state.friends.map(friend => {
//                         return (
//                             <Friend friend={friend} key={friend.id} newFriend={this.props.newFriend} />
//                         );
//                     })}
//                 </ul>
//                 <div>
//                     <form id="newFriendForm" onSubmit={this.handleSubmit}>
//                         <input className="newFriend-name" placeholder="Name" value={this.state.newFriend.name} onChange={this.handleNameChange} />
//                         <input placeholder="Age" value={this.state.newFriend.age} onChange={this.handleAgeChange} />
//                         <input placeholder="E-mail" value={this.state.newFriend.email} onChange={this.handleEmailChange} />
//                     </form>
//                     <button type='submit' form='newFriendForm'>Submit</button>
//                 </div>
//             </div>

//         );
//     }
// }



// export default FriendList;



// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// import { Number } from 'core-js/library/web/timers';
// import Friend from './Friend';

// class FriendList extends Component {
//     constructor() {
//         super();
//         this.state = {
//             friends: []
//         }
//     }


//     componentDidMount() {
//         axios.get('http://localhost:5000/friends')
//             .then(response => this.setState({ friends: response.data }))
//             .catch(error => {
//                 console.error('Server Error', error)
//             });
//     }

//     render() {
//         return (
//             <div>
//                 <div className="friend-title">Lambda Friends</div>
//                 <ul className="friend-grid">
//                     {this.state.friends.map(friend => {
//                         return (
//                             <Friend friend={friend} key={friend.id} />
//                         );
//                     })}
//                 </ul>
//             </div>
//         );
//     }
// }



// export default FriendList;




////one i liek


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// import { Number } from 'core-js/library/web/timers';
// import Friend from './Friend';
// import NewFriend from './NewFriend';
// import { Link } from 'react-router-dom';

// class FriendList extends Component {
//     constructor() {
//         super();
//         this.state = {
//             friends: []
//         }
//     }


//     componentDidMount() {
//         axios.get('http://localhost:5000/friends')
//             .then(response => this.setState({ friends: response.data }))
//             .catch(error => {
//                 console.error('Server Error', error)
//             });
//     }

//     render() {
//         return (
//             <div>
//                 <div className="friend-title">Lambda Friends</div>
//                 <ul className="friend-grid">
//                     {this.state.friends.map((friend, i) => {
//                         return <Friend friend={friend} key={i} newFriend={this.props.newFriend} />;
//                     })}
//                 </ul>
//                 <Link to="/new"><button>Add New Friend</button></Link>
//             </div>
//         );
//     }
// }



// export default FriendList;