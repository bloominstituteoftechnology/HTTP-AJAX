import React from 'react';
import axios from 'axios';


class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            friend: this.props.friend
        }
    }
    
  
    
      render (){
        const friend = this.props.friend.find( (friend ) => { return this.props.match.params.id == friend.id})
        return (
            
            <div className='friend-wrapper'>
                <div className='friends'>
                    <div className='friend'>
                        <h2>Name: {friend.name}</h2>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                            <button onClick={() => { 
                                this.props.delete(friend.id)
                                this.props.history.push('/friends')}
                                }>X</button>
                    </div>
                </div>
            </div>
            
        );
        }
    }

export default Friend