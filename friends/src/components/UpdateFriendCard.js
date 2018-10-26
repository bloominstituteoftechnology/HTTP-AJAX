import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const UpdateFriendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.8rem;
    width: 40%;
    margin-top: 20px;

    input{
        display: flex;
        justify-content: center;
        width: 60%;
        margin: 10px 0;
        height: 25px;
        border-radius: 5px;
    }

    a{
        text-decoration: none;
        color: white;
        background-color: mediumslateblue;
        padding: 8px;
        border: 2px solid white;
        border-radius: 8px;
        margin-top: 15px;

        &:hover{
            color: mediumslateblue;
            background-color: white;
            border: 2px solid mediumslateblue;
        }
    }
`;

class UpdateFriendCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: undefined,
            email: ''
        }
    }

    changeName = (event)=>{
        this.setState({
            name: event.target.value
        })
    }

    changeAge = (event)=>{
        this.setState({
            age: event.target.value
        })
    }

    changeEmail = (event)=>{
        this.setState({
            email: event.target.value
        })
    }

    updateFriend = ()=>{
        this.props.updateFriend(
            this.props.friend.id,
            {
                name: this.state.name ? this.state.name : this.props.friend.name,
                age: this.state.age ? this.state.age : this.props.friend.age,
                email: this.state.email ? this.state.email : this.props.friend.email
            }
        )
    }

    render(){
        if(this.props.friend === undefined){
            return <div>Loading friend data...</div>;
        }
        return(
            <UpdateFriendContainer>
                <input onChange={this.changeName} type="text" placeholder={this.props.friend.name} value={this.state.name}/>
                <input onChange={this.changeAge} type="number" placeholder={this.props.friend.age}/>
                <input onChange={this.changeEmail} type="email" placeholder={this.props.friend.email} value={this.state.email}/>
                <Link to={`/${this.props.friend.id}`} onClick={this.updateFriend}>Update</Link>
            </UpdateFriendContainer>
        )
    }
}

export default UpdateFriendCard;