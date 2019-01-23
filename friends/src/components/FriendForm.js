import React from "react";

class FriendForm extends React.Component{
      constructor(){
          super();
          this.state={
           inputName:"",
            inputAge:0,
            inputEmail:"",

          }

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

    submitHandler=event =>{
        event.preventDefault();
        console.log("called")
        this.props.handler({name:this.state.inputName,age:this.state.inputAge,email:this.state.inputEmail});
        this.setState({inputName:"",inputAge:0,inputEmail:""});

    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type ="text" placeholder="Add Your Friend name" name="name"
                  onChange={this.nameHandler} />
                <input type ="text" placeholder="Age" name="age"
                       onChange={this.ageHandler} />
                <input type ="text" placeholder="email" name="email"
                       onChange={this.emailHandler} />
                <button >Add Friend</button>

            </form>
        );
    }
}

export default  FriendForm