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
        axios.get(this.state.url).then(response => {
            this.setState({ friends: response.data });
        });
    }

    render() {
        console.log(this.state.url);
        return (
            <div>
                {this.state.friends.map(friend => {
                    return (
                        <div key={friend.id} className='friend'>
                            <p>Name: {friend.name}</p>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Friends; 