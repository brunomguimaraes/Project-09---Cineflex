import "./TopBar.css";
import { useHistory} from "react-router-dom"
import {AiOutlineRollback} from "react-icons/ai"

export default function TopBar() {
    const browsingHistory = useHistory()
    return (
        <header className="main-top-bar">
            <button><AiOutlineRollback /></button>
            <span>Cineflex</span>
        </header>
    );
}