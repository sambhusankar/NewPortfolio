import "./hero.css"
import Myimage from "../../assets/portfolio_image.jpg"
function Hero(){
    return (
        <div className = "hero-page">
            <div className = "location">
                <div className = "box">
                    <p className = "india">Located in  the India</p>
                    <div className = "atlas-container">
                            🌍
                    </div>
                </div>

            </div>

            <div className = "photo">
            <img src = {Myimage} className= "img"></img>
            </div>

            <div className = "skill">
                <p className = "arrow">ↆ</p>  
                <br></br>  
                <p>Frontend</p>
                <p>Designer & Developer</p>
            </div>
        </div>
    )
}
export default Hero