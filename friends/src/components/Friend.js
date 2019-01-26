import React from "react";
import "./fr.css"

class Friend extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            inputName:this.props.friend.name,
            inputAge: this.props.friend.age,
            inputEmail:this.props.friend.email
        }
    }

    deleteFriend = (event) => {
        this.props.deleteHandler(this.props.friend.id);
    }

    updateFriend = (event) => {
        this.props.updateFriend(
            this.props.friend.id,
            this.state.inputName,
            this.state.inputAge,
            this.state.inputEmail);
        this.setState({inputName:"",inputAge:0,inputEmail:""});
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

    render(){

        return  (
            <div className="myCard">


                <div className="each">
                    <div className="left">Id</div>
                    <div className="update">{this.props.friend.id}</div>
                </div>

                <form>
                <div className="each">
                    <div className="left">Name</div>

                    <input className="update" placeholder={this.props.friend.name} onChange={this.nameHandler}></input>

                </div>
                <div className="each">
                    <div className="left">Age</div>
                    <input className="update" placeholder={this.props.friend.age} onChange={this.ageHandler}></input>

                </div>
                <div className="each">
                    <div className="left">Email</div>
                    <input className="update" placeholder={this.props.friend.email} onChange={this.emailHandler}></input>
                </div>

                    <button  className="del-btn" onClick={this.deleteFriend}>Delete</button>
                <button onClick={this.updateFriend}>Update</button>
                </form>



           </div>
        )


    }





}

export default Friend