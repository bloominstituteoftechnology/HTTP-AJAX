import React from 'react';
import axios from 'axios';


class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            url: props.url
        }
    }

    componentDidMount() {
        axios.get(this.state.url)
            .then(response => {
                this.setState({
                    friends: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                {this.state.friends.map(friend => {
                   return (
                   <div key={friend.id}>
                        <p>
                            <a href={`mailto: ${friend.email}`}>{friend.name}</a> is {friend.age} years old</p>
                    </div>
                   )
                })}
            </div>
        )
    }
}

export default Friends;