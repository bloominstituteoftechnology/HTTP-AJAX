import React from 'react';
import axios from 'axios';

class Friend extends React.Component {
    constructor() {
        super();
        this.state = {
            friend: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.getFriend(id);
    }

    getFriend = id => {
        axios 
            .get(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState(() => ({friend: response.data}));
            })
            .catch(err => {console.log(err)})
    }

    render() {
        return(
            <div>
                {this.state.friend.name}
            </div>
        )
    }
};

export default Friend;