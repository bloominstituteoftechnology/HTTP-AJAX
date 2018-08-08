import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class FriendsList extends React.Component{
    constructor() {
        super();
        this.state={
            friends:[]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/friends').then(res=>this.setState({friends:res.data}));
    }
    delete=(index)=>{
        axios.delete(`http://localhost:5000/friends/${index}`).then(window.location.reload());
    }
    render() {
        return (
            <div>
                {this.state.friends.map((e,i)=>
                    <div key={i} className='card'>
                        <p>Friend number {e.id} information:</p>
                        <p>{e.name}</p>
                        <p>{e.age}</p>
                        <p>{e.email}</p>
                        <p>{e.address}</p>
                        <i className="fas fa-trash-alt" onClick={()=>this.delete(e.id)}></i>
                    </div>
                )}
                <Link to='/'><button className='btn waves-effect waves-light backToFriendForm'>Go To Friends Form</button></Link>
            </div>
        )
    }
}
export default FriendsList;