import "./sideBar.css"
import home from "../images/home.png"
import shorts from "../images/shorts.png"
import sub from "../images/sub.png"
import you from "../images/you.png"
import history from "../images/history.png"

export default function Sidebar (){
    return (
        <> 
            <div className="side">
                <button className="icon">
                    <img src = {home} alt="Home icon"/>
                </button>
                <button className="icon">
                    <img src = {shorts} alt = "Shorts icon" />
                </button>
                <button className="icon">
                    <img src = {sub} alt = "Subscription icon" />
                </button>
                <button className="icon">
                    <img src = {you} alt = "You icon" className="you"/>
                </button>
                <button className="icon">
                    <img src = {history} alt = "History icon" className="his"/>
                </button>
            </div>
        </>
    )
};