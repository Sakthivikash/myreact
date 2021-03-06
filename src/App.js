import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { Movieslist } from "./Movieslist";
import { Addcolor } from "./Addcolor";
import { TicTacToe } from "./TicTacToe";
import { NotFound } from "./NotFound";
import { AddMovie } from "./AddMovie";
import { MovieDetails } from "./MovieDetails";
import { EditMovie } from "./EditMovie";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function App() {
  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "none", minHeight: "100vh" }} elevation={4} >
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                MoviesHub</Typography>
              <Button color="inherit" onClick={() => history.push("/")}> Home </Button>
              <Button color="inherit" onClick={() => history.push("/movieslist")}>  Movies</Button>
              <Button color="inherit" onClick={() => history.push("/addmovie")}>AddMovie</Button>
              <Button color="inherit" onClick={() => history.push("/colorgame")}> ColorGame</Button>
              <Button color="inherit" onClick={() => history.push("/tic-tac-toe")}> TicTacToe</Button>
              <Button color="inherit"
                startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                onClick={() => setMode(mode === "light" ? "dark" : "light")
                }>{mode === "light" ? "dark" : "light"} mode
              </Button>
            </Toolbar>
          </AppBar>

          <hr />

          <Switch>
            {/* Each route is case, eg. - case '/about': */}
            {/* Match url display the below component */}

            <Route path="/movieslist"><Movieslist /></Route>
            <Route path="/movies/:id"><MovieDetails /></Route>
            <Route path="/addmovie"><AddMovie /></Route>
            <Route path="/movie/edit/:id"><EditMovie /></Route>
            <Route path="/colorgame"><Addcolor /> </Route>
            <Route path="/tic-tac-toe"><TicTacToe /> </Route>
            <Route exact path="/"> <Home /> </Route>
            <Route path="**"><NotFound /> </Route>
          </Switch>

        </div>
      </Paper>
    </ThemeProvider>
  );
}
function Home() {
  return (
    <div className="box">
      <h1>Home, Welcome All to the Movie App</h1>
    </div>
  );
}

