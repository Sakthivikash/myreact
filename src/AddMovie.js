import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { movielist } from './movielist';
import { Movieslist } from './Movieslist';

export function AddMovie() {


  const [list, setList] = useState(movielist);

  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const [summary, setsummary] = useState("");
  const [direct, setdirect] = useState("");
  const [music, setmusic] = useState("");
  const [rating, setrating] = useState("");
  return (
<div>
    <div className='inputdata'>
      <div className='inputs'>
        <TextField id="outlined-basic" label="Enter the image URL"
          onChange={(event) => setimage(event.target.value)} variant="outlined" /> <br />
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

      </div>
      <div id='addbtn'>
        <Button className="addbtn" variant="contained" onClick={() => {
          const addmovie = {
            name: name,
            image: image,
            summary: summary,
            director: direct,
            music: music,
            rating: rating
          };
          setList([addmovie, ...list]);
          
        }}>Add the Movie</Button>
      </div>
     </div>
    <Movieslist list={list}/>
</div>
  );
}
