import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./reset.css"
import "./App.css";
import TopBar from "./Top and Bottom Bars/TopBar.js";
import BottomBar from "./Top and Bottom Bars/BottomBar";
import MoviesList from "./MoviesList/MoviesList.js"

export default function App() {
  return (
    <Router>
      <TopBar />
      <BottomBar movieName = "" movieSession = "Quinta-feira - 15:00"/>
      <Switch>
        <Route path = "/">
          <MoviesList />
        </Route>

      </Switch>
    </Router>
  );
}