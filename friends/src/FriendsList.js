import React, {
    Component
} from 'react';
import axios from 'axios';
import './FriendsList.css'; 


class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            name: '',
            age: '',
            email: '',
        }
    }

    updatName = (e) =>{
        this.setState({
            name: e.target.value
        });  
    };

    updatAge = (e) =>{
        this.setState({
            age: e.target.value
        });   
    };

    updatEmail = (e) =>{
        this.setState({
            email: e.target.value
        }); 
    }; 

    submitFriend = (e) =>{
        e.preventDefault();

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

        axios.post('http://localhost:5000/friends', {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
          })
          .then(function (response) {
            console.log(response.data);
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

                    <form className = 'form'>
                        <input className = 'form-item' onChange = {this.updatName} placeholder = 'friends name' />
                        <input className = 'form-item' onChange = {this.updatAge} placeholder = 'friends age' />
                        <input className = 'form-item' onChange = {this.updatEmail} placeholder = 'friends email' />
                        <button className = 'form-item' onClick = {this.submitFriend}>add friend</button>
                    </form>
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