import React, { Component } from 'react';




class OriginalFriends extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         age: '',
         email: ''
      };
      //console.log(this.props);
   }

   handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
   };

   render() {
      return (
         <div>
            <h1>Friends:</h1>
            <ul className="friends">
               {this.props.originalState.friends.map(friend => {
                  return (
                     <li key={friend.id} className="friend">
                        <p>Name: {friend.name}</p>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                        <button onClick={() => this.props.delete(friend.id)}>
                           Delete
                        </button>
                        {/* <br />
                        <form
                           onSubmit={this.props.handleSubmit(
                              this.state,
                              friend.id
                           )}
                        >
                           <label>
                              Name:
                              <input
                                 type="text"
                                 defaultValue={friend.name}
                                 name="name"
                                 onChange={this.handleChange}
                              />{' '}
                              Age:
                              <input
                                 type="number"
                                 defaultValue={friend.age}
                                 name="age"
                                 onChange={this.handleChange}
                              />{' '}
                              Email:
                              <input
                                 type="text"
                                 defaultValue={friend.email}
                                 name="email"
                                 onChange={this.handleChange}
                              />
                           </label>
                           <input type="submit" value="Submit" />
                        </form> */}
                     </li>
                  );
               })}
            </ul>
         </div>
      );
   }
}

export default OriginalFriends;