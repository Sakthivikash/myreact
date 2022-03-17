import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export function Movie({ name, image, summary, director, music, rating,deletebutton,editbutton, id }) {
  let [like, setlike] = useState(0);
  let [deslike, setdeslike] = useState(0);
  const styles = {
    color: rating >= 7.5 ? "green" : "red",
  };
  const [show, setshow] = useState(true);
  const history = useHistory();

  return (
    <Card id="main">
      <div className="image">
        <img className="img" src={image} alt="profileimg" />
      </div>
      <CardContent id="content">
        <h2>{name}</h2>
        <span>
          <IconButton aria-label="toggle-summary" color='primary' onClick={() => setshow(!show)}>
            {!show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          {!show ? <p className="sum"><b>Summary:</b>{summary}</p> : null}
          <IconButton 
          aria-label="toggle-summary" 
          color='primary' 
          onClick={() => history.push(`/movies/${id}`)}>
            <InfoIcon />
          </IconButton>
        </span>

        <div><b>Director:</b>{director}</div>
        <div><b>Music:</b>{music}</div>
        <div><b>Rating: <i class="fa fa-star"></i> </b><span style={styles}>{rating}</span></div>
        <CardActions className='btn'>
          <div>
            {/* like button */}
            <IconButton aria-label="delete" className='like' color="primary" onClick={() => { setlike(like + 1); }}>
              <Badge badgeContent={like} color="primary">
                <i class="fa fa-thumbs-up"></i>
              </Badge>
            </IconButton>
          </div>
          <div>
          {/* deslike button */}
            <IconButton aria-label="delete" className='deslike' color='error' onClick={() => { setdeslike(deslike + 1); }}>
              <Badge badgeContent={deslike} color="error">
                <i class="fa fa-thumbs-down"></i>
              </Badge>
            </IconButton>


          </div>
          {deletebutton} {editbutton}
        </CardActions>
      </CardContent>
    </Card>
  );

}
{ /* <IconButton aria-label="delete" size="large" color="error"
            onClick={()=> console.log( )}>
              <DeleteIcon fontSize="inherit" />
</IconButton> */}
            
                  
