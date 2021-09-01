import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./reset.css"
import "./App.css";
import TopBar from "./Top and Bottom Bars/TopBar.js";
import BottomBar from "./Top and Bottom Bars/BottomBar";
import MoviesList from "./MoviesList/MoviesList.js";
import SessionList from "./SessionList/SessionList.js";

export default function App() {
  return (
    <Router>
      <TopBar />
      <BottomBar movieName = "Enola Holmes" movieSession = ""/>
      <Switch>
        <Route path = "/" exact>
          <MoviesList />
        </Route>
        <Route path = "/filme" exact>
          <SessionList />
        </Route>
      </Switch>
    </Router>
  );
}