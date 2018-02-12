import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
    state = {friends: []}
    render() {
        return (
            <div>
                {this.state.friends.map((card) => {
                    return (
                    <ul key={card.id} className="flc">
                        <li className="flc__name">{card.name}</li>
                        <li className="flc__age">{card.age}</li>
                        <li className="flc__email">{card.email}</li>
                    </ul>
                    )
                })}
            </div>
        )
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(response => this.setState({friends: response.data}))
        .catch(error => console.log('error message: ', error));
    }
}


export default FriendsList;