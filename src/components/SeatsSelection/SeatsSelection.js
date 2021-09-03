import "./SeatsSelection.css"
import {Link, useParams} from "react-router-dom"
import {getSeatsForSession} from "../../serverFunctions.js"
import { useEffect } from "react"

export default function SeatsSelection({selectedSession, setSelectedSession,selectedSeats,selectAvailableSeat, changeClientData}) {
    const sessionId = useParams().sessionId
    useEffect(() => {
        getSeatsForSession(sessionId)
            .then( resp => setSelectedSession(resp.data))
        }
    ,[]);

    if(!selectedSession.seats) {
        return <h1>carregando...</h1>
    }
    const examples = [
        {description: "Selecionado", seatClass:"selected"},
        {description: "Disponível", seatClass:"available"},
        {description: "Indisponível", seatClass:"unavailable"}
    ]
    return (
        <section className = "seats-screen">
            <p>Selecione o(s) assento(s)</p>
            <div className="session-seats">
                {selectedSession.seats.map( ({name,id, isAvailable},index) => 
                    <Seat 
                        key = {index}
                        name = {name}
                        id = {id} 
                        isAvailable = {isAvailable}
                        selectedSeats = {selectedSeats}
                        selectAvailableSeat = {selectAvailableSeat}
                    /> )}
            </div>
            <div className="seats-explanation">
                {examples.map( ({description,seatClass},index) => 
                    <SeatExplanation 
                        key = {index}
                        description = {description}
                        seatClass = {seatClass}
                    />)}
            </div>
            <div className="clients-info">
                {selectedSeats.clients.map( ({seatName},index) => 
                    <ClientsData
                        key = {index}
                        seatName = {seatName}
                        changeClientData = {changeClientData}
                    /> )}
            </div>
            <button className="forward">
                Reservar assento(s)
            </button>
        </section>
    );
}

function Seat ({name, id, isAvailable, selectedSeats, selectAvailableSeat}) {
    let seatClass;
    if (selectedSeats.ids.includes(id)) {
        seatClass = "selected";
    } else if (isAvailable) {
        seatClass = "available";
    } else {
        seatClass = "unavailable";
    }
    return (
        <button onClick = {() => selectAvailableSeat({name, id, seatClass})}>
            <div className={`seat ${seatClass}`}>{name}</div>
        </button>
    );
}

function SeatExplanation ({description,seatClass}) {
    return (
        <div>
            <div className={`seat ${seatClass}`}></div>
            {description ? <span>{description}</span> : ""}
        </div>
    );
}

function ClientsData({seatName,changeClientData}) {
    return (
        <div className="client-data">
            <p>
                Nome do comprador do assento {seatName}:
            </p>
            <input onChange = { (e) => changeClientData( "name", e.target.value, seatName )} placeholder= "Digite seu nome..." />
            <p>
                CPF do comprador do assento {seatName}:
            </p>
            <input onChange = { (e) => changeClientData( "cpf", e.target.value, seatName )} placeholder= "Digite seu CPF..." />
        </div>
    );
}