import React from 'react';

class FriendsForm extends Component {
    constructor(props){
        super(props)
        this.state ={
            newFriend:{
                id:'',
                name: '',
                age: '',
                email: ''
            }
        }
    }

    handleChange = event =>{
        this.setState({
            newFriend:{
                ...this.state.newFriend,
                [event.target.name]: event.target.value
            }
        })
    }

    render() { 
        return ( <div></div> );
    }
}
 
export default FriendsForm;