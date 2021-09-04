import "./SuccessfulPurchase.css"
import {useHistory} from "react-router-dom"

export default function SuccessfulPurchase({ selectedMovie, selectedSession, selectedSeats,resetPurchaseData, setEnableBottomBarAndBackButton }) {
    window.scrollTo(0, 0);
    setEnableBottomBarAndBackButton(false);
    const browsingHistory = useHistory()
    function returnHomeScreen () {
        resetPurchaseData({movie:true, session:true, seats:true});
        browsingHistory.push("/")
    }

    return (
        <section className="successful-purchase">
            <div className="success-message">
                <p>Pedido feito </p>
                <p> com sucesso!</p>
            </div>
                <MovieAndSessionData selectedMovie = {selectedMovie} selectedSession = {selectedSession} />
                <SeatsData selectedSeats = { selectedSeats } />
                <ClientsData selectedSeats = { selectedSeats } />
            <button className="return-home" onClick={returnHomeScreen} >
                Voltar pra Home
            </button>
        </section>
    );
}

function MovieAndSessionData({selectedMovie, selectedSession}){
    return (
        <div className="purchase-information">
            <p className="title"> Filme e sessão </p>
            <p> {selectedMovie.title} </p>
            <p> {`${selectedSession.day.date} - ${selectedSession.name}`} </p>
        </div>
    );
}

function SeatsData({selectedSeats}) {
    return (
        <div className="purchase-information">
            <p className="title">
            {selectedSeats.clients.length === 1 ? "Ingresso" : "Ingressos"}
            </p>
            {selectedSeats.clients.map( ({seatName}, index ) => <p key = { index } >{`Assento ${seatName}`}</p> )}
        </div>
    );
}

function ClientsData({selectedSeats}) {
    function formatCpf (rawCpf) {
        return `${rawCpf.substring(0,3)}.${rawCpf.substring(3,6)}.${rawCpf.substring(6,9)}-${rawCpf.substring(9,11)}`;
    }
    return (
        <div className="purchase-information">
        <p className="title">
            {selectedSeats.clients.length === 1 ? "Comprador(a)" : "Compradores"}
        </p>
        {selectedSeats.clients.map( ({seatName, nome, cpf}, index) => 
            <div key = { index } >
                <p> {selectedSeats.clients.length !== 1 ? `Assento ${seatName}` : ""}  </p>
                <p> {`Nome: ${nome}`} </p>
                <p> {`CPF: ${formatCpf(cpf)}`} </p>
            </div>
        )}
    </div>
    );
}