import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button, Card } from 'reactstrap';
import { Link } from 'react-router-dom'; 

import FriendForm from './FriendForm';
import FriendCard from './FriendCard';

const CardForFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const StyledCard = styled(Card)`
    padding: 10px;
    margin: 10px;
    width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 10px;
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
                                <StyledCard>
                                    <FriendCard friend={friend} 
                                    // handleUpdate={this.updateHandler} 
                                    />
                                    <ButtonContainer>
                                        <Button color="danger" onClick={this.deleteHandler(friend.id)}>Delete</Button>
                                        <Link to={`/friends/${friend.id}`}>
                                            <Button color="secondary">Edit</Button>
                                        </Link>
                                    </ButtonContainer>
                                </StyledCard>
                            </div>
                        ))}
                    </CardForFlex>
            </div>
        );
    }
}