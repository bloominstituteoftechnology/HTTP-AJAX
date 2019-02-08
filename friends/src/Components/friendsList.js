import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
    constructor(){
        super ();
    this.state = {
        friends:[],
        friend:[]
    }
}

        componentDidMount(){
            axios.get('http://localhost:5000/friends')
              .then(response => {
                console.log(response);
                this.setState({friends: response.data});
              })
              .catch(err => {
                console.log(err);
              });

        this.onFormSubmit = e => {
            e.preventDefault();
            this.setState ({
                friends:[
                    ...this.state.friends,
                    {name:'Lambda',age:40,email:'tom'}
                ],
                friend:''
            })
            e.target.reset();
        }
          };
        
        
          render () {
            return( <div><div>{this.state.friends.map(
              friend => {return <div key={friend.id}>{`${friend.name} ${friend.age} ${friend.email}`}</div>
           
              }
            )}</div>
             <form onSubmit={this.onFormSubmit}>
                    <input id="" type="text" placeholder="Name" onChange={e=>this.setState({friend:e.target.value})} />
                    <input id="" type="text" placeholder="Age" onChange={e=>this.setState({friend:e.target.value})} />
                    <input id="" type="text" placeholder="Email" onChange={e=>this.setState({friend:e.target.value})} />
                    </form>
           
            {console.log (this.state)}
            </div>)
           }
}
  export default FriendsList;