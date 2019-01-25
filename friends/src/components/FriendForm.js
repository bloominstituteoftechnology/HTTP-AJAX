import React from "react";
import "./FriendForm.css";
import PropTypes  from "prop-types";

class FriendForm extends React.Component{
      constructor(){
          super();
          this.state={
               id:null,
               inputName: "",
               inputAge:null,
               inputEmail: "",




          }

      }
      iHandler=event => {

        this.setState({inputName:event.target.value}) ;
    }
     nameHandler=event => {

        this.setState({inputName:event.target.value}) ;
     }
     ageHandler=event => {
         this.setState({inputAge:event.target.value}) ;
     }
    emailHandler=event=>{
           this.setState({inputEmail:event.target.value})
     }

    idHandler=event=>{
        this.setState({id:event.target.value})
    }
    // changeHandler=event =>{
    //      this.setState({
    //          data: {
    //
    //              ...this.state.myInput,

    //              [event.target.name]:event.target.value,
    //          }
    //
    //      });
    // }

    submitHandler=event =>{
        event.preventDefault();
        console.log("called")
        this.props.handler({id:this.state.id,
                           name:this.state.inputName,
                           age:this.state.inputAge,
                           email:this.state.inputEmail});
        this.setState({inputName:"",inputAge:null,inputEmail:"", id:null});

    }

    render() {
        return (

            <div className="my-form">
                <h2> MY FORM </h2>
               <form onSubmit={this.submitHandler} className="form-body">
                  <input type ="text" placeholder="Id of new friend" name="name"
                         onChange={this.idHandler} className="group"  value={this.state.id}/>
                <input type ="text" placeholder="Add Your Friend name" name="name"
                       onChange={this.nameHandler} className="group"  value={this.state.inputName}/>
                <input type ="number" placeholder="Enter Age"  name="age"
                       onChange={this.ageHandler} className="group"value={this.state.inputAge}/>
                <input type ="text" placeholder="email" name="email"
                       onChange={this.emailHandler} className="group" value={this.state.inputEmail}/>
                <div className="btn" >
                    <button  className="form-btn">Add Friend</button>
                    <button className="form-btn" >Update Friend</button>
                </div>

              </form>
           </div>
        );
    }
}


FriendForm.propTypes={
    myInput:PropTypes.shape({
        name:PropTypes.string,
        age:PropTypes.number,
        email:PropTypes.string
    }),
    nameHandler:PropTypes.func,
    ageHandler:PropTypes.func,
    emailHandler:PropTypes.func

}

export default  FriendForm