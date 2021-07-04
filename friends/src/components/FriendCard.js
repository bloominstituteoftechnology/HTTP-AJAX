import React from 'react';
import { Link } from 'react-router-dom';
import UpdateFriends from './UpdateFriends'


class FriendCard extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            deleteFriend: null
        }
    }
    deleteFriend = () => {
        this.props.deleteFromServer(this.props)
    }

    // update = () => {
    //     console.log("HI")
    // }

    render() {
        return(
            <div className="App">
            <Link to = {`/friends/${this.props.id}`} >
                <div>                        
                    <h4>{this.props.name}</h4>
                    <h4>Age: {this.props.age}</h4>
                    <h4>Email: {this.props.email}</h4>
                </div>
            {/* <UpdateFriends update = {this.update}/> */}
            </Link>
            
                    <button onClick = {this.deleteFriend}>Delete</button>


            </div>
        )
    }
}

export default FriendCard;