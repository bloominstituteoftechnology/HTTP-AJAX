import React, {
    Component
} from 'react';
import axios from 'axios';
import './FriendsList.css'; 
import SubmitForm from './SubmitForm';


class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            id: '',
            name: '',
            age: '',
            email: '',
        }
    }

    updateId = (e) =>{
        this.setState({
            id: Number(e.target.value)
        });
    };
    updatName = (e) =>{
        this.setState({
            name: e.target.value
        });  
    };

    updatAge = (e) =>{
        this.setState({
            age: Number (e.target.value)
        });   
    };

    updatEmail = (e) =>{
        this.setState({
            email: e.target.value
        }); 
    }; 

    submitFriend = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:5000/friends', {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        })
          .then(function (response) {
            console.log(response.data);
          })

        let newFriends = this.state.friends;
        let newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        }

        newFriends.push(newFriend);
        this.setState({
            friends: newFriends
        })
    };


    deleteFriend = (e) => {
        e.preventDefault();

        axios.delete(`http://localhost:5000/friends/${this.state.id}`)
            .then(response => {
            this.setState({friends: response.data});
        })
    }


    updateFriend = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:5000/friends/${this.state.id}`, {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email,
        })
        .then(response => {
        this.setState({friends: response.data});
        })
    };

    render(){
        return(
            <div className = 'container'>
                <div className="friend-grid">
                    {this.state.friends.map(friend => {
                        return (
                            <div key={friend.id} className="friend">
                                <div className="friend-name">{friend.name}</div>
                                <div className="friend-age">{`Age: ${friend.age}`}</div>
                                <div className="friend-email">{`Email: ${friend.email}`}</div>
                                <div>============================</div>
                            </div>
                        );
                    })}
                </div>
                <SubmitForm onUpdate = {this.updateFriend} onDelete = {this.deleteFriend} submit = {this.submitFriend}  onNameChange ={this.updatName} onAgeChange ={this.updatAge} onEmailChange ={this.updatEmail} onIdChange = {this.updateId}/>
            </div>
        );
    }

    
    componentDidMount(){
        axios.get(`http://localhost:5000/friends`)
        .then(response => {this.setState({friends: response.data})})
        .catch(error => {console.log(error)})
    }
    
   
}

export default FriendsList;