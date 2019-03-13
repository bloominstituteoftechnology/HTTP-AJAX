import React from 'React';

class FriendForm extends Component {
    constructor() {
        super();
        this.state = {  
            addName: '',
            addAge: '',
            addEmail: ''
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                [e.target.name]: e.target.value
            }
        })

        handleSubmit = e => {
            e.preventDefault();
            let newFriend = {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
            }

            axios
                .post('http://localhost:5000/friends', newFriend)
                .then(response => {
                    this.setState({ friend: response.friend})
                })
                .catch(err => {console.log('Mistake made!', err)})
           
        }

    render() { 
        return ( 
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <h1>Add Friend</h1>
                    <input 
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={this.handleChange}
                        vaule={this.state.friend.name}
                        />
                    <input 
                        type='text'
                        name='age'
                        placeholder='Age'
                        onChange={this.handleChange}
                        value={this.state.friend.age}
                        />
                    <input 
                        type='text'
                        name='email'
                        placeholder='email'
                        onChange={this.handleChange}
                        value={this.state.friend.email}
                        />  
                    <button type='submit'>
                        Add Friend
                    </button>
            
                </form>
            </div>
         );
    }
}
 
export default FriendForm;