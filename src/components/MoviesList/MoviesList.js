import "./MoviesList.css";
import {getMoviesList} from "../../serverFunctions.js"
import { useState, useEffect } from "react";

export default function MoviesList() {
    const [MoviesList,setMoviesList] = useState([]);

    useEffect( () => {
        getMoviesList()
            .then( (resp) => setMoviesList(resp.data));
    }
    ,[]);

    console.log("OPA");
    return (
        <section className = "movies-list">
            <p>Selecione o filme</p>
            <div>
              {MoviesList.map( ({posterURL}, index) => <Movie key = {index} posterURL={posterURL}/> )}
            </div>
        </section>
    );
}

function Movie({posterURL}) {
    return (
        <img src={posterURL} />
    );
}