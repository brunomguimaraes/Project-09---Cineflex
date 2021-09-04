import "./SuccessfulPurchase.css"

export default function SuccessfulPurchase({ selectedMovie, selectedSession, selectedSeats,resetPurchaseData, setEnableBottomBar }) {
    window.scrollTo(0, 0);
    setEnableBottomBar(false);
    const [purchasedMovie, purchasedSession, purchasedSeats] = [{...selectedMovie},{...selectedSession},{...selectedSeats}];

    return (
        <section className="successful-purchase">
            <div className="success-message">
                <p>Pedido feito </p>
                <p> com sucesso!</p>
            </div>
            <MovieAndSessionData purchasedMovie = {purchasedMovie} purchasedSession = {purchasedSession} />
            <SeatsData purchasedSeats = { purchasedSeats } />
            <ClientsData purchasedSeats = { purchasedSeats } />
            <button className="return-home">
                Voltar pra Home
            </button>
        </section>
    );
}

function MovieAndSessionData({purchasedMovie, purchasedSession}){
    return (
        <div className="purchase-information">
            <p className="title">
                Filme e sessão
            </p>
            <p>
                {purchasedMovie.title}
            </p>
            <p>
                {`${purchasedSession.day.date} - ${purchasedSession.name}`}
            </p>
        </div>
    );
}

function SeatsData({purchasedSeats}) {
    console.log(purchasedSeats)
    console.log(purchasedSeats.clients)
    return (
        <div className="purchase-information">
            <p className="title">
            {purchasedSeats.clients.length === 1 ? "Ingresso" : "Ingressos"}
            </p>
            {purchasedSeats.clients.map( ({seatName}) => <p>{`Assento ${seatName}`}</p> )}
        </div>
    );
}

function ClientsData({purchasedSeats}) {
    function formatCpf (rawCpf) {
        return `${rawCpf.substring(0,3)}.${rawCpf.substring(3,6)}.${rawCpf.substring(6,9)}-${rawCpf.substring(9,11)}`;
    }
    return (
        <div className="purchase-information">
        <p className="title">
            {purchasedSeats.clients.length === 1 ? "Comprador(a)" : "Compradores"}
        </p>
        {purchasedSeats.clients.map( ({seatName, nome, cpf}) => 
            <div>
                <p>
                {purchasedSeats.clients.length !== 1 ? `Assento ${seatName}` : ""} 
                </p>
                <p>
                    {`Nome: ${nome}`}
                </p>
                <p>
                    {`CPF: ${formatCpf(cpf)}`}
                </p>
            </div>
        )}
    </div>
    );
}