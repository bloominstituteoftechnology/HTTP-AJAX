import React, { Component } from 'react';
import friendCard from "./friendCard";
import axios from 'axios';
import { NavLink } from 'react-router-dom';



export default class App extends Component {
            constructor(props) {
                super(props);
                this.state = {
                friends: []
            };
        }
    }


    render() {
        return (
            <div>
                <h2>FriendsList</h2>
                {this.props.friends.map((friend, index) => {
                    return (
                        <div>
                            <p>Name: {friend.name}</p>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
<MovieDetails key={friends.id} friend={name} />

componentDidMount() {
    axios
         .get('http://localhost:5000/friends')
      .then(response => {
            this.setState(() => ({ friends: response.data }));
```` })
``  .catch(error => {
        console.error('Server Error', error);
      });
 cleamser
 }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
      
    );
  }
}

function MovieDetails({ friend }) {
  const { id } = friend;
  return (
    <NavLink to={`d movie={movie} />
    </NavLink>
  );
}