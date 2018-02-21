import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
    render() {
        return (
            <div>
                { this.props.friends.map((card) => {
                    return (
                    <ul key={card.id} className="flc">
                        <li className="flc__name">
                            <button onClick={() => {this.props.onX(card.id)}}>X</button>
                            {card.name}</li>
                        <li className="flc__age">{card.age}</li>
                        <li className="flc__email">{card.email}</li>
                        <li>
                        <hr />
                        <form className="flc__form" onSubmit={()=>{this.newDeetsSubmitHandler(card.id)}}>
                            <label>Update Name: </label>
                            <input type="text" name="name" value={this.name} onChange={this.deetsChangeHandler} placeholder="name"/>
                            <label>Update Age: </label>
                            <input type="number" name="age" value={this.age} onChange={this.deetsChangeHandler} placeholder="age"/>
                            <label>Update Email: </label>
                            <input type="email" name="email" value={this.email} onChange={this.deetsChangeHandler} placeholder="email"/>
                            <button type="submit">update</button>
                        </form>
                        </li>
                    </ul>
                    )
                })}
            </div>
        )
    }
    deetsChangeHandler = (event) => {
        let { name, value } = event.target;
    
        this.setState({ [name]: value });
        
        if (event.target.type === 'number') {
            value = Number('number')
        }
        console.log('I am changing my deets: ', this)

    }
    newDeetsSubmitHandler = id => {
        const endpoint = `http://localhost:5000/friends/${id}`;
        axios.put(endpoint)
        .then(response => this.setState({ friends: response.data}))
        .then(response => this.getFriends())
        .catch(() => {
          console.error('error deleting')
        })
      }
}

export default FriendsList;