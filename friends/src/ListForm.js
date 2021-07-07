import React from 'react'; 

const ListForm =(props)=>{
    return(
        <div className="form-input">
        <form onSubmit ={this.addNewFriend}>
          <input type="text" onChange={this.handleChange} value={props.name} name="name" placeholder="Name" />
          <input type="Number" onChange={this.handleChange} value={props.age}  name="age" placeholder="Age" />
          <input type="email" onChange={this.handleChange} value={props.email}  name="email" placeholder="E-mail" />
          <button onClick={props.handleAddNewFriend}>Add New Friend</button>
          <button onClick={props.handleEditFriend}>Edit Friend</button>
          <button onClick={props.handleDeleteFriend}>Delete Friend</button>
        </form>
      </div>
    )
}
export default ListForm; 

