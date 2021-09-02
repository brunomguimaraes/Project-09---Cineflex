import "./SeatsSelection.css"
import {Link, useParams} from "react-router-dom"
import {getSeatsForSession} from "../../serverFunctions.js"
import { useEffect } from "react"

export default function SeatsSelection({selectedSession, setSelectedSession}) {
    const sessionId = useParams().sessionId
    useEffect(() => {
        getSeatsForSession(sessionId)
            .then( resp => setSelectedSession(resp.data))
        }
    ,[]);


    
    const examples = [
        {name: "Selecionado", state:"selected"},
        {name: "Disponível", state:"available"},
        {name: "Indisponível", state:"unavailable"}
    ]
    const list = [];
    for (let i = 1 ; i <= 50 ; i++) { list.push({name: i, state:"available"})};
    return (
        <section className = "seats-screen">
            <p>Selecione o(s) assento(s)</p>
            <div className="session-seats">
                {list.map( ({name,state}) => <Seat id={name} state = {state}/> )}
            </div>
            <div className="seats-explanation">
                {examples.map( ({name,state}) => <Seat statusDescription={name} state = {state}/> )}
            </div>
            <div className="clients-info">
                {[{seatId:1}].map( ({seatId}) => <ClientsData seatId = {seatId} /> )}
            </div>
            <button className="forward">
                Reservar assento(s)
            </button>
        </section>
    );
}

function Seat ({statusDescription, id, state}) {
    return (
        <div>
            <div className={`seat ${state}`}>{id}</div>
            {statusDescription ? <span>{statusDescription}</span> : ""}
        </div>
    );
}

function ClientsData({seatId}) {
    return (
        <div className="client-data">
            <p>
                Nome do compador do assento {seatId}:
            </p>
            <input placeholder= "Digite seu nome..." />
            <p>
                CPF do compador do assento {seatId}:
            </p>
            <input placeholder= "Digite seu CPF..." />
        </div>
    );
}