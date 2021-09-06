import "./BottomBar.css";

export default function BottomBar({ enabled, movie:{title, posterURL}, session:{name:movieSession, day:{weekday}} }) {
    if (!enabled || !title) {
        return ""
    };
    return (
        <footer>
            <img src={posterURL} alt={title}/>
            <div>
                <p>{title}</p>
                {movieSession ? <p>{`${weekday} - ${movieSession}`}</p> : ""}
            </div>
        </footer>
    );
}