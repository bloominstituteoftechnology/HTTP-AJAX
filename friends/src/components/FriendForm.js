import React, {Fragment} from 'react';
// import FriendsList from './FriendList';
import PropTypes from 'prop-types';

class FriendForm extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Fragment>
                <section className='App-form'>
                    <h1>Add new Friend</h1>
                    <form>
                        <input type="text" 
                            required 
                            placeholder="type name" 
                            value={this.props.name} 
                            name="name" 
                            onChange={this.props.handleChange}
                        />
                        <input type="number" 
                            required 
                            placeholder="type age" 
                            value={this.props.age} 
                            name="age" 
                            onChange={this.props.handleChange}
                        />
                        <input type="text" 
                            required 
                            placeholder="type email" 
                            value={this.props.email} 
                            name="email" 
                            onChange={this.props.handleChange}
                        />
                    </form>
                    <button onClick={this.props.handleAddNewFriend}>save</button>
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
    handleAddNewFriend: PropTypes.func,
    handleChange: PropTypes.func, 
}

export default FriendForm