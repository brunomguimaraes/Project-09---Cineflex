import "./MoviesList.css";
import { getMoviesList, displayError } from "../../serverFunctions.js"
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom"

export default function MoviesList({setEnableBottomBarAndBackButton, resetPurchaseData }) {
    setEnableBottomBarAndBackButton(false)
    const [moviesList,setMoviesList] = useState([]);
    const browsingHistory = useHistory();
    useEffect( () => {
        resetPurchaseData({movie:true, session:true, seats:true})
        getMoviesList()
            .then( (resp) => setMoviesList(resp.data))
            .catch( () => { displayError(browsingHistory) } );
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