import axios from "axios"

const mainUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies"

export function getMoviesList () {
    return axios.get(mainUrl);
}
