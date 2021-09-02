import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./reset.css"
import "./App.css";
import TopBar from "./components/Top and Bottom Bars/TopBar.js";
import BottomBar from "./components/Top and Bottom Bars/BottomBar";
import MoviesList from "./components/MoviesList/MoviesList.js";
import SessionList from "./components/SessionList/SessionList.js";
import SeatsSelection from "./components/SeatsSelection/SeatsSelection.js";
import SuccessfulPurchase from "./components/SuccessfulPurchase/SucessfulPurchase.js"

export default function App() {
  return (
    <Router>
      <TopBar />
      <BottomBar movieName = "" movieSession = ""/>
      <Switch>
        <Route path = "/" exact>
          <MoviesList />
        </Route>
        <Route path = "/filme" exact>
          <SessionList />
        </Route>
        <Route path = "/sessao" exact>
          <SeatsSelection />
        </Route>
        <Route path = "/sucesso" exact>
          <SuccessfulPurchase />
        </Route>
      </Switch>
    </Router>
  );
}