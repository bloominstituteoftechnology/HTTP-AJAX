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
        const eId = event.target.id
        
        this.setState({
            updateID: eId,
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
            {this.state.showForm ? <UpdateUser friedID={this.state.updateID} friends={this.state.friends}/> : null}
        </div>
    )
    }
}


class UpdateUser extends React.Component{
    constructor (props){
        super(props)
        console.log("CONSTRUCTER")
        console.log(props)
        console.log('dasdsa' + this.getFriend(props.friends, props.friedID))
        this.state = {
            name: '',
            email: '',
            age: '',
            id: props.friedID
        }
    }

    getFriend( friends, id){
        return friends.filter(friend => friend.id == id)
    }

    inputChange (event) {
        const loc = event.target.name
        const val = event.target.value
        const newState = this.state;
        newState[loc] = val
        this.setState({newState})      
    }

    onSubmit = (event) => {
        console.log(this.state)
        axios.put(`http://localhost:5000/friends/${this.state.id}`, {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        })
            .then(res => console.log(res))
    }

    render(){
        
        return (
            <div className="updateFriendData">
                    <h1>Update user data</h1>
                    <div className="data">
                        <div><strong>Name:</strong><input type="text" name="name" onChange={this.inputChange.bind(this)}/></div>
                        <div><strong>Age:</strong><input type="text" name="name" onChange={this.inputChange.bind(this)}/></div>
                        <div><strong>Email:</strong><input type="text" name="name" onChange={this.inputChange.bind(this)}/></div>   
                    </div>
                    <button id={this.state.id} onClick={this.onSubmit.bind(this)}>Update </button>
            </div>
        )
    }
}