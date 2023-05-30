import React from "react";
import { Link} from 'react-router-dom';
import "../App.css"
const MovieList = (props)=>{
    return(
        <>
            {props.movies.map((movie, index)=> <div className="movies">
            <Link to={{pathname: `/movies/${movie.title}`,state: { movie },}}>
        <img src={movie.posterURL} alt={movie.title} className="moviecard" />
        <p styles={"display:flex;"}>{movie.title}</p>
      </Link> 
            </div>
                )}

        </>
    )
}
export default MovieList;