import React, { Component } from 'react';
import axios from 'axios';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: [],
            showUpdateFriend: false
         }
    }

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axios
            .get('http://localhost:5000/friends/')
            .then(response => {
               this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    showUpdateFriend = () => {
        this.setState({showUpdateFriend: !this.state.showUpdateFriend})
    }

    render() { 
        console.log(this.state.friends)
        return ( 
            <div>

                <button>Update</button>

                <div className="container" key={this.state.friends.id} friend={this.state.friends}>
                    <button onClick={ this.showUpdateFriend(this.state.friends.id) }>
                        Update Friend
                    </button>

                    {this.state.showUpdateFriend ? 
                    <div>
                        NOTE UPDATE
                    </div> : null}
                </div>
            </div>
         )
    }
}
 
export default Update;