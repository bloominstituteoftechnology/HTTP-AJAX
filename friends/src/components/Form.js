import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';


const url =
  "http://localhost:5000/friends";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: null,
            email: ''
        }   
    }
    formHandler= (e)=> {
        e.preventDefault();
        if (this.state.email.includes('@')) {
            this.setState(()=> ({
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
            }));
            axios.post(url, this.state)
            .then(function (response) {
                console.log(response.data);
                // this.setState(()=>({friends:response.data}))
            })
            .catch(function (error) {
                console.log(error);
            });
            window.location.reload();
        } else {
            alert('please enter valid email')
        }
    }
    changeHandler= (e)=> {
        if (e.target.placeholder === 'name'){
            this.setState({name : e.target.value});
        } if (e.target.placeholder === 'age'){
            this.setState({age : e.target.value});
        } if (e.target.placeholder === 'email') {
            this.setState({email : e.target.value});
        } 
        
    }
    render(){
        return(
            <form onSubmit={this.formHandler}>
                <h4>Taking Friends Applications</h4>
                <input type= "text" placeholder="name" onChange={this.changeHandler} />
                <input type= "text" placeholder="age" onChange={this.changeHandler}/>
                <input type= "text" placeholder="email" onChange={this.changeHandler}/>
                <button>don't hold your breath</button>
            </form>
        )
    }
}

Form.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    email: propTypes.string
}

export default Form;