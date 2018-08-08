import React, { Component } from 'react';
import axios from 'axios';


class SubmitFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      friends :[],
      mode:'Input',
      whom:0
    }
  }
  componentDidMount =()=>{
    if(this.props.match.params.id){
      this.setState({
        mode:'Modify', whom: this.props.match.params.id
      })
    }
    
  }
  pushFriend =(e)=>{
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/friends',{
      age: e.target.children[2].value,
      email: e.target.children[4].value,
      name:e.target.children[0].value
    }).then(response => {
     this.props.methodToCall();
    })
    .catch(err => {
      console.log(err);
    });

      e.target.children[4].value =''
      e.target.children[2].value=''
      e.target.children[0].value=''
  }
  deleteFriend = ()=>{
    axios.delete('http://127.0.0.1:5000/friends/' + this.state.whom).then(response => {
     this.props.methodToCall();
     this.props.history.push('/')

    }).catch(err => {
      console.log(err);
    });
  }
  editFriend = (e)=>{
    e.preventDefault();
    axios.put('http://127.0.0.1:5000/friends/'+ this.state.whom,{
      age: e.target.children[2].value,
      email: e.target.children[4].value,
      name:e.target.children[0].value
    }).then(response => {
     this.props.methodToCall();
    })
    .catch(err => {
      console.log(err);
    });

      e.target.children[4].value =''
      e.target.children[2].value=''
      e.target.children[0].value=''
  }
  deleteButton = ()=>{
   if(this.state.mode==='Modify'){
     return <button onClick={this.deleteFriend}  className ='friendSubmitFormInput'>Delete</button>
    }
  }
  render() {
    return (
     <div className='friendForm'>
       <div className='titleForm'> Add a friend to list </div>
       <form className='friendSubmitForm' onSubmit={ this.state.mode ==='Input' ? this.pushFriend:this.editFriend } >
         <input  className ='friendSubmitFormInput'required placeholder='Name' type='text' id='formName'/>
         <br />
         <input required  className ='friendSubmitFormInput' placeholder='Age' type='number' id='formAge'/>
         <br />
         <input required  className ='friendSubmitFormInput' placeholder='Email' type='text' id='formEmail'/>
         <br />
         <button className ='friendSubmitFormInput'> { this.state.mode ==='Input' ? "Submit":"Edit" }</button>
        
        </form>
        {this.deleteButton()}
     </div>
    );
  }
}

export default SubmitFriendForm;
