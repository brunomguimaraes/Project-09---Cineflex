import "./SessionList.css"
import {Link, useParams} from "react-router-dom"
import {getMovieById} from "../../serverFunctions.js"
import { useEffect } from "react"

export default function SessionList({selectedMovie,setSelectedMovie,setEnableBottomBarAndBackButton}) {
    const movieId = useParams().movieId
    useEffect(() => {
        getMovieById(movieId)
            .then( resp => setSelectedMovie(resp.data))
        }
    ,[]);
    if(!selectedMovie.days) {
        return <h1>carregando...</h1>
    }
    setEnableBottomBarAndBackButton(true);
    return (
        <section className = "sessions-screen">
            <p>Selecione o horário</p>
            <div className="sessions">
                {selectedMovie.days.map( ({weekday, showtimes, date},index) => 
                    <Day 
                        key={index}
                        weekday = {weekday}
                        showtimes = {showtimes}
                        date = {date}
                    /> )}
            </div>
        </section>
    );

}

function Day({ weekday, date, showtimes}) {
    return (
        <>
        <p>{`${weekday} - ${date}`}</p>
        {showtimes.map( ({ name, id }, index) => 
            <ShowTime 
                key = {index}
                name={name}
                id={id}
            /> 
        )}
        </>
    );
}

function ShowTime ({ name, id }) {
    return (
        <Link to = {`/sessao/${id}`}>
            <button className = "session"> {name} </button>
        </Link>
    );
} 