import React from 'react';



class NewFriends extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            age: '',
            email:'',
        }
    }


    // updateInput = event => {
    //     const { value } = event.target;
    //     this.setState({name.value});
    // }
        

        

    handleChangeName = event => {
        this.setState({name: event.target.value })
    }
    handleChangeAge = event => {
        this.setState({age: event.target.value })
    }
    handleChangeEmail = event => {
        this.setState({email: event.target.value })
    }


    render() {
        return (
            <form action="">
                <input onChange={this.handleChangeName} value={this.state.name} type="text"/>
                <input onChange={this.handleChangeAge} value={this.state.age}type="text"/>
                <input onChange={this.handleChangeEmail} value={this.state.email} type="text"/>
                <button>Submit</button>
            </form>
        )
    }
    
}

export default NewFriends;