import React from 'react' 
import axios from 'axios';

export default class NewFriendComponent extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    inputChange(event) {
        const loc = event.target.name
        const val = event.target.value
        const newState = this.state;
        newState[loc] = val
        this.setState(
            newState
        )
           
    }

    onSubmit(event){
        console.log(this.state)
        axios.post('http://localhost:5000/friends', this.state)
            .then(res => console.log(res))
    }

    render(){
        return (
            <div className="newFriend">
                <label>
                    Name <input type="text" name="name" onChange={this.inputChange.bind(this)}/>
                </label>
                <label>
                    Age <input type="number" name="age" onChange={this.inputChange.bind(this)}/>
                </label>
                <label>
                    email <input type="email" name="emai" onChange={this.inputChange.bind(this)}/>
                </label>
                <button onClick={this.onSubmit.bind(this)}>Submit</button>
            </div>
        )
    }
}