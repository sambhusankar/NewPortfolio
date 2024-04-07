import React, { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import Magnetic from "../../Animations/magnetic"
import "../../Animations/Shakable.css"
import "./about.css"
function About(){
    const Ref = useRef(null)
    const border_colors = ["#dee0e0", "#babd9b", "#b9c7c6", "#232424", "#89aba5", "#e0d1e3", "#c2c0c2", "#e0d5c3"]
    
    // border for images
    useEffect(() => {
        const imgs = Ref.current.querySelectorAll("img")
        for(const [i, img] of imgs.entries()){
            img.style.border = ` 25px solid ${border_colors[i] }`
            img.style.borderTopWidth ="35px" ;
            img.style.borderBottomWidth = "35px";
         
        }
    }, []);

    //magnetic effect to aboutme button
    useEffect(() => {
        const btn = Ref.current.querySelector(".aboutme-bubble")
        Magnetic(btn)
    }, [])

    return(
        <div className = "about-page" ref = {Ref}>
            <div className="about-top-section">
                <p>Helping brands to standout in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.</p>
                <p>The combination of my passion for design, code & interaction positions me in a unique place in the web development world.</p>
                <h5>RECENT WORK</h5>
                <Link className = "aboutme-bubble" to = "/about"><span>About me</span></Link>
            
            </div>
            <ul className="works">
                <hr></hr>
                <li>
                    <h1>Calculator</h1>
                    <span> Development </span>
                </li>
                <hr></hr>
                <li>
                    <h1>Todo App</h1>
                    <span> Design & Development </span>
                </li>
                <hr></hr>
                <li>
                    <h1>PDF Merger</h1>
                    <span> Design & Development </span>
                </li>
                <hr></hr>
                <li>
                    <h1>Weather Forecast</h1>
                    <span> Design & Development </span>
                </li>
                <hr />
            </ul>
            <div className="more-work">
            <Link to = "/work" className="more-work-btn"><span>More work</span></Link>
            <div className="left-scroll">
                <img src = "https://picsum.photos/id/237/300/200"></img>
                <img src = "https://picsum.photos/id/238/300/200"></img>
                <img src = "https://picsum.photos/id/236/300/200"></img>
                <img src = "https://picsum.photos/id/234/300/200"></img>
            </div>
            <div className="right-scroll">
                <img src = "https://picsum.photos/id/238/300/200"></img>
                <img src = "https://picsum.photos/id/236/300/200"></img>
                <img src = "https://picsum.photos/id/234/300/200"></img>
                <img src = "https://picsum.photos/id/237/300/200"></img>
            </div>
            </div>
            
        </div>
    )
}
export default About