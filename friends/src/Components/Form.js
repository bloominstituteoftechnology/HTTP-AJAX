import React from 'react'
import styled from 'styled-components';

const Formui = styled.form`
display: flex;
flex-direction: column;
align-content: center;
width: 400px;
margin: 0 auto;
`

class Form extends React.Component{
    constructor(){
        super();
        this.state={
            addName:''
            ,addAge: ''
            ,addEmail: ''
                    }    }
    nameAdd = e => {
        this.setState({
            addName: e.target.value,
    })}
    ageAdd = e=>{
        this.setState({
            addAge: e.target.value,
        })
    }
    emailAdd =e =>{
        this.setState({
            addEmail: e.target.value,
        })
    }

  render(){
      return(
          <Formui>
              <h1>Add Buddy</h1>
                xxxxxxxxxxxx
                <input type="text" onChange={this.nameAdd}  placeholder="Name..."/>
                <input type="text" onChange={this.addAge} placeholder="How old?" />
                <input type="text" onChange={this.addEmail} placeholder="Email..." />
                xxxxxxxxxxxx
          </Formui>
      )
  }

}

export default Form;