import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'; 

import FriendForm from './FriendForm';
import FriendCard from './FriendCard';

const CardForFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            name: '',
            age: '',
            email: '',
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitHandler = event => {
        event.preventDefault();
        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        };
        axios
            .post('http://localhost:5000/friends', friend)

            .then(response => {
                this.setState({ name: '', age: '', email: ''});
                this.setState({ friends: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    };

    deleteHandler = (id) => {
        return () => {
            alert(`You sure?`)
            axios
                .delete(`http://localhost:5000/friends/${id}`)
                .then( response => {
                    this.setState({ friends: response.data });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    };

    // updateHandler = (id, name, age, email) => {
    //     console.log(id, name, age, email)
    //     axios
    //         .put(`http://localhost:5000/friends/${id}`, {
    //             friend: {
    //                 name: name,
    //                 age: age,
    //                 email: email
    //             }
    //         })
    //         .then( response => {
    //             this.setState({ friend: response.data })
    //         })
    //         .catch(error => (
    //             console.log(error)
    //         ));
    // }

    render() {
        return (
            <div>
                <FriendForm 
                handleSubmit={this.submitHandler}
                name={this.state.name}
                age={this.state.age}
                email={this.state.email}
                handleTextInput={this.changeHandler}
                />
                <CardForFlex>
                    {this.state.friends.map(friend => (
                        <div key={friend.id}>
                            <FriendCard friend={friend} 
                            // handleUpdate={this.updateHandler} 
                            />
                            <div>
                                <Button color="danger" onClick={this.deleteHandler(friend.id)}>Delete</Button>
                                <Link to={`/friends/${friend.id}`}>
                                    <Button color="secondary">Edit</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </CardForFlex>  
            </div>
        );
    }
}