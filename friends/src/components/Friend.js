import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';
import styled from 'styled-components';
import UpdateFriendForm from './UpdateFriendForm';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const CenteredDiv = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
`;

const CenteredLink = styled(Link)`
    margin: auto;
    display: flex;
    justify-content: center;
    text-decoration: none;
    width: 70px;

    :hover {
        text-decoration: none;
        cursor: pointer;
    }
`;

export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: [],
            name: '',
            age: '',
            email: '',
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchFriend(id);    
    }

    fetchFriend = id => {
        axios
            .get(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState(() => ({ friend: response.data }))
            })
            .catch(error => {
                console.error(error);
            });
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    updateHandler = (e) => {
        e.preventDefault()
        console.log("Update Friend Clicked")
        // console.log(id, name, age, email)
        // axios
        //     .put(`http://localhost:5000/friends/${id}`, {
        //         friend: {
        //             name: name,
        //             age: age,
        //             email: email
        //         }
        //     })
        //     .then( response => {
        //         this.setState({ friends: response.data })
        //     })
        //     .catch(error => console.log(error))   
        }

    render() {
        if (!this.state.friend) {
            return <CenteredDiv style={{margin: "200px"}}>Loading...</CenteredDiv>;
        }
    
        return (
            <div>
            <CenteredDiv>
                <FriendCard key={this.state.friend.id} friend={this.state.friend} />
            </CenteredDiv>
            <CenteredLink to="/">
                <Button color="info">Home</Button>
            </CenteredLink>
            <UpdateFriendForm
            submitUpdate={this.updateHandler} 
            handleTextInput={this.changeHandler}
            name={this.state.name}
            age={this.state.age}
            email={this.state.email}
            />
            </div>
        )
    }
}
