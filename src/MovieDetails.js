import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '@mui/material/Button';

export function MovieDetails({ movielist }) {
    
  const { id } = useParams();

  let movie = movielist[id];

  const history = useHistory();
  return (
    <div>
      <h2>Movie Name: {movie.name}</h2>
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
        <Button
          className="addbtn"
          variant="contained"
          style={{ width: "50px", margin: "20px" }}
          onClick={() => history.goBack()}>Back</Button>
      </div>

    </div>
  );
}
