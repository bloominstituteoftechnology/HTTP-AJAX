import React from 'react';
import axios from 'axios';


class UpdateFriends extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            singleFriend: {
                id: "",
                name: "",
                age: "",
                email: ""
            }
        }
    }

    componentDidMount() {
        axios
          .get("http://localhost:5000/friends")
          .then(response => {
                let number = this.props.match.params.id;
                let newNum = parseInt(number, 10);
                let ActualNum = newNum - 1;
                let singleFriend = response.data[ActualNum]

                this.setState({ 
                    singleFriend: {
                        id: singleFriend.id,
                        name: singleFriend.name,
                        age: singleFriend.age,
                        email: singleFriend.email
                    }
                 })
          })
          .catch( err => console.log("DIDN'T GET INFO ERROR!!!"))
      }


    handleChange = e => {
        this.setState({
            singleFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        });
    }

    update = (event) => {
        event.preventDefault();
        // console.log(this.props)
        this.props.update();
        // console.log(this.state.singleFriend)
    }

    render() {
        return (
            <div>HI
                <form onSubmit= {this.update}>
                   Name: <input
                        type="text"
                        name = "name"
                        onChange = {this.handleChange}
                        value = {this.state.singleFriend.name}></input>
                    <br/>

                    Age: <input
                        type="text"
                        name = "name"
                        onChange = {this.handleChange}
                        value = {this.state.singleFriend.age}></input>
                    <br/>

                    Email: <input
                        type="text"
                        name = "name"
                        onChange = {this.handleChange}
                        value = {this.state.singleFriend.email}></input>

                <button>Update</button>
                </form>
            </div>

        )
    }
}

export default UpdateFriends;