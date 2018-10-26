import React, { Component } from 'react';



class Form extends Component {
    constructor(props) {
        super(props)
    }
    render() {
    // console.log(this.props);
    return (
        <>
            <form className="form" onSubmit={this.props.submitHandler}>
                <input type="text" placeholder="name" name="name" value={this.props.name} onChange ={this.props.inputChangeHandler} />
                <input type="text" placeholder="age"  name="age" value={this.props.age} onChange ={this.props.inputChangeHandler} />
                <input type="email" placeholder="email" name="email" value={this.props.email} onChange ={this.props.inputChangeHandler} />
                <input type="submit" value="Add" />
            </form> 
        </>
        
    )
    }
}

export default Form;
