import React from 'react';
import axios from 'axios';

class NewFriend extends React.Component{
    constructor(){
        super();
        this.state = {
            friends: this.props.friend,
            name: '',
            age: '',
            email: ''
        }
    }


}

//setting up state to retrieve data from the server.
componentDidMount(){
axios
    .get("http://localhost:5000/friends")
    .then(data => {
        this.setState({
            friends: data
        })
    })

}

//Same as before

changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value })
}

//add one function: Adding a friend 
addFriend = () => {
    const friendObj = {name: this.state.name, age: this.state.age, email: this.state.email}
    axios
    .post('http://localhost:5000/friends', friendObj)
    .then(friendObj => {
        console.log(friendObj)
    })
    .catch(err => {
        console.log(err)
    })


render(){
    return(
         <div>
             <form method='post'>
             <ul>
                 <li>
                     <h3>Name:</h3>
                     <input
                     type= 'text'
                     onChange={this.changeHandler}
                     name='name'
                     value={this.state.name} />
                     {/* input */}

                            <h3>Age:</h3>
                     <input
                     type= 'text'
                     onChange={this.changeHandler}
                     name='age'
                     value={this.state.age} />
                     {/* age */}
                 </li>

                        <h3>Email:</h3>
                     <input
                     type= 'text'
                     onChange={this.changeHandler}
                     name='email'
                     value={this.state.email} />
                     {/* @ */}
                    </ul>
                     <button onClick ={this.addOne}>
                        </button>
            </form>
         </div>
    )
}
}

export default NewFriend;