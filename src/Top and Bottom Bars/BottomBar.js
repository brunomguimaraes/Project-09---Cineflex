import "./BottomBar.css";

export default function BottomBar({movieName, movieSession}) {
    if (!movieName) {
        return ""
    };
    return (
        <footer>
            <img src="temp/Holmes.png" />
            <div>
                <p>Enola Holmes</p>
                {movieSession ? <p>{movieSession}</p> : ""}
            </div>
        </footer>
    );
}