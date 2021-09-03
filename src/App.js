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
  const [selectedSeats, setSelectedSeats] = useState({ids:[], clients:[]})

  function selectAvailableSeat ({name, id:seatId, seatClass}) {
    if (seatClass === "unavailable") {
      alert("Este assento não está disponível!");
      return
    } else if (seatClass === "available") {
      const newSelectedSeats = {...selectedSeats};
      newSelectedSeats.ids.push(seatId);
      newSelectedSeats.ids.sort((a,b) => a-b);
      newSelectedSeats.clients.push({idAssento: seatId, nome:"", cpf:"", seatName: name});
      newSelectedSeats.clients.sort((a, b) => (a.idAssento > b.idAssento) ? 1 : -1);
      setSelectedSeats(newSelectedSeats);
    } else if (seatClass === "selected") {
      const newSelectedSeats = {...selectedSeats};
      const currentClientName = newSelectedSeats.clients.find( ({seatName}) => seatName = name ).nome
      const currentClientCpf = newSelectedSeats.clients.find( ({seatName}) => seatName = name ).cpf
      if (currentClientName || currentClientCpf) {
        if (!window.confirm("Você tem certeza que deseja desmarcar este assento?")) {
          return
        }
      }
      newSelectedSeats.ids = newSelectedSeats.ids.filter( savedId => savedId !== seatId);
      newSelectedSeats.clients = newSelectedSeats.clients.filter( ( {idAssento} ) => idAssento !== seatId);
      setSelectedSeats(newSelectedSeats);
    }
  }

  function changeClientData ( type, inputValue, currentSeatName ) {
    const newSelectedSeats = {...selectedSeats};
    if (type==="name") {
      newSelectedSeats.clients.find( ({seatName}) => seatName = currentSeatName ).nome = inputValue;
    } else if (type==="cpf") {
      newSelectedSeats.clients.find( ({seatName}) => seatName = currentSeatName ).cpf = inputValue;
    }
    setSelectedSeats(newSelectedSeats);
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
            changeClientData = {changeClientData}
          />
        </Route>
        <Route path = "/sucesso" exact>
          <SuccessfulPurchase />
        </Route>
      </Switch>
    </Router>
  );
}