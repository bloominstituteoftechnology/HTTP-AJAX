import React, { Component } from 'react'; 
import axios from 'axios'
import { Link } from 'react-router-dom';

class Friend extends Component {
    constructor() {
        super();
        this.state = {
            Friend: {},
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`http://localhost:5000/friends/${id}`)
        .then(response => {
            this.setState({Friend: response.data});
        });
    }
    
    delete(){
        console.log('delete');
    }

    edit(){
        //edits
        console.log('edit');
    }

    render() {
        
        return (
            <div className="List__Friend">
                <Link to="/">Back to Friends</Link>
                <div className="Friend__Name">{this.state.Friend.name}</div>
                <div className="Friend__Age">{`Age: ${this.state.Friend.age}`}</div>
                <div className="Friend__Email">{`Email: ${this.state.Friend.email}`}</div>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.delete}>Delete</button>
            </div>
        );
    }
}

export default Friend;
