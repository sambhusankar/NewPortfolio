import React, { useRef, useEffect } from "react"
import { Link } from 'react-router-dom'
import './sidebar.css' 
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
        }
    }, []);

    //making light dark to the main body on sidebar open and opening sidebar
    useEffect(() => {
        if(isopen){
            Ref.current.style.right = "0vw"
            document.body.style.overflow = "hidden"
            document.body.appendChild(overlay)
        }
        else{
            Ref.current.style.right = "-500px"
            document.body.style.overflowY = "scroll"
            const existing_overlay = document.querySelector(".overlay")
            if(existing_overlay){
                existing_overlay.remove()
            }
        }
    }, [isopen]);

    

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

            <h5>SOCIALS</h5>
            <div>
                <a href = "https://in.linkedin.com/in/s-sankar-swain-b9821a270">Linkedin</a>
                <a href = "https://twitter.com/sankar_sw">Twitter</a>
                <a href = "https://github.com/sambhusankar">Github</a>
                <a href = "https://wa.link/igftyr">Whatsapp</a>
            </div>

        </div>
    )
}
export default Sidebar