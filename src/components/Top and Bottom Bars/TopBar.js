import "./TopBar.css";
import { useHistory} from "react-router-dom";
import {AiOutlineRollback} from "react-icons/ai";

export default function TopBar({ enabled, resetPurchaseData }) {
    const browsingHistory = useHistory();
    function goBack() {
        if(browsingHistory.location.pathname.includes("filme")) {
            resetPurchaseData({movie:true});
        }
        if(browsingHistory.location.pathname.includes("sessao")) {
            resetPurchaseData({session:true});
        }
        browsingHistory.goBack();
    }
    return (
        <header className="main-top-bar">
            {enabled ? <button onClick={goBack}><AiOutlineRollback /></button> : ""}
            <span>Cineflex</span>
        </header>
    );
}