import React, {Fragment} from 'react';
// import FriendsList from './FriendList';
import PropTypes from 'prop-types';

import './FriendForm.css';

class FriendForm extends React.Component {
    constructor(props){
        super(props);

    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.props.isUpdating) {
            this.props.handleUpdateFriend(this.props.newfriend.id);
            // console.log(this.props)
        } else {
            this.props.handleAddNewFriend(event);
        }
    }

    render(){
        return(
            <Fragment>
                <section className='App-form'>
                    <h1>{this.props.isUpdating ? 'Update existing Friend' : 'Add Friend'}</h1>
                    <form>
                        <div className="inputdiv">
                            <h3>Name</h3>
                            <input type="text" 
                                required 
                                placeholder="type name" 
                                value={this.props.name} 
                                name="name" 
                                onChange={this.props.handleChange}
                            />
                        </div>
                        <div className="inputdiv">
                            <h3>Age</h3>
                            <input className="age-field" type="number" 
                                required 
                                placeholder="type age" 
                                value={this.props.age} 
                                name="age" 
                                onChange={this.props.handleChange}
                            />
                        </div>
                        <div className="inputdiv">
                            <h3>Email</h3>
                            <input type="text" 
                                required 
                                placeholder="type email" 
                                value={this.props.email} 
                                name="email" 
                                onChange={this.props.handleChange}
                            />
                        </div>
                    </form>
                    <button onClick={this.handleSubmit}>ADD</button>
                </section>
            </Fragment>
        )
    }
}

FriendForm.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
    }),
    isUpdating: PropTypes.bool,
    handleAddNewFriend: PropTypes.func,
    handleChange: PropTypes.func, 
    handleUpdateFriend: PropTypes.func,
}

export default FriendForm