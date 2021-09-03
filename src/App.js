import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./reset.css"
import "./App.css";
import { useState } from "react";
import TopBar from "./components/Top and Bottom Bars/TopBar.js";
import BottomBar from "./components/Top and Bottom Bars/BottomBar";
import MoviesList from "./components/MoviesList/MoviesList.js";
import SessionList from "./components/SessionList/SessionList.js";
import SeatsSelection from "./components/SeatsSelection/SeatsSelection.js";
import SuccessfulPurchase from "./components/SuccessfulPurchase/SucessfulPurchase.js"

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState({})
  const [selectedSession, setSelectedSession] = useState({day:""})
  const [selectedSeats, setSelectedSeats] = useState({ids:[], compradores:[], names:[]})

  function selectAvailableSeat ({name:seatName, id:seatId, seatClass}) {
    if (seatClass === "unavailable") {
      alert("Este assento não está disponível!");
      return
    } else if (seatClass === "available") {
      const newSelectedSeats = {...selectedSeats};
      newSelectedSeats.ids.push(seatId);
      newSelectedSeats.ids.sort((a,b) => a-b);
      newSelectedSeats.names.push(Number(seatName));
      newSelectedSeats.names.sort((a,b) => a-b);
      setSelectedSeats(newSelectedSeats);
    } else if (seatClass === "selected") {
      const newSelectedSeats = {...selectedSeats};
      newSelectedSeats.ids = newSelectedSeats.ids.filter( savedId => savedId !== seatId);
      newSelectedSeats.names = newSelectedSeats.names.filter( savedName => savedName !== Number(seatName));
      setSelectedSeats(newSelectedSeats);
    }


  }
  return (
    <Router>
      <TopBar />
      <BottomBar movie={selectedMovie} session={selectedSession}/>
      <Switch>
        <Route path = "/" exact>
          <MoviesList />
        </Route>
        <Route path = "/filme/:movieId" exact>
          <SessionList selectedMovie = {selectedMovie} setSelectedMovie = {setSelectedMovie}/>
        </Route>
        <Route path = "/sessao/:sessionId" exact>
          <SeatsSelection 
            selectedSession = {selectedSession}
            setSelectedSession = {setSelectedSession}
            selectedSeats = {selectedSeats}
            selectAvailableSeat = {selectAvailableSeat}
          />
        </Route>
        <Route path = "/sucesso" exact>
          <SuccessfulPurchase />
        </Route>
      </Switch>
    </Router>
  );
}