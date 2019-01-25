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
        const axios = require('axios');
        console.log("called delete ");
        let url = "http://localhost:5000/friends/" + this.props.friend.id;
        axios.delete(url)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        window.location.reload();
    }

    updateFriend = (event) => {
        const axios = require('axios');
        console.log("put delete ");
        let url = `http://localhost:5000/friends/ ${this.props.friend.id}`;
        let friend = {
            name:this.state.inputName,
            age:this.state.inputAge,
            email:this.state.inputEmail
        }
        axios.put(url, friend)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.setState({inputName:"",inputAge:null,inputEmail:null});
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