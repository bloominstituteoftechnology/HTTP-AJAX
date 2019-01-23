import React from 'react';
import Axios from 'axios';
import friends from "../../server";
import FriendForm from './Components/FriendForm';
import FriendsList from './Components/FriendsForm';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            friends: this.props.friend,
            name: '',
            age: '', //number???
            email: ''
        }
    }
}
    componentDidMount(){
        axios.get("http://localhost:5000/friends")
            .then(res => {
                this.setState({
                    friends: res.data
                })
                console.log(res.data);
            })
            .catch(error => {
                console.log('Server Error', error);
            });
        this.setState({friends: {friends: this.props.friend, name: '', age: '', email: '')}
        }


    }

//setting up state to retrieve data from the server.


//Same as before

const changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value })
}

 const handleSubmit = (event) => {
    this.preventDefault();

    const user = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
    };
}

export default NewFriend;
