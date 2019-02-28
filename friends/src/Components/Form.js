import React from 'react'
import styled from 'styled-components';


//styles
const Formui = styled.form`
display: flex;
flex-direction: column;
align-content: center;
width: 400px;
margin: 5% auto;
border: solid black 2px;
background-color:  #ede1b0 ;
box-shadow: 29px 29px 28px 0px rgba(0,0,0,0.75);
`

const Inp = styled.input `
align-content: center;
border: solid black 1px;
margin: 5px 5%;
`

const Btn = styled.button `
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    margin: 0 8px;
    border: none;
    border-radius: 2px;
    padding: 0 16px;
    min-width: 64px;
    height: 36px;
    vertical-align: middle;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    color: #fff;
    background-color: #1c5d76;
    font-family: 'Roboto', 'Segoe UI', BlinkMacSystemFont, system-ui,
      -apple-system;
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    transition: box-shadow 0.2s;
`

//end styles

class Form extends React.Component{
    constructor(){
        super();
        this.state={
        friend: {
            name:'',
            age: '',
            email: ''
                    }
                    }}
    
    changeHandle = (e) =>{
    this.setState({ 
        friend:{
       [e.target.name]: e.target.value}
    })
    }

    render(){
        return(
          <Formui>
              <h1>Add Buddy</h1>
                xxxxxxxxxxxx
                <Inp name="name" type="text" onChange={this.changeHandle}  placeholder="Name..." value={this.state.friend.name}/>
                <Inp name="age" type="text" onChange={this.changeHandle} placeholder="How old?"  value={this.state.friend.age}/>
                <Inp name="email" type="text" onChange={this.changeHandle} placeholder="Email..."  value={this.state.friend.email}/>
                <Btn onClick={e => this.props.addBuddy(e,this.state.friend)}>
                    Add Buddy</Btn>
                xxxxxxxxxxxx
          </Formui>
      )
  }

}

export default Form;