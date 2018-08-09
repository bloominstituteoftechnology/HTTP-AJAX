import React from 'react'; 
import styled from 'styled-components'; 
import {Link} from 'react-router-dom'; 

const DeleteDiv = styled.div `
    padding-left: 30px; 
    padding-bottom: 30px; 
    width: 100%; 
    background: black;
    color: white;
    padding-top: 10px;
    border 1px inset blue;
    a{
        text-decoration: none;
        color: white;
    }
    a:hover{
        color: red;
        text-decoration: underline;
    }
    input{
        margin-bottom: 30px;
    }
    input:hover{
        border: 3px solid blue;
        cursor: pointer; 
    }
    button{
        margin-bottom: 25px;
    }
    button:hover{
        cursor:pointer; 
        background: black;
        color: white;
        height: 30px; 
    }

`;


class FriendPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render () {
        
        return (

            <DeleteDiv>
                <Link to ="/">Return to homepage</Link>
                <h1>Delete Friend</h1>
                <div><h1>{this.props.match.params.name}</h1></div>
                <div><button onClick = {() => this.props.delete( this.props.match.params.name)}>It's not hard to say goodbye just click here</button></div>
                <div>Update Friend Below</div>
                <h1>Name</h1>
                <input placeholder = "Update name.." name = 'name'/>
                <h1>Age </h1>
                <input type="text" placeholder = "Update Age ... " name = 'age'/>
                <h1>Email </h1>
                <input type="text" placeholder = 'Update email..'  name ='email'/>
                <br/>
                <form >
                   <Link to= '/'> <button onClick = {() => this.props.update(this.props.match.params.name)}>Update Friend</button></Link>
                </form>

            </DeleteDiv>
        ); 
    }
}

export default FriendPage; 