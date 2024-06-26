import React, {useEffect, useRef} from 'react'
import "./hero.css"
import Myimage from "../../assets/portfolio_image.jpg"
import { gsap } from "gsap"
function Hero(){
    const big_name = useRef(null)

    //moving the big name by page scrolling
    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if(window.scrollY > 0){
                big_name.current.style.animationDirection = "reverse";
            }
            else{
                big_name.current.style.animationDirection = "normal";
            }
        })
    }, []);

    return (
        <div className = "hero-page" >
            <div className = "location">
                <div className = "box">
                    <p className = "india">Located in  the India</p>
                    <div className = "atlas-container">
                        <i className="fas fa-globe fa-bounce"></i>
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
            <h1 className = "big-name" ref = {big_name}>Sambhu Sankar Swain ─── Sambhu Sankar Swain</h1>
        </div>
    )
}
export default Hero