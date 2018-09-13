import React from 'react';
import axios from 'axios';

class Initial extends React.Component {
    constructor() {
	super();
	this.state = {
	    friends: []
	};
    }
    
    componentDidMount() {
	axios
	    .get('http://localhost:5000/friends/')
	    .then(response => {
		const friends = response.data;
		this.setState({friends});
	    })
	    .catch(err => console.log(err));
    }
    
    render() {
	return (
            <div>
	      <div>
		<a href="http://localhost:3000/form">Form</a>
	      </div>
              <div className="initialTotal">
		{this.state.friends.map(friend => <p key={friend.id} className="initialList">{friend.name} <br/> {friend.email} <br/> {friend.age} </p>)}
	    </div>
		</div>
	);
    }
}
export default Initial;
