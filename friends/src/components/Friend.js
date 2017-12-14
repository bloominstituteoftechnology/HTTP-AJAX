import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteFriend  } from '../actions';

class Friend extends Component {
    constructor(){
        super()
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    handleDelete() {
        this.props.deleteFriend(this.props.index);
    }

    render() {
        return (
            <li>
                <p>{`Friend ${this.props.index+1}`}</p>
                <p>{`Name: ${this.props.friend.name}`}</p>
                <p>{`Age: ${this.props.friend.age}`}</p>
                <p>{`Email: ${this.props.friend.email}`}</p>
                <button onClick={this.handleDelete}> Delete </button>
            </li>
        );       
    }
}


export default connect(null, { deleteFriend })(Friend);