import React, { useEffect, useRef} from "react"
import { Link } from "react-router-dom"
import "./contact.css"
import Magnetic from "../../Animations/magnetic"
import "../../Animations/hover-effect.css"
function Contact(){
    const Ref = useRef(null)
    //adding magnetic effect to the button
    useEffect(() => {
        const btn = Ref.current.querySelector(".btn")
        Magnetic(btn)

    }, [])

    //moving the button while scrolling
    useEffect(() => {
        const btn = Ref.current.querySelector(".btn")
        document.addEventListener("keydown", (e) => {
            if(e.key == "ArrowUp"){
                btn.style.transform = "translateX(-80px)"
            }
            if(e.key == "ArrowDown"){
                btn.style.transform = "translateX(0px)"
            }
        })
        document.addEventListener("wheel", (e) => {
            if(e.deltaY > 0){
                btn.style.transform = "translateX(0px)"
            }
            if(e.deltaY < 0){
                btn.style.transform = "translateX(-80px)"
            }
        })
    }, [])
    return(
        <div className="contact-page" ref = {Ref}>
            <div className="heading">
                
                <h1> <img src = "icon.png"></img>Let's work together</h1>
            </div>
            <p className="arrow">ↆ</p>
            <div className = "line-btn">
                <hr></hr>
                <Link to = "/contact" className="btn hover-effect"><span>Get in touch</span></Link>
            </div>
                <div className = "mail-num">
                    <div className="hover-effect"><a href = "mailto:sambhusankarswain@gmail.com">sambhusankarswain@gmail.com</a></div>
                    <div className="hover-effect"><a href = "tel:8238187630">+91 8238187630</a></div>
                </div>
                <div></div>
           
        </div>
    )
}
export default Contact