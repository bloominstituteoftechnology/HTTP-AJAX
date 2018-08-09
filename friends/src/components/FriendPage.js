import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class FriendPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            matchId: 0,
            uname: '',
            uage: null,
            uemail: ''
        }
    }

    componentDidMount = () => {
        this.setState(function(prevState, props) {
            return {matchId: this.props.match.params.id}
        })
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    updateFriend = (props) => {
        axios.put(`http://localhost:5000/friends/${this.state.matchId}`, {
            name: this.state.uname,
            age: parseInt(this.state.uage, 10),
            email: this.state.uemail
        })
        .then(function (response) {
            console.log(response)
            this.props.didMount();
        })
        .then(function (error) {
            console.log(error)
        });
    }

    render() {
    console.log("Array: ", this.props.array[this.state.matchId -1])
    
    if (this.props.array.length > 0) {
    return (
        <div className="friend-div">
            <h1 className="friend-title">Friend #{this.state.matchId}</h1>
            <p><span>Name:</span> {this.props.array[this.state.matchId-1].name}</p>
            <p><span>Age:</span> {this.props.array[this.state.matchId-1].age}</p>
            <p><span>Email:</span> {this.props.array[this.state.matchId-1].email}</p>
        

            <form onSubmit={this.updateFriend}>
            <h1>Update Friend</h1>
            <p>Name: <input type="text" name="uname" onChange={this.handleInputChange} value={this.state.uname} placeholder={this.props.array[this.state.matchId-1].name} /></p>
            <p>Age: <input type="number" name="uage" onChange={this.handleInputChange} value={this.state.uage} placeholder={this.props.array[this.state.matchId-1].age}/></p>
            <p>Email: <input type="text" name="uemail" onChange={this.handleInputChange} value={this.state.uemail} placeholder={this.props.array[this.state.matchId-1].email}/></p>
            <button type="submit">Submit</button>
            
            </form>

            <h1>Delete Friend</h1>
            <form onSubmit={() => this.props.delete(this.state.matchId)}>
            <button type="submit">Delete this friend</button>
            </form>
            <p><Link to="/">Go to friends list</Link></p>
        </div>
    )
    } else {
        return <div>Loading...</div>
    }
    } 
     
}

export default FriendPage;