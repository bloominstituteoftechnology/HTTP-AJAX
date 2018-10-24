import React, { Component } from 'react';
import Header from './Header';
import Friend from './Friend';

class Form extends Component {
    render() {
        console.log(this.props.friends);
        return (
            <div>
               <form className="form">
                  <Header />  
                  {this.props.friends.map( friend => <Friend className="friend" key={friend.id} friend={friend} />)}
               </form> 
            </div>
        );
    }
}

export default Form;
