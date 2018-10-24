import React from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom'

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',

        };
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }
    handleSubmit = event => {
        event.preventDefault();
        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        this.props.newFriend(friend)
        event.target.reset();

    }
    render() {

        return (
            <div className="home">
                <div>
                    <h1>Welcome to Your FriendList</h1>
                    <NavLink className="link" to='/friendlist/'>
                        <p>Click Here To See Your Freinds.</p>
                    </NavLink>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <fieldset >
                            <legend>Add New Friend:</legend>
                            Name: <input onChange={this.changeHandler} name="name" type="text" id="uniqueID" /><br />
                            Age: <input onChange={this.changeHandler} name="age" type="text" /><br />
                            Email: <input onChange={this.changeHandler} name="email" type="text" /><br />
                            <input type="submit" value="Submit" />
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}




export default HomePage