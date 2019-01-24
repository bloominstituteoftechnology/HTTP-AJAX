import React from 'react';
import Friend from './Friend';
import FriendForm from './FriendForm'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        }
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
    addFriend = friend => {

        const newFriend = {
          name: friend.name,
          age: friend.age,
          email: friend.email
        }
        axios
          .post('http://localhost:5000/friends', newFriend)
          .then(response => {
              this.setState({
                  friends: response.data
              })
          })
          .catch(err =>{
            console.log(err);
          })
      }

    render() {

        return (
            <div className="friends-list">
              <FriendForm addFriend={this.addFriend}/> 


                {this.state.friends.map(friend => (
                    <Link key={friend.id} to={`friends/${friend.id}`}>
                        <Friend friend={friend} name={friend.name} email={friend.email} age={friend.age}/>
                    </Link>
                ))}
            </div>
        );
    }
    
}

// export default FriendList;
