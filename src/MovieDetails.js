import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./global";
import Button from '@mui/material/Button';

export function MovieDetails({ movielist }) {
    
  const { id } = useParams();
  const [movie, setmovie] = useState({});

  const getMovies = () => {
    fetch(`${API}/${id}`, 
    {method: "GET",}) // promise
    .then((data) => data.json()) // Response object
    .then((mvs) => setmovie(mvs))
    .catch((err) => console.log(err));
  };
  
  useEffect(() => getMovies(), []);


  const history = useHistory();
  return (
    <div className="box">
      <h1>Movie Name: {movie.name}</h1>
      <iframe
        width="100%"
        height="600px"
        src={movie.trailer}
        allowfullscreen></iframe>
      <div className='movie-details'>
        <p className="sum"><b>Summary:</b>{movie.summary}</p>
        <div><b>Director:</b>{movie.director}</div>
        <div><b>Music:</b>{movie.music}</div>
        <div><b>Rating: <i class="fa fa-star"></i> </b>
          <span style={{ color: movie.rating >= 7.5 ? "green" : "red" }}
          >{movie.rating}</span></div>
      </div>
      <Button variant="contained"
          style={{ width: "200px", margin: "20px" }}
          onClick={() => history.goBack()}>Back</Button>
    </div>
  );
}
