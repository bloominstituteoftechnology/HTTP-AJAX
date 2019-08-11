import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import UpdateProfile from './UpdateProfile';
import './Friendslist.css';

export default class App extends Component {
            constructor() {
                super();
            };
        
    deleteFriend = (id) => {
        axios.delete("http://localhost:5000/friends/"+id)
            .then(res=>{
            this.props.updateData(res.data);
            })
            .catch(err=>{
            console.log(err);
            })
        }

    render() {
        return (
            <div>
                <div className="listBox">
                <div className="list">
                <h2>FriendsList</h2>
                </div>
                </div>
                <div className="peopleBox">
                {this.props.friends.map((friend, index) => {
                    return (
                        <div className="people">
                        <div key={friend.id}>
                                <h1>Name:</h1> 
                                        <p>{friend.name}</p>
                                <h2>Age:</h2>
                                    <p>{friend.age}</p>
                                <h3>Email:</h3> 
                                    <p>{friend.email}</p>
                                <button onClick={()=> {this.deleteFriend(friend.id)}}>X</button>
                            </div>
                        </div>
                    )
                })};
                </div>
            }
            </div>
        )}}
