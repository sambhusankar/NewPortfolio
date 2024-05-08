import React, { useRef, useEffect } from "react"
import { Link } from 'react-router-dom'
import './sidebar.css' 
import Magnetic from "../../Animations/magnetic"
import Socials from "../Socials/socials"
function Sidebar({isopen}){
    const Ref = useRef(null)
    const overlay = document.createElement("div")
    overlay.classList.add("overlay")
    

    //Link buttons hover effect
    useEffect(() => {
        const dots = Ref.current.querySelectorAll(".dot");
        const links = Ref.current.querySelectorAll(".Links")
        for(let i = 0; i < links.length; i++){
            links[i].addEventListener("mouseover", () => {
                links[i].style.color = "white"
                dots[i].style.fontSize = "15px"
            })
        };
        for(let i = 0; i < links.length; i++){
            links[i].addEventListener("mouseout", () => {
                dots[i].style.fontSize = "0"
            })
        };
        

    }, []);

    //making light dark to the main body on sidebar open and opening sidebar
    useEffect(() => {
        if(isopen){
            Ref.current.style.width = "500px"
            Ref.current.classList.add("animate")
            Ref.current.style.right = "0vw"
            document.body.style.overflow = "hidden"
            document.body.appendChild(overlay)
        }
        else{
            Ref.current.style.width = "400px"
            Ref.current.classList.remove("animate")
            Ref.current.style.right = "-500px"
            document.body.style.overflowY = "scroll"
            const existing_overlay = document.querySelector(".overlay")
            if(existing_overlay){
                existing_overlay.remove()
            }
        }
    }, [isopen]);

    useEffect(() => {
        const element = Ref.current.querySelector(".a");
        element.addEventListener("mousemove", (e) => {
            const y = element.offsetTop
            const x = element.offsetLeft
            const m_x = e.pageX - x - element.offsetWidth / 2
            const m_y = e.pageY - y - element.offsetHeight / 2
            element.style.transform = `translate(${m_x * 0.3}px, ${m_y * 0.3}px)`
        });
        element.addEventListener("mouseout", () => {
            element.style.transform = "";
        })
<<<<<<< HEAD
    }, []);

    
=======
    }, [])
>>>>>>> 8b42c81a4837f162360ab68602050e14df34e00d

    return(
        <div className = "sidebar-page" ref = { Ref }>
            <h5>NAVIGATION</h5>
            <hr></hr>
            <ul className= "Routes" >
                <li>
                    <span className = "dot">●</span>
                    <Link className = "Links" to = "/">Home</Link>
                </li>
                <li>
                    <span className = "dot">●</span>
                    <Link className = "Links" to = "/about">About</Link>
                </li>
                <li>
                    <span className = "dot">●</span>
                    <Link className = "Links" to = "/work">Work</Link>
                </li>
                <li>
                    <span className = "dot">●</span>
                    <Link className = "Links" to = "/contact">Contact</Link>
                </li>
            </ul>
            <div className="social-div">
            <Socials />
            </div>
        </div>
    )
}
export default Sidebar