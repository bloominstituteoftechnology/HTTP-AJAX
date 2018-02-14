import React from 'react';
import axios from 'axios';
import Form from './FormComponent';
import styled  from 'styled-components';


class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            name:'',
            age:'',
            email:'',
        };
        this.loadFriend = this.loadFriend.bind(this);
    }

    componentDidMount() {
        this.loadFriend();
    }
    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });

    };

    loadFriend = () => {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState({ friends: response.data});
            })
            .catch(error => {
                console.log('error');
            });
    };

    handleDelete(friendId) {
        axios
            .delete(`http://localhost:5000/friends/${friendId}`)
            .then(response => {
                console.log('response delete:' , response);
                this.loadFriend();
            })
            .catch(error => {
                console.log('error', error);
            });
    };

    handleShowHideBoxes = (friend) => {
        
        let infoElement = document.getElementById(friend.id + '-info');
        infoElement.classList.remove('show-input');
        infoElement.classList.add('hide-input');

        let formElement = document.getElementById(friend.id + '-form');
        formElement.classList.remove('hide-input');
        formElement.classList.add('show-input');

        this.setState({
            name: friend.name,
            age:friend.age,
            email:friend.email,
        })

    };

    handleCancelUpdate = (friend) => {

        let infoElement = document.getElementById(friend.id + '-info');
        if(infoElement !== null) {
            infoElement.classList.remove('hide-input');
            infoElement.classList.add('show-input');
        }

        let formElement = document.getElementById(friend.id + '-form');
        if(formElement !== null) {
            formElement.classList.remove('show-input');
            formElement.classList.add('hide-input');
        }

        this.setState({
            name: friend.name,
            age:friend.age,
            email:friend.email,
        });

    };

    handleSaveUpdate = (event, friend) => {
        event.preventDefault();

        const updatedFriendObj = {name: this.state.name, age: this.state.age, email: this.state.email};

        axios
            .put(`http://localhost:5000/friends/${friend.id}`, updatedFriendObj)
            .then(response => {
                this.setState({ friends: response.data});
            })
            .catch(error => {
                console.log('error');
            });

        this.loadFriend();
        this.handleCancelUpdate(friend);
        this.setState({
            name:'',
            age:'',
            email:'',
        })
    };

    render() {
        return (
            <FriendsContainer>
                <ul className="friend-grid">

                    {this.state.friends.map(friend => {
                        return (
                            <li key={friend.id} className="friend">
                                <div className="deleteIconContainer" onClick={() => {this.handleDelete(friend.id)} }>
                                    <span className="xIcon">X</span>
                                </div>

                                <div id={friend.id + '-info'} className="show-input">
                                    <div className="friend-name">{friend.name}</div>
                                    <div className="friend-age">{`Age: ${friend.age}`}</div>
                                    <div className="friend-email">{`Email: ${friend.email}`}</div>
                                    <br/>
                                    <button onClick={() => {this.handleShowHideBoxes(friend)}}>
                                        Update
                                    </button>
                                </div>

                                <div id={friend.id + '-form'} className="hide-input">
                                    <form onSubmit={(e) => {this.handleSaveUpdate(e, friend)}}>
                                        <div className='friend-name'>
                                            Name: <input name="name" onChange={this.handleChange} value={this.state.name} type="text"/>
                                        </div>
                                        <div className='friend-age'>
                                            Age: <input name="age" onChange={this.handleChange} value={this.state.age} type="number"/>
                                        </div>
                                        <div className='friend-email'>
                                            Email: <input name="email" onChange={this.handleChange} value={this.state.email} type="email"/>
                                        </div>
                                        <br/>
                                        <MenuBottomLnks>
                                            <button onClick={() => {this.handleCancelUpdate(friend, friend.id)}}>
                                                Cancel Update
                                            </button>
                                            <button type="submit" >
                                                Save
                                            </button>
                                        </MenuBottomLnks>
                                    </form>
                                </div>

                            </li>
                        )
                    })}
                    <Form onCreate={this.loadFriend}  />
                </ul>
                <br/><br/><br/>
            </FriendsContainer>
        );
    }
}

const MenuBottomLnks = styled.div`
    display: flex;
    justify-content:space-between;
`;

const FriendsContainer = styled.div`
    
    .hide-input {
        display:none;
    }
    
    .show-input {
        display:inline;
    }

    .updateLnk {
        font-size:12px;
        color:blue;
        margin-top:10px;
        text-align:left;
        
        .updateLnk:hover {
            cursor:auto;
            
        }
    }
    
    .deleteIconContainer {
        text-right:left;
        position:relative;
        right:0px;

        .xIcon {
            border:1px solid green;
            position:absolute;
            right:0px;
            border-radius:40%;
            padding-left:4px;
            padding-right:4px;
            
        }
        .xIcon:hover {
            border:2px solid orange;
            pointer:auto;
        }
    }  
`;

export default Friends;
