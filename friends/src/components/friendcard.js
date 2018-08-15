import React from 'react';
import Friend from './friend.js'
import axios from 'axios';
import { Link } from 'react-router-dom';

class FriendCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: null,
            name: '',
            age: '',
            email: '',
        }
    }

    componentDidMount = () => {
        let id = this.props.match.params.id;
        this.fetchFriend(id);
    }
}

    getFriend = idnum {
        axios
            .get(`http://localhost:5000/friends`)
            .then(response => {
                let friend = response.data.find(item => item.id === parseInt(idnum))
                this.setState(() => ({ friend}));
            });
    };

    addValueHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeFriendHandler = (e) => {
        let changedfriend = {
            id: this.state.friend.id,
            name: this.state.name,
            age: this.state.age,
        };





        render() {

        }
    }




    export default FriendCard;
            