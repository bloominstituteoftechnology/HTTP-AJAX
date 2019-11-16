import React, { Component } from 'react';


class EditFriend  extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    editedName: ""	    
    };
  }




  nameEditHandler = event => {
          this.setState({editedName: event.target.value});
  };


//editFriend = friendId => {
  //      const friend = {name:this.state.editedName};
    //    axios.put(`http://localhost:5000/friends/${friendId}`,
      //  friend)
        //.then(response => {
        // console.log("POST RESPONSE", response);
       // this.setState({ friendsData: response.data, editedName: "" });
     // })
     // .catch(error => console.log(error));
  //};




render(){
		return(
		<div>
		<input className="input-field" type="text" placeholder="edit name" value={this.state.editedName} onChange={this.nameEditHandler} />
                    <button className="delete-btn" onClick={()=>this.props.editFriend(this.props.friend.id, this.state.editedName)}>Edit</button>
		       </div>
);
}
}

export default EditFriend;
