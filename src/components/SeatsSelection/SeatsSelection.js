import "./SeatsSelection.css"
import {Link, useParams} from "react-router-dom"
import {getSeatsForSession} from "../../serverFunctions.js"
import { useEffect } from "react"

export default function SeatsSelection({selectedSession, setSelectedSession,selectedSeats,setSelectedSeats}) {
    const sessionId = useParams().sessionId
    useEffect(() => {
        getSeatsForSession(sessionId)
            .then( resp => setSelectedSession(resp.data))
        }
    ,[]);

    if(!selectedSession.seats) {
        return <h1>carregando...</h1>
    }

    const sessionSeats = [...selectedSession.seats];
    console.log(sessionSeats)
    const examples = [
        {description: "Selecionado", seatClass:"selected"},
        {description: "Disponível", seatClass:"available"},
        {description: "Indisponível", seatClass:"unavailable"}
    ]
    return (
        <section className = "seats-screen">
            <p>Selecione o(s) assento(s)</p>
            <div className="session-seats">
                {sessionSeats.map( ({name,id, isAvailable},index) => 
                    <Seat 
                        key = {index}
                        name = {name}
                        id = {id} 
                        isAvailable = {isAvailable}
                        selectedSeats = {selectedSeats}
                    /> )}
            </div>
            <div className="seats-explanation">
                {examples.map( ({description,seatClass},index) => <SeatExplanation key = {index} description = {description} seatClass = {seatClass} />)}
            </div>
            <div className="clients-info">
                {[{seatId:1}].map( ({seatId},index) => <ClientsData key = {index} seatId = {seatId} /> )}
            </div>
            <button className="forward">
                Reservar assento(s)
            </button>
        </section>
    );
}

function Seat ({name, id, isAvailable, selectedSeats}) {
    let seatClass;
    if (selectedSeats.ids.includes(id)) {
        seatClass = "selected";
    } else if (isAvailable) {
        seatClass = "available";
    } else {
        seatClass = "unavailable";
    }
    return (
        <div>
            <div className={`seat ${seatClass}`}>{name}</div>
        </div>
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

function ClientsData({seatId}) {
    return (
        <div className="client-data">
            <p>
                Nome do comprador do assento {seatId}:
            </p>
            <input placeholder= "Digite seu nome..." />
            <p>
                CPF do comprador do assento {seatId}:
            </p>
            <input placeholder= "Digite seu CPF..." />
        </div>
    );
}