import "./Loading.css";
import LoadingGif from "../../Media/Loading.gif";

export default function Loading () {
    return (
        <div className = "loading-div">
            <img className = "loading-gif" src = {LoadingGif} alt = "Carregando..." />
        </div>
    );
}