import axios from "axios"

const mainUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex"

export function getMoviesList () {
    return axios.get(`${mainUrl}/movies`);
}

export function getMovieById (movieId) {
    return axios.get(`${mainUrl}/movies/${movieId}/showtimes`)
}

export function getSeatsForSession(sessionId) {
    return axios.get(`${mainUrl}/showtimes/${sessionId}/seats`)
}

export function adjustSelectedSeatsDataAndSendToServer ({ids,clients}) {
    const compradores = clients.map( ({seatId,nome,cpf}) => ({idAssento:seatId, nome, cpf }) );
    const modifiedSelectedSeatsData = {ids:ids, compradores:compradores};
    console.log(modifiedSelectedSeatsData)
}