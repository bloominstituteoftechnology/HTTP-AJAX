// import React from 'react';
// import axios from 'axios';

// export default class Form extends React.Component {
//     constructor(){
//         super()
//         // this.state ={
//         //     friends: []
//         // };
    
//     }
    
//     handleChange = event => {
//         this.setState({ friends: "test"});
//         console.log(event.target.value)
//     }   


//     refreshPage = event => {
//         window.location.reload();
//     } 


//     handleSubmit = event => {
//         event.preventDefault();

//         const user = {
//             name: this.state.name
//         }

    
    
//         axios.post('http://localhost:5000/friends', {user})
//         .then(res => {
//             console.log(res.data);
//         });
//     };
    
    

    



//     render(){
//         return (
//             <form onSubmit={this.handleSubmit}>
//               <input type="text" name="name" onChange={this.handleChange} placeholder="Enter Name" ></input>
//               {/* <input type="number" placeholder="Enter Age"></input> */}
//               <button type="submit" onClick={this.refreshPage}>.push()</button>
//             </form>
//         )
//     }


//}