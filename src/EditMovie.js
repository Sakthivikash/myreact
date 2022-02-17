import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { movielist } from './movielist';
import { useParams, useHistory } from "react-router-dom";
import { API } from "./global";

export function EditMovie() {

const { id } = useParams();
const [movie, setmovie] = useState(null);

const getMovies = () => {
  fetch(`${API}/${id}`, 
  {method: "GET",}) // promise
  .then((data) => data.json()) // Response object
  .then((mvs) => setmovie(mvs))
  .catch((err) => console.log(err));
};

  useEffect(() => getMovies(), []);
  
  return (
    <div>{movie ? <EditMovieForm movie={movie} /> : <h1>Loading...</h1>}</div>
  );
}

function EditMovieForm({movie}){
  const history= useHistory();

  const [image, setimage] = useState(movie.image);
  const [name, setname] = useState(movie.name);
  const [summary, setsummary] = useState(movie.summary);
  const [direct, setdirect] = useState(movie.director);
  const [music, setmusic] = useState(movie.music);
  const [rating, setrating] = useState(movie.rating);
  const [trailer, setTrailer] = useState(movie.trailer);

  return(
    <div className='box'>
      <h1 className="title">Edit The Movie Here</h1>
      <div className='inputdata'>
      <div className='inputs'>
        <TextField id="outlined-basic" label="Enter the image URL" value={image}
          onChange={(event) => setimage(event.target.value)} variant="outlined" /> <br />
        <TextField id="outlined-basic" label="Enter the movie name" variant="outlined"
        value={name}
          onChange={(event) => setname(event.target.value)} /><br />
        <TextField id="outlined-basic" label="Enter the movie summary" variant="outlined"
        value={summary}
          onChange={(event) => setsummary(event.target.value)} /><br />
        <TextField id="outlined-basic" label="Enter the director name"
        value={direct}
          onChange={(event) => setdirect(event.target.value)} variant="outlined" /><br />
        <TextField id="outlined-basic" label='Enter the music director name'
        value={music}
          onChange={(event) => setmusic(event.target.value)} variant="outlined" />  <br />
        <TextField id="outlined-basic" label='Enter the rating of the movie'
        value={rating}
          onChange={(event) => setrating(event.target.value)} variant="outlined" /><br />
          <TextField id="outlined-basic" label='Enter the trailer of the movie'
        value={trailer}
          onChange={(event) => setTrailer(event.target.value)} variant="outlined" /><br />

      </div>
      <div id='addbtn'>
        <Button className="addbtn" variant="contained" color="success" onClick={() => {
         const updatedMovie = {
          name: name,
          image: image,
          summary: summary,
          director: direct,
          music: music,
          rating: rating,
          trailer: trailer
        };
        // 1. method must be PUT & pass id
        // 2. body - JSON data
        // 3. headers - JSON data
        // After PUT is complete ->  movie to /movies
        fetch(`${API}/${movie.id}`, {
          method: "PUT",
          body: JSON.stringify(updatedMovie),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(() => history.push("/movieslist"));
        }}>Edit Movie</Button>
      </div>
     </div>
  </div>
  )
}
