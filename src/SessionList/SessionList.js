import "./SessionList.css"

export default function SessionList() {
    const list = [1,2,3,4,5,6]
    return (
        <section className = "sessions-screen">
            <p>Selecione o horário</p>
            <div className="sessions">
                {list.map( () => <Day /> )}
            </div>
        </section>
    );
}

function Day({id, weekday, date, showtimes}) {
    const list = [1,2]
    return (
        <>
        <p>Quinta-feira - 24/06/2021</p>
        {list.map( () => <ShowTime /> )}
        </>
    );
}

function ShowTime () {
    return (
        <button>
            15:00
        </button>
    );
}