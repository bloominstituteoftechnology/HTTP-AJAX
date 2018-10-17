import React,{Component, Fragment} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

 function createForm(props){
    return(
        <Fragment>
            <label>New Friend:</label>
            <form>
                <input type='text'
                    placeholder='Name'
                    value={props.friend.name}
                    name='name'
                    onChange={props.handleChange}
                    required />
            </form>
            <form>
                <input type='number'
                placeholder='Age'
                value={props.friend.age}
                name='age'
                onChange={props.handleNumberChange}
                required />
            </form>
            <form>
                <input type='text'
                placeholder='E-mail'
                value={props.friend.email}
                name='email'
                onChange={props.handleChange}
                required />
            </form>
            <button onClick={props.handleAddNewFriend}>
                Submit
            </button>
        </Fragment>
    )
}
 createForm.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
    }),
    handleChange: PropTypes.func,
    handleAddNewFriend: PropTypes.func,
}
 class FriendForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: null,
            name: null,
            age: null,
            email: null
        };
    }
     componentDidMount(){
        axios
            .get('http://localhost:5000/friends')
            .then(response=> {
                //console.log(response);
                this.setState({id:this.getID(response)})
            })
            .catch(err => console.log(err));
    }
     render(){
        return(
            <div>
                Issa FriendForm!
            </div>
        )
    }
     getID(response){
        return response.data[response.data.length-1].id+1;
    }
}
 export default FriendForm; 
