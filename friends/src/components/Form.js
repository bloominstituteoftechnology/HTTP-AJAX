import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    clearForm = () => {
        this.setState({
            name: '',
            age: '',
            email: ''
        })
    }

    render(){
        return (
            <form className="form-wrapper" onSubmit={(event) =>{
                event.preventDefault();
                this.props.addFriend(this.state);
                this.clearForm();
                }}>
                <input onChange={this.onChangeHandler} type="text" placeholder="Enter your name" name="name" value={this.state.name}/>
                <input onChange={this.onChangeHandler} type="text" placeholder="Enter your age" name="age" value={this.state.age}/>
                <input onChange={this.onChangeHandler} type="text" placeholder="Enter your email" name="email" value={this.state.email}/>
                <button type="submit">Submit</button>
            </form>
            
        );
    }
}

export default Form;