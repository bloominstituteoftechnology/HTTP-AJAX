import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            url: 'http://localhost:5000/friends',

        }
    }

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
      axios.get(this.state.url).then(response => {
        this.setState({ friends: response.data });
      });
    }



    render () {
        return (
            <div className='friends'>
                <h1>My Friends</h1>
                {this.state.friends.map(friend => {
                    return(
                      <Link key={friend.id} to={`/friend/${friend.id}`}>
                        <div className='friend'>
                            <p>Name: {friend.name}</p>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                      </Link>
                    )
                })}
                <Link className='add' to='/add'><button className='add-button'>Add a friend!</button></Link>
            </div>
        )
    }
  }


export default Friends;
