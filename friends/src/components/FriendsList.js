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
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Friend Information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                    {this.state.friends.map(friend => {
                        return (
                            <tr key={friend.id} className='friend'>
                                <td>{friend.name}</td>
                                <td>{friend.age}</td>
                                <td>{friend.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default Friends; 