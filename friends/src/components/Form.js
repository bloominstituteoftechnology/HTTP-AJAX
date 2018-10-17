import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return (
            <form onSubmit={this.props.saveFriend}>
                <input onChange={e => this.props.nameHandler(e)} type="text" placeholder="name" />
                <input onChange={e => this.props.ageHandler(e)} type="text" placeholder="age" />
                <input onChange={e => this.props.emailHandler(e)} type="text" placeholder="email" />
                <button type="submit">Save Friend</button>
            </form>
        );
    }

}


export default Form;