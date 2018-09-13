import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }
    

    formHandler = event => {
       event.preventDefault();
        this.props.newFriends(this.state);
        this.setState ({
            name: '',
            age: '',
            email: ''
        })
        alert("Success! A new friend has been added!");
        this.props.history.push('/current');
    }

    handleInput = event => {
        if(event.target.name==='age') {
            this.setState ({[event.target.name]: Number(event.target.value),})
        } else {
            this.setState({
                [event.target.name]: event.target.value,
            })
        }
    }
    
    render() {
        return (
            <div>
                <h2>Add a New Friend</h2>
                <form action="" >
                    Name: <input type="text" name="name" value={this.state.name} onChange={this.handleInput}/>
                    Age: <input type="text" name="age" value={this.state.age} onChange={this.handleInput}/>
                    Email: <input type="text" name="email" value={this.state.email} onChange={this.handleInput}/>
                    <input type="submit" value="Submit" onClick={this.formHandler}/>
                </form>     
            </div>
        )
    }
}

export default Form;