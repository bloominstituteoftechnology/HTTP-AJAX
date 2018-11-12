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

    componentDidMount(){
        axios
            .get("http://localhost:5000/friends")
            .then(data => {
                this.setState({
                    friends: data
                })
            })
        
        }


}

//setting up state to retrieve data from the server.


//Same as before

changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value })
}

handleSubmit = event => {
    this.preventDefault();

    const user = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
    };
}


render(){
    return(
         <div>
             <form method='post'
                   onSubmit={this.handleSubmit}>
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