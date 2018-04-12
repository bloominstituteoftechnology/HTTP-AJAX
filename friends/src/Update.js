// import React, { Component } from 'react';
// import axios from 'axios';
// class Delete extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//           friends: [],
//         showUpdateFriend: false,
//         name: "",
//         age: "",
//         email: ""
//       }
//     }
//     componentDidMount() {
//         this.getFriends();
//       }
//     getFriends = () => {
//         axios
//           .get(`http://localhost:5000/friends`)
//           .then(response => {
//             this.setState({ friends: response.data });
//           })  
//           .catch(err => {
//             console.log(err);
//           });
//         }
//     handleTextChange = e => {
//         this.setState({ [e.target.name]: e.target.value });
//       };
//       showUpdateFriend = () => {
//           this.setState({ showUpdateFriend: !this.state.showUpdateFriend});
//         }
//       deleteFriend = friendId => {
//           axios
//           .delete(`http://localhost:5000/friends/${friendId}`)
//           .then(response => {
//             this.props.getFriends();
//           })
//           .catch(err => {
//             console.log(err);
//           });
//         }
//         updateFriend = friendId => {
//           const friend ={};
//           if (this.state.name !== '') {
//             friend.name = this.state.name;
//           }
//           if (this.state.age !== '') {
//             friend.age = this.state.age;
//           }
//           if (this.state.email !== '') {
//             friend.email = this.state.email;
//           }
//           axios
//           .put(`http://localhost:5000/friends/${friendId}`, friend)
//           .then(response => {
//             this.setState({ showUpdateFriend: false, name: '', age: '', email: '' });
//             this.props.getFriends();
//           })
//         }
//         render() {
//             return (
//                 
//        

//         </div>
        
        
//              ); 
//         }
//     }

   
