import "./card.css"

export default function Card (props) {
    return(
        <>
            <div className="card">
                <div className="thumbnailContainer">
                    <img 
                        className="thumbnail"
                        src = {props.thumbnail}
                        alt="Video thumbnail"
                    />
                    <div className = "time">
                        {props.time}
                    </div>
                </div>
                <div className = 'belowCard'>
                    <img
                    className="accountImg"
                    src = {props.accountImg}
                    alt = "Account Image"
                    />
                    <div className ="title">
                        {props.title}
                        <p className="bottom">
                            <p className="channel">{props.channel}</p>
                            <p className="meta">{props.meta}</p>
                        </p>
                    </div>
                </div>
                



            </div>        
        </>
    )
}