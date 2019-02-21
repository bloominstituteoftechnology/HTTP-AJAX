import React, {Component} from 'react';
import './App.css';
import Axios from "axios";
import Friends from "./components/Friends.";
import Form from "./components/Form";


class App extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            newFriend: {
                name: '',
                age: '',
                email: ''
            },
            editFriend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/friends')
            .then(response => {
                this.setState({data: response.data})
            })
            .catch(error => console.log(error))
    }

    handleChange = event => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [event.target.name]:event.target.value
            }
        });
        console.log(this.state.newFriend)
    };

    addNewFriend = (event) => {
        event.preventDefault()
        Axios.post('http://localhost:5000/friends', this.state.newFriend)
            .then(response => {
                console.log(response)
                this.setState({data:response.data})
            })
            .catch(error =>{
                console.log('error',error)
            })
        this.setState({
            newFriend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }
    
    deleteFriend = id => {
        Axios.delete(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState({data:response.data})
            })
            .catch(error =>{
                console.log('error',error)
            })
    }

    handleChange2 = event => {
        this.setState({
            editFriend: {
                ...this.state.editFriend,
                [event.target.name]:event.target.value
            }
        });
        console.log(this.state.newFriend)
    };


    editFriend = (id) => {
        Axios.put(`http://localhost:5000/friends/${id}`, this.state.editFriend)
            .then(response => {
                this.setState({data:response.data})
            })
            .catch(error =>{
                console.log('error',error)
            })
        console.log(this.state.editFriend)
    }

    render() {
        return (
            <div className="App">
                <Friends handleChange2={this.handleChange2} data={this.state.data} deleteFriend={this.deleteFriend} editFriend={this.editFriend} editFriend2={this.editFriend}/>
                <Form handleChange={this.handleChange} {...this.state.newFriend} addNewFriend={this.addNewFriend}/>
            </div>
        );
    }
}

export default App;
