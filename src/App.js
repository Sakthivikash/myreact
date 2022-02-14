
import './App.css';
import { Switch, Route, Link} from "react-router-dom";
import { Movieslist } from './Movieslist';
import { Addcolor } from './Addcolor';
import { TicTacToe } from './TicTacToe';
import { NotFound } from './NotFound';
import { AddMovie } from './AddMovie';
import {movielist} from './movielist';
import { MovieDetails } from './MovieDetails';



export default function App() {

  return (
   
  <div className="App">
    <div id='navbar'>
      <span id="logo">MOVIES HUB</span>
      <ul className="links">
        <li>
          <Link id="link" to="/">Home</Link>
        </li>
        <li>
          <Link id="link" to="/movieslist">Movies</Link>
        </li>
        <li>
          <Link id="link" to="/addmovie">Add The Movie</Link>
        </li>
        <li>
          <Link id="link" to="/colorgame">Color Game</Link>
        </li>
        <li>
          <Link id="link" to="/tic-tac-toe">Tic Tac Toe</Link>
        </li>
        
      </ul>
    </div>
      
     <hr />

     <Switch>
      {/* Each route is case, eg. - case '/about': */} 
      {/* Match url display the below component */}
        
        <Route path="/movieslist"><Movieslist list={movielist} /></Route>
        <Route path="/movies/:id"><MovieDetails movielist={movielist} /></Route>
        <Route path="/addmovie"><AddMovie /></Route>
        <Route path="/colorgame"><Addcolor /></Route>
        <Route path="/tic-tac-toe"><TicTacToe /></Route>
        <Route exact path="/"><Home /></Route>  
        <Route path="**"><NotFound /></Route>      
      </Switch>
  </div>
  
  );
}
function Home() {
  return (
    <div>
      <h1>Home, Welcome All to the Movie App</h1>
      {/* <TableComp /> */}
    </div>
  );
}


