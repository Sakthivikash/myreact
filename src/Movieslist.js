import { movielist } from "./movielist";
import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./global";


export function Movieslist() {
  
const [mvlist, setMvList] = useState([]);
const history= useHistory();
 
  // useEffect(() => {
   
  //   return fetch(API,{
  //     method: "GET",
  //   }) // promise
  //     .then((mvs) => mvs.json()) // Response object
  //     .then((data) => setMvList(data));
     
  // }, []);

  const getMovies = () => {
    fetch(API, 
    {method: "GET",}) // promise
    .then((data) => data.json()) // Response object
    .then((mvs) => setMvList(mvs));};

    useEffect(() => getMovies(), []);

    // Delete movie -> Refresh data
    const deleteMovie = (id) => {
      fetch(`${API}/${id}`,
       {method: "DELETE",})
       .then(() => getMovies());
      };
 
 
  return (
    <div className="box">
      <h1 className="title">MOVIES LIST</h1>
      <div className="container">
        {mvlist.map(
          ({ name, image, summary, director, music, rating,id }, index) => (
            <Movie
            key={index}
              name={name}
              image={image}
              summary={summary}
              director={director}
              music={music}
              rating={rating}
              deletebutton={
                <IconButton
                  aria-label="delete"
                  style={{marginLeft:"auto"}}
                  size="large"
                  color="error"
                  onClick={() => deleteMovie(id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
              editbutton={
                <IconButton
                aria-label="edit"
                size="large"
                color="secondary"
                  onClick={() => 
                   history.push(`/movie/edit/${id}`)
                  }
                >
                <EditIcon />
                </IconButton>
              }
              id={id}
            />
          )
        )}
      </div>
    </div>
  );
}





// Delete movie -> Refresh data


