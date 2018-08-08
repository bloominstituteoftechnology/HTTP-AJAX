import React from 'react' 
import './friendsContainer.css'
import axios from 'axios'

export default class FriendsContainer extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            friends: props.friends,
            upateData: {},
            showForm: false,
            updateID: ''
        }
    }

    update (event){
        const id = event.target.id
        this.setState({
            updateID: id,
            showForm: true
        })
    }
    
    remove (event){
        const id = event.target.id
        const URL = `http://localhost:5000/friends/${id}`
        axios.delete(URL).then(res => console.log(res))
    }
    
    render () {
    const friends = this.state.friends

    return (
        <div>
            <div className="friendsList">
            {friends.map(friend => 
                <div key={friend.id} className="friendsCard">
                    <div className="data">
                        <div><strong>Name:</strong> {friend.name}</div>
                        <div><strong>Age:</strong> {friend.age}</div>
                        <div><strong>Email:</strong> {friend.email}</div>   
                    </div>
                    <button id={friend.id} onClick={this.update.bind(this)}>Update</button>
                    <button id={friend.id} onClick={this.remove}>Delete</button>
                </div>
            )}
            </div>
            {this.state.showForm ? <UpdateUser friedID={this.state.updateID}/> : null}
        </div>
    )
    }
}


function UpdateUser ({friendData}){
    this.state = {
        name: '',
        email: '',
        age: ''
    }

    return (
        <div className="updateFriendData">
                <h1>Update user data</h1>
                <div className="data">
                    <div><strong>Name:</strong><input type="text" name="name" onChange={this.inputChange}/></div>
                    <div><strong>Age:</strong><input type="text" name="name" onChange={this.inputChange}/></div>
                    <div><strong>Email:</strong><input type="text" name="name" onChange={this.inputChange}/></div>   
                </div>
                <button id={friendData.id}>Update </button>
        </div>
    )
}

UpdateUser.prototype.inputChange = (event) => {
    const loc = event.target.name
    const val = event.target.value
    const newState = this.state;
    newState[loc] = val
    this.state = newState
       
}

UpdateUser.prototype.onSubmit = (event) => {
    console.log(this.state)
    axios.post('http://localhost:5000/friends', this.state)
        .then(res => console.log(res))
}