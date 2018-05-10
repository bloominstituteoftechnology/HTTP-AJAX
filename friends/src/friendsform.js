import React, { Component } from 'react';


class FriendsForm extends Component{

    handleInputData = (event) => {
        //const target = event.target;
        this.setState({ [event.target.name]: event.target.value })
    }

    


    render(){
        return(
            <form>
                <label>
                    Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputData} />
                    age:
            <input type="text" name="age" value={this.state.age} onChange={this.handleInputData} />
                    email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleInputData} />
                </label>
                <button type="submit" onSubmit={this.props.onSubmit}>Submit</button>
            </form>
        )
    }
}
export default FriendsForm;