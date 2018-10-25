// import React from 'react';

// class Form extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             friends: [],
//             name: '',
//             age: '',
//             email: ''}
//          }

//          componentDidMount() {
//             axios
//               .get('http://localhost:5000/friends')
//               .then(response => {
//                 this.setState({friends: response.data});
//               }
//               )
//               .catch(error => console.log('It\'s over! Turn back now!'))
//           };

//          changeHandler = event => {
//             this.setState({
//               newFriend:{
//                 ...this.state.newFriend,
//               [event.target.name]: event.target.value
//             }})
//           }

//           addNewFriend = event => {
//             axios
//             .post('http://localhost:5000/friends', this.state.newFriend)
//             .then(response => {
//               this.setState({friends: response.data});
//             }
//             )
//             .catch(error => console.log('It\'s over! Turn back now!'))
//         };

//     }
//     render() { 
//         return (  
//             <form>
//             <input 
//                 type='text' 
//                 placeholder='name' 
//                 onChange={props.changeHandler}
//                 value={props.friends.name} >
//             </input> <br/>
    
//             <input 
//                 type='number' 
//                 placeholder='age' 
//                 onChange={props.changeHandler}
//                 value={props.newFriend.age}>
//             </input> <br/>
    
//             <input 
//                 type='text' 
//                 placeholder='email' 
//                 onChange={props.changeHandler}
//                 value={props.newFriend.email}>
//             </input> <br/>
    
//             <button onClick={props.addNewFriend}>
//             Add Friend
//             </button>
//         </form>
//         );
//     }
// }
 



//    export default Form