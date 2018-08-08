import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            email: '',
            uname: '',
            uage: '',
            uemail: '',
            ulist: 0,
            length: props.array.length,
            friends: [],
            person: {}
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/friends')
            .then(response => {
                // console.log(response.data);
                this.setState(function(prevState, props) {
                    return {friends: response.data}
                })
                console.log(this.state.person)
            })
            .then(response => {
                this.setState({
                    person: this.state.friends[this.state.ulist]
                })
            })
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        
    }

    handleInputChangeList = (selectObj) => {
        this.setState({ulist: selectObj.value, person: this.state.friends[selectObj.value]})
        
    }

    addFriend = (props) => {
        axios.post('http://localhost:5000/friends', {
            id: this.props.array.length + 1,
            name: this.state.name,
            age: parseInt(this.state.age, 10),
            email: this.state.email
        })
        .then(function (response) {
            console.log(response)
            this.props.didMount();
        })
        .then(function (error) {
            console.log(error)
        });
    }

    updateFriend = (props) => {
        axios.put('http://localhost:5000/friends', {
            id: this.props.array.length + 1,
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
        return (
            <div className="form-div">
                <form onSubmit={this.addFriend}>
                    <h1>Add Friend #{this.props.array.length + 1}</h1>
                    <p>Name: <input type="text" name="name" onChange={this.handleInputChange} value={this.state.name}/></p>
                    <p>Age: <input type="text" name="age" onChange={this.handleInputChange} value={this.state.age}/></p>
                    <p>Email: <input type="text" name="email" onChange={this.handleInputChange} value={this.state.email}/></p>
                    <button type="submit">Submit</button>
                </form>

                <form onSubmit={this.updateFriend}>
                    <h1>Update Friend</h1>
                    <p>Friend to update:&nbsp;
                    <select onChange={e => this.handleInputChangeList(this)}>
                        {this.props.array.map(friend => <option value={friend.id} name="ulist">{`Friend #${friend.id}`}</option>)}
                    </select></p>
                    <p>Name: <input type="text" name="uname" onChange={this.handleInputChange} value={this.state.uname} placeholder={this.state.person.name} /></p>
                    <p>Age: <input type="text" name="uage" onChange={this.handleInputChange} value={this.state.uage}/></p>
                    <p>Email: <input type="text" name="uemail" onChange={this.handleInputChange} value={this.state.uemail}/></p>
                    <button type="submit">Submit</button>
                    <p><Link to="/">Go to friends list</Link></p>
                </form>
            </div>
        )
    }
}   

export default FriendForm;