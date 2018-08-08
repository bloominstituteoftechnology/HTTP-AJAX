import React, { Component } from 'react';
import axios from 'axios';


class SubmitFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      friends :[]
    }
  }
  friendLister =()=>{
    return this.state.friends.map((e,i)=>{
      return <div id={e.id} key={i} className='friendListRow'>
        <div className='friendsListItem'>
        {e.name}
        </div>
        <div className='friendsListItem'>
        {e.age}
        </div>
        <div className='friendsListItem'>
        {e.email}
        </div>
      </div>
    })
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
  render() {
    return (
     <div>
       <form className='friendSubmitForm' onSubmit={this.pushFriend} >
         <input  className ='friendSubmitFormInput'required placeholder='Name' type='text' id='formName'/>
         <br />
         <input required  className ='friendSubmitFormInput' placeholder='Age' type='number' id='formAge'/>
         <br />
         <input required  className ='friendSubmitFormInput' placeholder='Email' type='text' id='formEmail'/>
         <br />
         <button className ='friendSubmitFormInput'> Test</button>
        </form>

     </div>
    );
  }
}

export default SubmitFriendForm;
