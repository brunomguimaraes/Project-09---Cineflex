import "./MoviesList.css";
import { getMoviesList } from "../../serverFunctions.js"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export default function MoviesList() {
    const [moviesList,setMoviesList] = useState([]);
    useEffect( () => {
        getMoviesList()
            .then( (resp) => setMoviesList(resp.data));
        }
    ,[]);

    return (
        <section className = "movies-list">
            <p>Selecione o filme</p>
            <div>
              {moviesList.map( ({title, posterURL, id}, index) => <Movie key = {index} title = {title} posterURL={posterURL} id={id}/> )}
            </div>
        </section>
    );
}

function Movie({ title, posterURL, id }) {
    return (
        <Link className = "movie-poster" to={`/filme/${id}`}>
            <img src={posterURL} alt = {title}/>
        </Link>
    );
}