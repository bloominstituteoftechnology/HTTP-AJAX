import React from 'react';


class NewFriend extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log('props',this.props)
        return(
            <div>
                <form onSubmit={this.props.handleAddNewFriend}>
                    <input id='name'  onChange={this.props.handleTextChange} value={this.props.name} placeholder='Name'></input>
                    <input id='age'   onChange={this.props.handleTextChange} value={this.props.age} placeholder='Age'></input>
                    <input id='email' onChange={this.props.handleTextChange} value={this.props.email} placeholder='Email'></input>
                    <button>Submit</button>
                </form>
            </div>
        )

    }
}

export default NewFriend