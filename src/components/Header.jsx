import React from "react"
import './header.css'
import cardData from "./cardData.js"
import ham from "../images/ham.png"
import search from "../images/search.png"
import mic from "../images/mic.png"
import youIcon from "../images/youIcon.svg"
import youtube from "../images/youtube.png"
import more from "../images/more.png"
import signin from "../images/signin.png"





export default function Header(){
    const titleData = cardData.map(card => card.title);
    const [list, setList] = React.useState('');
    const [suggestion, setSuggestion] = React.useState([]);
    const [isFocused, setIsFocused] = React.useState(false);
    const searchRef = React.useRef(null); 

    React.useEffect(()=>{
        const filteredData = 
        titleData.filter(da => da.toLowerCase().includes(list.toLowerCase()));
        if (list.length > 0) {
        setSuggestion(filteredData);
        }
        else{
            setSuggestion([]);
        }
    }, [list])

    React.useEffect(()=>{
        const handleClick = (event)=>{
            if (searchRef.current && !searchRef.current.contains(event.target)){
                setIsFocused(false);
            }
        }
            document.addEventListener('mousedown', handleClick);
            return ()=>{
                document.removeEventListener('mousedown', handleClick);
            }            
         
    },[])



    return (
        <>
        <div className = "main" >
            <div className = "icon">
                <img className = "ham"src={ham} alt = "Hamburger Icon" />
                <img className = "youIcon"src={youIcon} alt = "Youtube Icon" />
                <img className="youtube" src= {youtube} alt = "Youtube Logo" />
            </div>
            <div className = "searchBar">
                <div className = "searchWrap">
                    <div className = "searchContainer" ref={searchRef}>
                        <input 
                        className = "searchBar1"
                        placeholder="Search"
                        type="text"
                        value={list} 
                        onChange = {e=> setList(e.target.value)}
                        onClick = {()=> setIsFocused(true)}
                        />
                        {suggestion.length>0 && isFocused && (
                            <div className = "suggestionBox"  >
                                {suggestion.map((item,index)=> (
                                    <div key = {index} className = "suggestionItem">
                                        <img src={search} alt = "Search Icon" className = "newSearch"/>
                                        <div className="searchItem">{item}</div>
                                    </div>
                                ))
                                }
                            </div>       
                        )}
                    </div>
                    <button className="searchIcon">
                        <img src={search} alt = "Search Icon"/> 
                    </button>
                    <button className = "micBut">
                        <img className = "mic" src={mic} alt = "Microphone Icon"/>
                    </button>
                </div>
            
            </div>
            <div className = "right">
                <img className = "more" src={more} alt = "More Icon"/>
                <button className = "signinBut">
                    <img className = "signin" src={signin} alt = "Sign In Icon"/>
                    Sign In
                </button>
            </div>
        </div>          
        </>
    )
}