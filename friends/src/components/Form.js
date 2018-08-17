import React from 'react';
import axios from 'axios';



export default class Form extends React.Component {
      constructor(){
        super()
        this.state = {
            friends: [],
            name: null,
            age: null,
            email: null
        };
    
    }


    change = event => {
        this.setState({ 
            [event.target.name]: event.target.value
            
        });
        console.log("change", event.target.value)
    } 


    add = event => {
        const URL = 'http://localhost:5000/friends';
            // event.preventDefault();
    
        const user = {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email,
            }

    
         axios
            .post(URL, user)
            .then(response => { console.log("post", response.data)
                this.setState({
                    friends: response.data
                });
            });
    };

    
   
  

    
      



    render(props){
        return (
            
            <form onSubmit={this.add}>
              <input type="text" name="name" onChange={this.change} placeholder="Enter Name" ></input>
              <input type="number" name="age" onChange={this.change} placeholder="Enter Age" ></input>
              <input type="email" name="email" onChange={this.change} placeholder="Enter Email" ></input>
              <button type="submit">.push()</button>
              
            </form>
            
        )
    }


}
