import React from 'react';
import axios from 'axios';
import FriendProfile from './FriendProfile';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


 

    render() {
        return(
            <div>
            {this.props.friends.map(item => {
                if (this.props.match.params.id === `${item.id}`) {
                    return (
                        <FriendProfile 
                            name={item.name} 
                            age={item.age}
                            email={item.email} 
                            stateName={this.props.stateName}
                            stateAge={this.props.stateAge}
                            stateEmail={this.props.stateEmail}
                            id={item.id} 
                            updateHandler={this.props.updateHandler}
                            inputHandler={this.inputHandler} />
                    )
                }
            })}
            </div>
        )
    }
};

export default Friend;

// const id = this.props.match.params.id;
//         this.getFriend(id);