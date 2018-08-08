import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import FriendForm from './FriendForm';
import { Route, Link } from 'react-router-dom';

class Friends extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: []
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/friends')
            .then(response => {
                console.log(response.data);
                this.setState({
                    friends: response.data
                })
            })
    }

    render() {
        return (
            <div className="friends-div">
                {this.state.friends.map(friend => <Route exact path="/" render={props => (<Friend person={friend} key={friend.id} {...props} />)} />)}
                <Route exact path="/" render={props => (<Link to="/form" className="link">Add a friend here</Link>)}/>
                <Route path="/form" render={props => (<FriendForm array={this.state.friends} didMount={this.componentDidMount} />)} />
                
            </div>
        )
    }
}

export default Friends;