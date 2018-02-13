import React from 'react';
import axios from 'axios';
// import FormComp from './FormComponent';

class Friends extends React.Component {








    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <ul className="friend-grid">

                    {this.state.friends.map(friend => {
                        return (
                            <li key={friend.id} className="friend">
                                <div className="friend-name">{friend.name}</div>
                                <div className="friend-age">{`Age: ${friend.age}`}</div>
                                <div className="friend-email">{`Email: ${friend.email}`}</div>
                            </li>
                        );
                    })}
                    <li key="liKey" className="friend">
                        <form>
                            <div className="friend-name">Name:
                                <input value={this.state.name} onChange={this.handleChange} name="name"  type="text" placeholder="name"/>
                            </div>
                            <div className="friend-age">Age:
                                <input value={this.state.age} onChange={this.handleChange} name="age"  type="text" placeholder="age"/>
                            </div>
                            <div className="friend-email">Email:
                                <input value={this.state.email} onChange={this.handleChange} name="email"  type="text" placeholder="email"/>
                            </div>
                            <input onClick={this.handleSubmit} type="button" value="Save" />
                        </form>
                    </li>
                </ul>
                <br/><br/><br/>
            </div>
        );
    }

}

export default Friends;
