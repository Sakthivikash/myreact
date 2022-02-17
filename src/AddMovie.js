import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./global";

export function AddMovie() {

  const history= useHistory();

  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const [summary, setsummary] = useState("");
  const [direct, setdirect] = useState("");
  const [music, setmusic] = useState("");
  const [rating, setrating] = useState("");
  const [trailer, setTrailer] = useState("");
  return (
<div className='box'>
<h1 className="title">Add The New Movie</h1>
    <div className='inputdata'>
      <div className='inputs'>
        <TextField id="outlined-basic" label="Enter the image URL"
          onChange={(event) => {
            setimage(event.target.value); 
            formik.handleChange;
            }} 
            onBlur={formik.handleBlur}
            variant="outlined" /> <br />
        <TextField id="outlined-basic" label="Enter the movie name" variant="outlined"
          onChange={(event) => setname(event.target.value)} /><br />
        <TextField id="outlined-basic" label="Enter the movie summary" variant="outlined"
          onChange={(event) => setsummary(event.target.value)} /><br />
        <TextField id="outlined-basic" label="Enter the director name"
          onChange={(event) => setdirect(event.target.value)} variant="outlined" /><br />
        <TextField id="outlined-basic" label='Enter the music director name'
          onChange={(event) => setmusic(event.target.value)} variant="outlined" />  <br />
        <TextField id="outlined-basic" label='Enter the rating of the movie'
          onChange={(event) => setrating(event.target.value)} variant="outlined" /><br />
        <TextField id="outlined-basic" label='Enter the trailer of the movie'
          onChange={(event) => setTrailer(event.target.value)} variant="outlined" /><br />

      </div>
      <div id='addbtn'>
        <Button className="addbtn" variant="contained" onClick={() => {
          const newMovie = {
            name: name,
            image: image,
            summary: summary,
            director: direct,
            music: music,
            rating: rating,
            trailer: trailer
          };
          // setList([addmovie, ...list]);
          fetch(API, {
            method: "POST",body: JSON.stringify(newMovie),
            headers: {"Content-Type": "application/json",},})
            .then(() => history.push("/movieslist"))
          
        }}>Add the Movie</Button>
      </div>
     </div>
    {/* <Movieslist list={list}/> */}
</div>
  );
}
