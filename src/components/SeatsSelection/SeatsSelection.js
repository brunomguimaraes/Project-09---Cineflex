import "./SeatsSelection.css"

export default function SeatsSelection() {
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
                {list.map( ({name,state}) => <Seat name={name} state = {state}/> )}
            </div>
            <div className="seats-explanation">
                {examples.map( ({name,state}) => <SeatExplanation name={name} state = {state}/> )}
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

function Seat ({name, id, state}) {
    return (
        <div className={`seat ${state}`}>
            {name}
        </div>
    );
}

function SeatExplanation ({name, id, state}) {
    return (
        <div className="example">
            <div className={`seat ${state}`}></div>
            <span>{name}</span>
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