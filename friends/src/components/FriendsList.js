import React from 'react';
import Friend from './Friend';

const FriendsList = (props) => {
	console.log(props)
	return (
		<div>
		 {props.friends.map(f => (
		 	<Friend key={f.id} f={f} />
	   ))}
		</div>
	)
}

export default FriendsList;

// return (
//       <div className="movie-list">
//         {this.state.movies.map(movie => (
//           <Link key={movie.id} to={`movies/${movie.id}`}>
//             <MovieDetails key={movie.id} movie={movie} />
//           </Link>
//         ))}
//       </div>
//     );