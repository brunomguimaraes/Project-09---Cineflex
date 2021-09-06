import "./SessionList.css";
import {Link, useParams, useHistory} from "react-router-dom";
import Loading from "../Loading/Loading.js";
import {getMovieById, displayError} from "../../serverFunctions.js";
import { useEffect } from "react";

export default function SessionList({selectedMovie,setSelectedMovie,setEnableBottomBarAndBackButton}) {
    const movieId = useParams().movieId;
    const browsingHistory = useHistory();
    setEnableBottomBarAndBackButton(true);
    useEffect(() => {
        getMovieById(movieId)
            .then( resp => setSelectedMovie(resp.data))
            .catch( () => { displayError(browsingHistory) } );
        }
    ,[]);

    if(!selectedMovie.days) {
        return (
            <Loading />
        );
    };

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