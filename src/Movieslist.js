import { movielist } from "./movielist";
import { useState } from "react";
import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function Movieslist({ list }) {
  console.log(list);

  const [mvlist, setmvlist] = useState(list);
 
  return (
    <div>
      <h2 className="title">MOVIES LIST</h2>
      <div className="container">
        {mvlist.map(
          ({ name, image, summary, director, music, rating }, index) => (
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
                  onClick={() => {
                    const copyList = [...mvlist];
                    copyList.splice(index, 1);
                    setmvlist(copyList);
                    console.log(copyList);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              }
              editbutton={
                <IconButton
                aria-label="edit"
                size="large"
                color="primary"
                  onClick={() => {
                    console.log(index);
                  }}
                >
                <EditIcon />
                </IconButton>
              }
              id={index}
            />
          )
        )}
      </div>
    </div>
  );
}
